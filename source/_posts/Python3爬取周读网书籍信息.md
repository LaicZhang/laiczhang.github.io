---
title: Python3爬取周读网书籍信息
copyright: true
comment: false
mathjax: false
date: 2020-01-07 22:46:55
updated: 2020-01-07 22:46:55
tags:
  - python
  - 爬虫
categories: 爬虫
keywords: python,python3,爬虫,周读网,书籍信息
permalink: python3-crawl-zhoudu-books-info/
description:
---

室友想写个图书管理系统，苦于没有数据，

然而爬取周读网，网上的爬虫基本都失效了，

我就又写了个爬虫。

<!-- more -->

## 目标

爬取网站：<https://www.ireadweek.com/> ，将【id，封面，书名，作者，分类，豆瓣评分，简介，下载链接】，存到CSV及mysql数据库中。

网上的文章基本都过时了，本篇文章学习即可，这么好的分享网站，尽量不要去爬，影响人家访问速度就不好了

## v0.1版本

```python
>>> from lxml import etree
>>> html = etree.HTML(x.text)
>>> html
<Element html at 0x2ebae55b388>
>>> html.xpath('//ul[@class="hanghang-list"]/a/li/div[@class="hanghang-list-name"]/text()')
['捐赠', '卓越工作：从优秀到卓越的高效工作法', '这是你的船', '养脾胃就是养命', '史学与红学', '三十年细说从头', '认识经济', '极简法则', '灰马酒店', '第二曲线创新', '自由的声音：大革命后的法国知识分', '与童年创伤和解：化解内心冲突的深度指南', '天使之耳', '那时的某人', '龙蛋', '鸡毛飞上天（上下册）', '黑暗地母的礼物（下）', '反溺爱', '草色连云', 'Trying Not to Try']
```

`XPath` 是一门在 XML 文档中查找信息的语言。 `XPath` 最初设计是用来搜寻XML文档的，但是它同样适用于 HTML 文档的搜索。

`XPath` 的选择功能十分强大，它提供了非常简洁明了的路径选择表达式，另外它还提供了超过 100 个内建函数用于字符串、数值、时间的匹配以及节点、序列的处理等等，几乎所有我们想要定位的节点都可以用 `XPath` 来选择。

所以在做爬虫时，我们完全可以使用 `XPath` 来做相应的信息抽取。

这个比较简单，有爬虫基础的同学应该能看懂，就不细说了。

然后，就是增加了写入`CSV`文件的`v1.0`版本，

## v1.0版本

```python
import requests
from lxml import etree
import csv
import re

csvFile = open('book.csv','w',encoding='utf-8',newline='')
csv_writer = csv.writer(csvFile)

def getFatherIntfo():
    x = requests.get("https://www.ireadweek.com/")
    html = etree.HTML(x.text)
    # print(html)

    print(html.xpath('//ul[@class="hanghang-list"]/a/li/div[@class="hanghang-list-name"]/text()'))
    NewestBook = html.xpath('/html/body/div/div/ul/a[3]/li/div[1]/text()')
    NewestBookLink = html.xpath('/html/body/div/div/ul/a[3]/@href')
    print('最新的书是'+ str(NewestBook) +'，它的地址是'+ str(NewestBookLink))
    NewestBookId = re.sub("\D", "", str(NewestBookLink))
    return NewestBookId


def getChildInfo():
    url1 = 'https://ireadweek.com/sdfesfwsf.php?m=article&a=index&id='
    
    for id in range(14, eval(getFatherIntfo())):
        url2 = url1 + str(id)
        x = requests.get(url2)
        html = etree.HTML(x.text)
        # print(html)

        print(id)# id

        bookPic = html.xpath('/html/body/div[1]/div/div[1]/div[2]/div[1]/img/@src')#封面
        bookPic = ''.join(bookPic)
        print(bookPic)

        bookName = html.xpath('//html/body/div/div/div[1]/div[2]/div[2]/p[1]/text()')# 书名
        bookName = ''.join(bookName)
        print(bookName)
        
        Author = html.xpath('//html/body/div/div/div[1]/div[2]/div[2]/p[2]/text()')# 作者
        Author = ''.join(Author)
        print(Author)

        classification = html.xpath('//html/body/div/div/div[1]/div[2]/div[2]/p[3]/text()')# 分类
        classification = ''.join(classification)
        print(classification)

        score = html.xpath('//html/body/div/div/div[1]/div[2]/div[2]/p[4]/text()')# 豆瓣评分
        score = ''.join(score)
        print(score)

        Introduction = html.xpath('//html/body/div/div/div[1]/div[2]/div[2]/p[6]/text()')# 简介
        Introduction = ''.join(Introduction)
        print(Introduction)

        Link = html.xpath('/html/body/div/div/div[1]/div[3]/div[1]/a/@href')# 下载链接
        Link = ''.join(Link)
        print(Link)

        csv_writer.writerow([id, bookPic, bookName, Author, classification, score, Introduction, Link])


if __name__ == "__main__":
    getChildInfo()
    csvFile.close()

```

基本实现了爬取所有书籍的信息列表并存入`CSV`文件。

这里用到了一些类和对象的知识，还是很好理解的吧。`eval(getFatherIntfo())`是获取最新更新的书籍的`id`。`''.join(Link)`是把解析出的列表转换为`string`字符串。`csv_writer.writerow()`是把这个列表写入CSV文件中。

得到的结果有一些问题，比如说：部分书籍的一些信息为没有（网站的标签不尽相同的原因，，，），这个`CSV`文件在一些`Excel`中打开是乱码。

`v2.0`的存`mysql`版本，还有些问题，改改再更。
