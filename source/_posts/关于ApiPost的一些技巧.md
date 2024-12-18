---
title: 关于ApiPost的一些技巧
copyright: true
comment: false
mathjax: false
date: 2024-03-27 17:53:19
updated: 2024-03-27 17:53:19
tags:
  - 测试
  - api
categories: 测试
keywords: api, testing, apipost, postman,
permalink: some-tips-about-apipost/
description: ApiPost是一款开源的API测试工具，本文介绍了一些常用的技巧。
---
## 关于ApiPost

ApiPost是一个国产的类Postman的API调试工具。由于Postman的一些限制，我开始尝试使用ApiPost，在这里记录一些我在使用ApiPost过程中发现的一些技巧。

- 2024.6.20更新，8.0版本发布，主要优化启动时间，离谱的是v7和v8数据不互通。。。
<!--more-->
## 1. 添加Header参数

有两种常用方式，下面以`User-Agent`字段为例子，

### 1.1 添加全局Header参数

![20240327175713](https://cdn.zyha.cn/blog/20240327175713.png?x-oss-process=style/blog)

### 1.2 动态添加请求头

在预执行脚本中添加，

```txt
apt.setRequestHeader("User-Agent", UA);
```

## 2. 添加全局token认证

### 2.1 添加全局参数

![20240327180531](https://cdn.zyha.cn/blog/20240327180531.png?x-oss-process=style/blog)

### 2.2 动态添加请求头

在预执行脚本中添加，

```txt
apt.setRequestHeader("Authorization", token);
```

## 3. 同步Swagger文档并分享

ApiPost支持同步Swagger文档，可以通过`导入`功能导入Swagger文档，也可以通过`分享`功能分享Swagger文档。

![20240327175830](https://cdn.zyha.cn/blog/20240327175830.png?x-oss-process=style/blog)

![20240327175914](https://cdn.zyha.cn/blog/20240327175914.png?x-oss-process=style/blog)
