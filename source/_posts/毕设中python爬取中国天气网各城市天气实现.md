---
title: 毕设中python爬取中国天气网各城市天气实现
copyright: true
comment: false
mathjax: false
date: 2022-03-09 11:22:37
updated: 2022-03-09 11:22:37
tags:
  - 毕设
  - python
  - 爬虫
  - 中国天气网
categories: 爬虫
keywords: python3,python, 爬虫, 中国天气网, 毕设
permalink: python-requests-chinese-weather-data/
description:
---

目标网站：<https://www.weather.com.cn/>

目的：将目标网站中中国大陆各个城市天气爬取并保存至 mongoDB 数据库。

<!--more-->

## 分析

- 中国天气网将全国分为华北、东北、华东、华中、华南、西北、西南和港澳台八个大区。
  网址分别如下：

```txt
https://www.weather.com.cn/textFC/hb.shtml
https://www.weather.com.cn/textFC/db.shtml
https://www.weather.com.cn/textFC/hd.shtml
https://www.weather.com.cn/textFC/hz.shtml
https://www.weather.com.cn/textFC/hn.shtml
https://www.weather.com.cn/textFC/xb.shtml
https://www.weather.com.cn/textFC/xn.shtml
https://www.weather.com.cn/textFC/gat.shtml
```

每个大区的地址是有规律的，并且很少，所以没有通过爬虫获取（分页获取），直接放进放入数组中，用函数获取即可。

- 分析单个大区天气数据的结构
  随便打开一个网址，如<https://www.weather.com.cn/textFC/hb.shtml，可以看出是几个表格直接罗列出了天气信息，极大的方便我们直接进行数据提取。>

- 港澳台地区的数据结构不太一样，所以本次不考虑爬取相关地区数据

- 最后还需要注意的是，如果晚上爬取数据，白天的数据就没了（返回的是类似'-n-'的脏数据），所以最好是在白天爬取。

## 代码实现

```python
import re
import time
from lxml import etree
import pymongo
import requests
from bs4 import BeautifulSoup
# import schedule # schedule模块是用来定时执行任务的，可以设置每天的时间点执行任务

uri = "mongodb://user:pass@127.0.0.1:27017/demo"
arr = []
now = time.strftime("%Y-%m-%d", time.localtime())
print('time.localtime=>', now)

client = pymongo.MongoClient(uri)
db = client.demo
collection = db.weather_cn_data
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    'Cookie': ''
}


def detail(detail_url, option):
    url = detail_url
    res = requests.get(url, headers=headers)
    paqu_shengfen_table(res)


def paqu_shengfen_table(res):
    soup = BeautifulSoup(res.content, 'html.parser')
    print('soup', soup)
    table_nums = soup.select('.lQCity > ul > li').__len__()
    for i in range(table_nums):
        # 爬取每个省份table
        tr_all = soup.select('.conMidtab2 > table')[i]

        tr = tr_all.find_all('tr')
        shengfen = (tr[2].get_text().split())[0]
        beautiful(res, tr, shengfen)

# 分析每个省份table


def beautiful(res, tr, shengfen):

    td = tr[2].find_all('td')  # 缩小单位到每个td标签
    city = td[1].get_text().strip()
    tianqixianxiang_1 = td[2].get_text().strip()
    fengxiangfengli_1 = td[3].get_text().strip()
    zuigaoqiwen = td[4].get_text().strip()
    tianqixianxiang_2 = td[5].get_text().strip()
    fengxiangfengli_2 = td[6].get_text().strip()
    zuidiqiwen = td[7].get_text().strip()

    db_data = {
        'time': now,
        'province': shengfen,
        'city': city,
        'daytime_weather_conditions': tianqixianxiang_1,
        'daytime_wind': fengxiangfengli_1,
        'maximum_temperature': zuigaoqiwen,
        'nighttime_weather_conditions': tianqixianxiang_2,
        'nighttime__wind': fengxiangfengli_2,
        'minimum_temperature': zuidiqiwen
    }
    print(res)
    arr.append(db_data)
    # 遍历tr
    for j in tr[3:]:  # 遍历tr，tr下还有td
        td = j.find_all('td')  # 缩小单位到td

        city = td[0].get_text().strip()
        tianqixianxiang_1 = td[1].get_text().strip()
        fengxiangfengli_1 = td[2].get_text().strip()
        zuigaoqiwen = td[3].get_text().strip()
        tianqixianxiang_2 = td[4].get_text().strip()
        fengxiangfengli_2 = td[5].get_text().strip()
        zuidiqiwen = td[6].get_text().strip()

        db_data = {
            'time': now,
            'province': shengfen,
            'city': city,
            'daytime_weather_conditions': tianqixianxiang_1,
            'daytime_wind': fengxiangfengli_1,
            'maximum_temperature': zuigaoqiwen,
            'nighttime_weather_conditions': tianqixianxiang_2,
            'nighttime__wind': fengxiangfengli_2,
            'minimum_temperature': zuidiqiwen
        }
        print(res)
        arr.append(db_data)


def get_datail_url(url, option):
    detail(url, option)


def start(option):

    urls = [
        'https://www.weather.com.cn/textFC/hb.shtml',
        'https://www.weather.com.cn/textFC/db.shtml',
        'https://www.weather.com.cn/textFC/hd.shtml',
        'https://www.weather.com.cn/textFC/hz.shtml',
        'https://www.weather.com.cn/textFC/hn.shtml',
        'https://www.weather.com.cn/textFC/xb.shtml',
        'https://www.weather.com.cn/textFC/xn.shtml',
        'https://www.weather.com.cn/textFC/gat.shtml'
    ]
    # 港澳台的table跟前面的不太一样，本次不爬取
    for i in range(0, 7):
        get_datail_url(urls[i], option)


def job():
    start(1)
    print('arr', arr)
    print('db result', collection.insert_many(arr))

if __name__ == '__main__':
    # schedule.every().day.at("9:00").do(job) # 每天早上9点执行
    # while True:
    #     schedule.run_pending()   # 运行所有可以运行的任务
    #     time.sleep(1000)
    job()

```

## 参考

- <https://gaozhiyuan.me/python/weather-com-cn.html#lwptoc>
