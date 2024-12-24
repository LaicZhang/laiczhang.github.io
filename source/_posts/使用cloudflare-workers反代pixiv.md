---
title: 使用cloudflare-workers反代pixiv
copyright: true
comment: false
mathjax: false
date: 2023-06-01 21:15:32
updated: 2024-07-01 21:15:32
tags:
  - cf
categories: cf
keywords: cf,cloudflare,workers,pixiv,p站
permalink: cloudflare-workers-proxy-pixiv/
description: 使用cloudflare-workers反代pixiv
---
打算起个新项目，可能会用点p站的图来装饰，就反代一下。

`CloudFlare Workers`具有强大的可扩展性以及在海外，基于此可以实现更多有趣的事，比如部署各种项目，搭建网盘，以及各种代理。

2023.6.1 实测可用
2024.6.1 更新域名说明
2024.7.2 更新，注意，直接反代知名网站可能被投诉导致封号，请谨慎使用。
2024.7.3 更新，添加规则避免被Netcraft扫描举报
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
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    })
  );
});
```

将`i.pximg.net`替换为部署的地址`xxx.xxx.workers.dev`即可。

- `xxx.xxx.workers.dev`为部署的默认域名，境内可能无法访问，建议自行修改cname为自己的域名。
- 同理可以设置`hostname`为其他想反代域名。

## block asn/user-agent

![来自论坛大佬@BlueSkyXN](https://img.tucang.cc/api/image/show/9eb988fdbc0724c97e90856dd905c245)

- UA

```txt
https://useragents.io/explore/platforms/unknown/maker/netcraft-ltd-c93
```

- ASN

```txt
https://bgp.he.net/AS212329
```

- IPs

```txt
https://gist.github.com/ozuma/fb21ab0f7143579b1f2794f4af746fb2
```

可以在cf的控制面板 -> Security -> WAF -> Custom Rules 中添加规则，以阻止此类请求。
