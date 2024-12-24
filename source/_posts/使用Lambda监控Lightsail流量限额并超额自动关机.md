---
title: 使用Lambda监控Lightsail流量限额并超额自动关机
copyright: true
comment: false
mathjax: false
date: 2024-03-01 09:03:23
updated: 2024-03-01 09:03:23
tags:
  - aws
  - lambda
  - lightsail
categories: aws
keywords: aws, lambda, lightsail, 流量, 限额, 自动关机
permalink: use-lambda-to-monitor-lightsail-traffic-limit-and-auto-shutdown-when-exceeding-the-limit/
description: 使用Lambda监控Lightsail流量限额并超额自动关机
---
## 前言

虽然之前写过一篇[《如何最大限度避免AWS天价账单》](https://zyha.cn)，但是这篇文章只做了流量超出提醒，没有提到如何自动关机~~导致我没注意到邮件而被背刺了~~。所以这次我打算写一篇关于如何使用Lambda监控Lightsail流量限额并超额自动关机的文章。

以此纪念上个月我被aws背刺的30刀。

<!-- more -->
## 思路

利用Amazon的Lambda函数计算（100W次以内免费），配合Amazon提供的官方Lightsail API，设置定时任务，每10分钟获取当前流量限额和已使用流量，进行对比，如果达到限额的95%，则关闭Lightsail实例：

- 利用 `Lightsail` 的 `API` 接口： `get_instance` ，获取账号下在当前区域里的所有 `Lightsail` 实例。
- 根据 `Lightsail` 实例的类型，获取每个实例每个月的网络流量配额。
- 根据实例的创建时间，计算出每个实例在当前这个计费周期内的流量配额。
- 通过 `API` 接口：`get_instance_metric_data`，获取每个实例已经使用的入站和出站流量总量。
- 如果流量超出当前计费周期的配额的`95%`，并关闭对应的 `Lightsail` 实例。
- 通过 `EventBridge` 以 `cron job` 的方式定时触发 `Lambda`，运行此检查逻辑。

## 正式开始

### 创建Lambda函数

![aws-lambda-create](https://cdn.zyha.cn/blog/a357ffbb527587be4af3cf46b73d5a9d5b124997988e222f4ae4d9019c26adcd.png?x-oss-process=style/blog)

```python
import json
import boto3
import calendar
import os
from datetime import datetime, date, time,timedelta
 
def get_current_month_first_day_zero_time():
    today = date.today()
    first_day = today.replace(day=1)
    first_day_zero_time = datetime.combine(first_day, time.min)
    return first_day_zero_time
    
def get_current_month_last_day_last_time():
    today = date.today()
    last_day = today.replace(day=calendar.monthrange(today.year, today.month)[1])
    last_day_last_time = datetime.combine(last_day, time(23, 59, 59))
    return last_day_last_time
    
def stop_instance(instance_name):
    client = boto3.client('lightsail')
    response = client.stop_instance(
        instanceName=instance_name,
        force=True
    )

def list_instances(instances_list):
    client = boto3.client('lightsail')
    paginator = client.get_paginator('get_instances')
    # Create a PageIterator from the Paginator
    page_iterator = paginator.paginate()
    for page in page_iterator:
        for instance in page['instances']:
            print(instance['name'])
            instances_list.append(instance['name'])
        
def get_month_dto_quota(instance_name):
    client = boto3.client('lightsail')
    response = client.get_instance(
        instanceName=instance_name
    )
    #print("response : {}".format(response))
    dto_quota = response['instance']['networking']['monthlyTransfer']['gbPerMonthAllocated']
    current_datetime = datetime.now()
    instance_created_datetime = response['instance']['createdAt']
    if (instance_created_datetime.year == current_datetime.year) and (instance_created_datetime.month == current_datetime.month):
        month_ts = get_current_month_last_day_last_time().timestamp() - get_current_month_first_day_zero_time().timestamp()
        instance_valide_ts = get_current_month_last_day_last_time().timestamp() - instance_created_datetime.timestamp()
        dto_quota = (instance_valide_ts/month_ts) * dto_quota
        print("created in current month, quota: {}GB".format(dto_quota))
    else:
        dto_quota = response['instance']['networking']['monthlyTransfer']['gbPerMonthAllocated']
        print("created in previous month, full quota: {}GB".format(dto_quota))
    
    return dto_quota

def get_instance_data_usage(instance_name, data_type):
    client = boto3.client('lightsail')
    current_time = datetime.utcnow()
    start_time = get_current_month_first_day_zero_time()
    end_time = get_current_month_last_day_last_time()
    start_time_str = start_time.strftime('%Y-%m-%dT%H:%M:%SZ')
    end_time_str = end_time.strftime('%Y-%m-%dT%H:%M:%SZ')
 
    response = client.get_instance_metric_data(
        instanceName=instance_name,
        metricName=data_type,
        period= 6 * 600 * 24,
        unit='Bytes',
        statistics=[
            'Sum'
        ],
        startTime=start_time_str,
        endTime=end_time_str 
    )
 
    data_points = response['metricData']
    total_data_usage = sum([data_point['sum'] for data_point in data_points])
    print("total {} usage: {}".format(data_type, total_data_usage))
    return total_data_usage
def push_notification(arn, msg):
    sns_client = boto3.client('sns')
    print("sqs arn: {}".format(arn))
    response = sns_client.publish(
        TopicArn=arn,
        Message=msg,
        Subject='Lightsail NetworkOut exceeded quota '
    )
 
def lambda_handler(event, context):
    instance_name= []
    list_instances(instance_name)
    for i in instance_name:
        quota = get_month_dto_quota(i) * 1000 * 1000 * 1000
        total = get_instance_data_usage(i, "NetworkOut") + get_instance_data_usage(i, "NetworkIn") 
        msg = f"instance_name: {i} \nusage: {total} Byte \nquota: {quota} Byte \nusage percent: {(total/quota)*100} %"
        print(msg)
        
        if (int(quota) * 0.95) < int(total):
            print("(quota * 0.95) < total, soforce close instance: {}".format(1))
            stop_instance(i)
             
    return {
        'statusCode': 200,
        'body': json.dumps('total_data_usage from Lambda!')
    }
```

设置内存为512MB，超时时间为3分钟。

### 创建新策略

![20240301095032](https://cdn.zyha.cn/blog/20240301095032.png?x-oss-process=style/blog)

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "lightsail:GetInstance",
                "lightsail:GetInstanceMetricData",
                "lightsail:GetInstances",
                "lightsail:StopInstance"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```

### 创建触发器

![20240301095802](https://cdn.zyha.cn/blog/20240301095802.png?x-oss-process=style/blog)

时间设置为`cron(0/10 * * * ? *)`，每十分钟触发一次。

## 最后

![20240301100535](https://cdn.zyha.cn/blog/20240301100535.png?x-oss-process=style/blog)

此时就已经基本完成配置了。

Lambda函数每10分钟执行一次，符合条件就会自动关闭实例。

## 参考

- <https://www.nodeseek.com/post-73756-1>
