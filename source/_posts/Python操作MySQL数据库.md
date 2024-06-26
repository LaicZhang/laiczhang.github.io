---
title: Python操作MySQL数据库
copyright: true
comment: false
mathjax: false
date: 2020-06-22 15:34:27
updated: 2020-06-22 15:34:27
tags:
  - python
  - 数据库
categories: 技术
keywords: python, 数据库, mysql
permalink: python-operate-mysql-database/
description:
---
看了几篇博客，难道是打开姿势不对？总是感觉不是很懂，于是自己再总结一下。

更新中。。。

<!-- more -->

## 初始化

### 运行环境

- pycharm 2020
- python 3.7

需要使用pip install pymysql安装

### 连接

```python
import pymysql # 导入pymysql模块

conn = pymysql.connect(
    host="你的数据库地址",
    user="用户名",
    password="密码",
    database="数据库名",
    charset="utf8"
    )
```

相关参数及解释
参数  | 解释
------------- | -------------
host  | 数据库服务器地址，默认 localhost
user  |  用户名，默认为当前程序运行用户
password |  登录密码，默认为空字符串
database | 默认操作的数据库
port| 数据库端口，默认为 3306
bind_address| 当客户端有多个网络接口时，指定连接到主机的接口。参数可以是主机名或IP地址。
unix_socket unix| 套接字地址，区别于 host 连接
read_timeout| 读取数据超时时间，单位秒，默认无限制
write_timeout |写入数据超时时间，单位秒，默认无限制
charset |数据库编码
sql_mode |指定默认的 SQL_MODE
read_default_file | 指定my.cnf文件以从[client]部分下读取这些参数。
conv | 用来代替默认的转换字典。这是用来提供自定义的类型的`marshalling`和`unmaraling`。
use_unicode | 是否默认使用unicode字符串。对于Py3k来说，这个选项默认为true。
client_flag | 自定义标志发送到MySQL。在constants.CLIENT中找到可能的值。
cursorclass | 设置默认的游标类型
init_command | 当连接建立完成之后执行的初始化 SQL 语句
connect_timeout| 连接超时时间，默认 10，最小 1，最大 31536000
ssl | 类似于mysql_ssl_set()参数的dict参数。目前不支持capath和cipher参数。
read_default_group | 要从配置文件中读取的Group。
compress |Not supported
named_pipe| Not supported
autocommit |是否自动提交，默认不自动提交，参数值为 None 表示以服务器为准
local_infile| 启用LOAD DATA LOCAL命令的布尔值。(默认：False)
max_allowed_packet| 发送给服务器的最大数据量，默认为 16MB
defer_connect| 是否惰性连接，默认为立即连接
auth_plugin_map |一个处理该插件的类的插件名称口令。该类将把Connection对象作为构造函数的参数。该类需要一个authenticate方法，以一个认证包作为参数。对于对话插件，可以使用 prompt(echo，prompt)方法（如果没有 authenticate method）从用户那里返回一个字符串。(实验性的)
server_public_key | SHA256 authenticaiton插件公钥值。(默认：None)
db| 参数 database 的别名
passwd |参数 password 的别名
binary_prefix | 在字节和字节数组上添加_binary前缀。(默认：False)

## 增

## 查

## 改

## 删

## 参考文章

- <https://www.jianshu.com/p/1ba64df4fd15>
