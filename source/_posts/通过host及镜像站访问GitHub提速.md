---
title: 通过host及镜像站访问GitHub提速
copyright: true
comment: true
date: 2019-07-09 23:21:39
updated: 2019-07-15 13:21:39
tags:
  - github
  - hosts
  - 镜像站
categories: GitHub项目
keywords: GitHub,hosts,提速
permalink: speed-up-access-to-github-by-host-and-mirror-sites/
description: 
---

问：为什么访问速度会很慢
答：GitHub的CDN域名遭到DNS污染

GitHub在中国大陆访问速度慢的问题原因有很多，但最直接和最主要的原因是GitHub的分发加速网络的域名遭到DNS污染。

由于GitHub的加速分发CDN域名assets-cdn.github.com遭到DNS污染，导致无法连接使用GitHub的加速分发服务器，才使得中国大陆访问速度很慢。

顺带一提，遇到**GitHub图片无法加载出来**也可以用这个解决办法。

- 修改host方法不一定长期有效，建议适当时候使用✈️。
<!-- more -->

## 修改系统hosts

添加内容

```txt
# GitHub，2022.7.15 updated by laiczhang

140.82.114.3                  alive.github.com
140.82.114.3                  live.github.com
18.215.182.241                github.githubassets.com
140.82.114.3                  central.github.com
18.204.44.248                 desktop.githubusercontent.com
140.82.114.3                  assets-cdn.github.com
3.92.68.194                   camo.githubusercontent.com
151.101.1.6                   github.map.fastly.net
151.101.1.6                   github.global.ssl.fastly.net
140.82.114.3                  gist.github.com
185.199.108.153               github.io
140.82.114.3                  github.com
192.0.66.2                    github.blog
140.82.114.3                  api.github.com
54.197.52.125                 raw.githubusercontent.com
54.225.21.222                 user-images.githubusercontent.com
3.230.162.215                 favicons.githubusercontent.com
52.91.248.164                 avatars5.githubusercontent.com
3.238.125.122                 avatars4.githubusercontent.com
3.222.245.0                   avatars3.githubusercontent.com
44.192.65.19                  avatars2.githubusercontent.com
18.234.72.80                  avatars1.githubusercontent.com
52.91.248.164                 avatars0.githubusercontent.com
34.238.28.89                  avatars.githubusercontent.com
140.82.114.3                  codeload.github.com
72.21.206.80                  github-cloud.s3.amazonaws.com
72.21.206.80                  github-com.s3.amazonaws.com
72.21.206.80                  github-production-release-asset-2e65be.s3.amazonaws.com
72.21.206.80                  github-production-user-asset-6210df.s3.amazonaws.com
72.21.206.80                  github-production-repository-file-5c1aeb.s3.amazonaws.com
185.199.108.153               githubstatus.com
64.71.144.211                 github.community
23.100.27.125                 github.dev
140.82.114.3                  collector.github.com
3.239.243.95                  pipelines.actions.githubusercontent.com
44.200.222.224                media.githubusercontent.com
44.204.43.153                 cloud.githubusercontent.com
18.234.72.80                  objects.githubusercontent.com
13.107.213.51                 vscode.dev
```

### windows系统

1. hosts文件路径：C:\Windows\System32\drivers\etc\hosts ,
2. 添加上面查询到的IP到hosts文件中（此时可能需要管理员权限,可以将hosts复制到桌面，修改好了再复制回去覆盖原先的）
3. 刷新DNS
在cmd中执行

```txt
ipconfig /flushdns
```

### linux系统

1. 打开hosts文件并修改

```bash
sudo vim /etc/hosts
```

插入ip映射保存退出

2.重启网络服务

```bash
sudo /etc/init.d/networking restart
```

## github镜像站

注意，不要在下列网站登录你的github账号。

- <https://ghproxy.com/>
- <https://hub.fastgit.org/>
- <https://github.com.cnpmjs.org/>
