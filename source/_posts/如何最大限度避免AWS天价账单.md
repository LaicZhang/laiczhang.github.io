---
title: 如何最大限度避免AWS天价账单
copyright: true
comment: false
mathjax: false
date: 2022-09-30 15:37:18
updated: 2022-09-30 15:37:18
tags:
  - AWS
categories: 优化
keywords: aws, 优化, 云计算, 省钱, 服务器, 天价账单
permalink: how-to-avoid-aws-expensive-bill/
description:
---
在摸索了一段时间后的一些经验，希望能帮助到大家。

<!-- more -->
## 写在前面

`AWS`更多的是面向企业级的用户，所以个人用户用起来可能觉得很复杂。但是`AWS`其实是提供了很多方法来帮助用户避免天价账单的，只是很多人不知道。我用了一段时间后，发现了一些方法，希望能帮助到大家。

## 0. 购买现成账号（不推荐）

此类账号唯一的好处是绑定的并非自己的信息，所以直接从根本上避免了天价账单。目前8v账号价格在30-50元，不过此行为在任何一家中大型服务商处均是违反 `TOS` 条例的，官方有权利要求水电账单等真实用户资料进行二次验证/直接封禁账号。

此行为的泛滥也是导致正常用户新注册也逐渐需要二次验证的主要原因。

## 1. 选择合适的EC2实例类型

由于特殊的CPU积分机制，`AWS`的实例类型分为两种，一种是`T`开头的，一种是`M`开头的。`T`开头的实例类型是按照CPU积分来收费的，而`M`开头的实例类型是按照CPU时钟周期来收费的。所以如果你的应用程序不需要高性能，那么可以选择`T`开头的实例类型，这样可以节省很多钱。

当然，我相信看我这篇总结的都是开的`T`型实例。这里还有一点需要注意，如果你使用`T`型实例，请注意不要长时间跑高占用CPU的应用，否则可能会被额外收取费用（如果我没记错的话是0.05usd/hour)。

## 2. 选择更便宜的区域

不同地区的ec2实例费用/EBS/流量等费用都是不同的，我大致看了一下，美区的更便宜，亚洲的更贵。所以如果你的应用不需要更高的访问速度，如用来测试脚本之类的，可以考虑选择美区。

## 3. 注意免费流量规则

由于大部分天价账单都是由流量超出导致的，此处专门针对流量再补充一些内容。

- 根据最新的规则，新用户免费12个月的EC2的免费流量为100G，in方向不计入，仅计入out方向
- 每月免费1T流量的CloudFront差不多，回源至EC2/S3的流量不计费，**回源至其他云服务的流量收费**
- 由于AWS是按小时计费的，所以不要在新开一台实例后立刻大量跑流量，且流量最好不要超过对应机型相对应的小时计的流量额度，建议放置几天后再跑，。

## 4. 主动对流量进行监控

常见的监控方法有两种，一种是安装探针程序，一种是使用`CloudWatch`。两种方法各有优缺点。

### 1. 安装探针程序

- 优点
  - 有好看的界面
  - 无需强制登录，可以直接看到流量情况
- 缺点
  - 探针程序需占用少量资源
  - 被恶意攻击时，CPU高负载可能无法打开探针界面
  - 部分魔改探针程序可能有安全隐患

### 2. 使用CloudWatch

我个人比较推荐使用`CloudWatch`，因为它是官方的，而且可以监控到更多的信息，比如过去一段时间的网络流量。

#### 1. 针对EC2

#### 2. 针对CloudFront

- `Geographic restrictions` 设置允许/禁止访问的地区

#### 3. 调用Lambda函数发送通知/关闭ec2

Lambda+API getaway是比较经典的选择。

关于如何推送消息，因为做毕设的时候下了个pushdeer，所以下面的代码是用pushdeer来发送消息。

其中具体参数请自行更换。

```js
// function: send a notify
// document of http: https://nodejs.org/api/http.html#httprequestoptions-callback
const https = require('https');

const pushkey = 'xxxxxx'
const text = 'xxxxxxx'

exports.handler = async (event) => {
    let body = ''
    const options={
      hostname: 'api2.pushdeer.com',
      port: 443,
      path: `/message/push?pushkey=${pushkey}&text=${text}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const response = await new Promise((resolve, reject) => {
        const req = https.get(options, function(res) {
          res.on('data', chunk => {
            body += chunk;
          });
          res.on('end', () => {
            resolve({
                statusCode: 200,
                body: JSON.stringify(JSON.parse(body),)
                // body
            });
          });
        });
        
        req.on('error', (e) => {
          reject({
              statusCode: 500,
              body: e
          });
        });
    });
    
    return response;
};
```

由于目前最大可能导致费用过高的是流量，所以可以在流量超过一定值时，调用Lambda函数来关闭EC2实例，这样就可以避免费用过高。

```python
# function: stop the ec2 instances
import boto3
region = 'us-west-1'
instances = ['i-08ce9b2d7eccf6d26','i-08ce9b2d7eccf6d26']
ec2 = boto3.client('ec2', region_name=region)

def lambda_handler(event, context):
    ec2.stop_instances(InstanceIds=instances)
    print('stopped your instances: ' + str(instances))
```

### 4. 调用SNS发送通知

[SNS](https://aws.amazon.com/sns/)Amazon SNS 是一种高度可用、持久、安全、完全托管的发布/订阅消息服务，使您能够分离微服务、分布式系统和事件驱动的无服务器应用程序。 Amazon SNS 为高吞吐量、基于推送、多对多消息传递提供主题。

CloudFront界面即可配置调用SNS发送通知，相比于Lambda更简单（不用额外写代码）。~~虽然貌似需额外付少量费用~~。

## 5. 创建账单警报-Billing alarms

也是基于CloudWatch，可以设置当账单超过某个值时，发送通知。

虽然账单警报最低周期也是6个小时，但是如果是自用超出少部分的话，这个警报可能还是有点用处的？

## 6. 还是出了天价账单

如果有坏人想攻击，上述的方法没能起到作用，还是出了天价账单。

- 尽量选择向客服说明情况，描述自己无法承担这么昂贵的费用，请求免除费用。
  - 发工单的时候尽量带上收到攻击的证据，比如急剧增长的流量监控图或者网络日志。
  - 一般情况下，AWS会给你免除费用，但是会给你一个警告，如果再次出现这种情况，AWS可能会封禁你的账号。
  