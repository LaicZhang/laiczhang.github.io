---
title: 项目中遇到vue相关error及解决方案-持续更新中
copyright: true
comment: true
mathjax: false
date: 2021-12-03 10:30:43
updated: 2021-12-03 10:30:43
tags:
  - vue
  - 实习
categories: vue
keywords: vue, error, 实习, 项目
permalink: some-solutions-about-vue-errors/
description:
---
记录实习中遇到的一些vue的问题及解决方案。
<!-- more -->
## 跨域问题

公司使用Nginx反向代理接口域名，所以在conf/nginx.conf文件中需要对不同的域名设置不同的跨域规则。
形如：

```conf
server {...}

server {
    listen 80;
    server_name www.example.com;
    return 301 https://$server_name$request_uri;
    location / {
        proxy_pass https://www.example.com:your_port; proxy_redirect off;proxy_http_version 1.1;proxy_set_header Upgrade $http_upgrade;proxy_set_header Connection "upgrade";proxy_set_header Host $host;proxy_set_header X-Real-IP $remote_addr;proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

server {...}
```

以上为示例代码，并非实际项目中的代码，只是为了演示如何设置跨域规则。

## invalid host

运行后打开页面，出现invalid host错误，需要检查几个地方，

1. 检查vue配置文件中的设置,config文件中的port是否是你运行成功输出在终端的端口，如果你需要前端项目运行于8080端口，请关掉其他运行于8080端口的服务。

我两次遇到这种问题都是因为先运行了其他项目，占了8080端口，导致第二个运行的项目的端口为8081，与conf中的配置不同。

## 使用v-for 时添加key-Duplicate key detected

在vscode中使用v-for时不添加key会冒红，虽然在 Webstorm中不会，但是也是一种性能优化，所以还是加上。

还需要注意的是，为了性能优化，推荐使用如id此类唯一的参数作为key。与此同时，如果不能确定id为唯一的，使用index作为key与不加key的效果是一样的（如果key重复，控制台会出现Duplicate key detected的warning，不影响渲染）。

这一点的详细阐述可以看看[https://github.com/lmk123/blog/issues/73](https://github.com/lmk123/blog/issues/73)。
