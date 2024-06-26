---
title: docker相关容器配置
copyright: true
comment: false
mathjax: false
date: 2024-03-28 15:24:31
updated: 2024-03-28 15:24:31
tags:
  - docker
  - vps
categories: docker
keywords: docker, vps, nginx, sql,redis
permalink: docker-container-configurations/
description:
---
## 前言

一不小心选错了选项，docker直接给我重置了，重新安装一些常用镜像，下面记录一下正在使用的容器和相关配置内容。

<!--more-->
### Nginx

```shell
docker run -d \
--name nginx \
-p 80:80 \
-p 443:443 \
-v $PWD/nginx/html:/usr/share/nginx/html \
-v $PWD/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v $PWD/nginx/log:/var/log/nginx \
-v $PWD/nginx/cert:/etc/nginx/cert \
-v $PWD/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf \
--restart=always \
nginx
```

### postgres

```shell
docker run -d \
    -e POSTGRES_PASSWORD=mypassword \
    -e POSTGRES_USER=myuser \
    -p 5432:5432 \
    --name mypostgres postgres 
```

- 参数POSTGRES_PASSWORD是必需的， POSTGRES_USER它在参数中定义用户的密码。
- 参数POSTGRES_USER是可选的，如果未定义，postgres将使用默认用户，可以使用用户名和密码访问数据库。

### Redis

创建目录：
mkdir -p $PWD/redis/conf

创建文件：
touch $PWD/redis/conf/redis.conf

```shell
docker run -d \
--name redis \
-p 6379:6379 \
--network individual \
-v $PWD/redis/data:/data \
-v $PWD/redis/conf:/etc/redis \
--restart=always \
redis \
redis-server /etc/redis/redis.conf \
--appendonly yes
```

### minio

```shell
docker run  -p 9000:9000 --name minio \
 -d --restart=always \
 -e MINIO_ACCESS_KEY=minio \
 -e MINIO_SECRET_KEY=minio@123 \
 -v /usr/local/minio/data:/data \
 -v /usr/local/minio/config:/root/.minio \
  minio/minio server /data  --console-address ":9000" --address ":9090"
```
