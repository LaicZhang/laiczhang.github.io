---
title: 使用cloudflare-workers反代pixiv
copyright: true
comment: true
mathjax: false
date: 2023-06-01 21:15:32
updated: 2023-06-01 21:15:32
tags:
  - cf
categories: cf
keywords: cf,cloudflare,workers,pixiv,p站
permalink: cloudflare-workers-proxy-pixiv/
description:
---
打算起个新项目，可能会用点p站的图来装饰，就反代一下。

`CloudFlare Workers`具有强大的可扩展性以及在海外，基于此可以实现更多有趣的事，比如部署各种项目，搭建网盘，以及各种代理。

2023.6.1 实测可用
<!--more-->
## 实现的功能

- 能访问`pixiv`图片资源域名`i.pximg.net`
- 由于`i.pximg.net`有盗链保护，所有请求头`Referer`若非`pixiv`则`403`，反代后可以自行修改请求头

## code

```js
addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.hostname = "i.pximg.net";

  let request = new Request(url, event.request);
  event.respondWith(
    fetch(request, {
      headers: {
        'Referer': 'https://www.pixiv.net/',
        'User-Agent': 'Cloudflare Workers'
      }
    })
  );
});
```

将`i.pximg.net`替换为部署的地址`xxx.xxx.workers.dev`即可。
