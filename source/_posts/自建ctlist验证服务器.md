---
title: 自建ctlist验证服务器
copyright: true
comment: false
mathjax: false
date: 2021-09-17 16:41:47
updated: 2021-09-17 16:41:47
tags:
  - 网盘
categories: 网盘
keywords: ctlist,验证服务器,自建,pan,网盘,drive,天翼云
permalink: build-a-ctlist-server-myself/
description:
---

~~CTList是一款针对天翼云的个人网盘程序，但是安装使用需要验证token，而申请码已经不再出售，所以自力更生。~~

~~CTList地址：<https://github.com/iiiiiii1/CTList>~~

CTList已无法使用。

<!-- more -->

## 前言

在<https://swjtu.today/archives/CTList.html> 中，已经给出破解思路及自建验证服务器方法，但用的是ubuntu，我的服务器是centos，本文主要记录两者自建过程中的差异及一些小坑。

## 自建验证服务器

### 安装OpenSSL

```bash
yum install openssl
```

### 生成CA证书

```bash
openssl genrsa -out ca.key 1024
openssl req -new -key ca.key -out ca.csr
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

中间会有一些交互的问题，一直回车即可。

### 添加全局证书

```bash
# 将生成的ca.crt复制到/etc/pki/ca-trust/source/anchors，然后执行/bin/update-ca-trust
cp ca.crt /etc/pki/ca-trust/source/anchors
/bin/update-ca-trust
```

### 生成api.moeclub.org的自签名证书

```bash
openssl genrsa -out server_pri.key 1024
openssl req -new -key server_pri.key -out server.csr  #在最后输入Common Name时填入api.moeclub.org
openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt
```

## Nginx配置

vi和nano都可以编辑配置文件

```bash
sudo nano /etc/nginx/conf.d/api.moeclub.org.conf
```

或者

```bash
vi /etc/nginx/conf.d/api.moeclub.org.conf
```

输入以下内容

```conf
server {
    listen 127.0.0.1:443 ssl; #建议只监听本地环回如果CTList也搭载相同服务器上，否则填本机的公网ip
    server_name api.moeclub.org;
    ssl_certificate /path_to_cert/server.crt;
    ssl_certificate_key /path_to_key/server_pri.key;
    location / {
        return 404;
    }
    location /CTListAuth {
        return 206;
    }
}
```

## 更改hosts

```bash
nano /etc/hosts
```

添加一行解析

```txt
127.0.0.1 api.moeclub.org
```

## 安装CTList

安装的步骤，有写的很清楚的了，我就不再详细写了：<https://www.moerats.com/archives/1028/>

需要注意的是，启动CTList的命令中，

```bash
/opt/CTList/CTList -a "AUTH_TOKEN" -bind 0.0.0.0 -port 8000
```

虽然我们已经自建了验证服务器，但是此处的AUTH_TOKEN仍然需要是对应的格式，而并不是如破解教程中标题的任意填写。

这里也给一个有效的auth_token

```txt
e6dc0b7d957b7494df19c9094eb95633
```

安装完成后，打开ip:8000，显示页面，即安装成功。

![image-20210917170153977](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210917170153977.png)
