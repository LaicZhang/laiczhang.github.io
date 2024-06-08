---
title: 通过readmore插件实现公众号引流
copyright: true
comment: true
date: 2019-10-23 22:10:08
updated: 2019-10-23 22:10:08
tags:
  - 公众号
  - 插件
categories: 公众号
keywords: 插件,公众号
permalink: add-wechat-fans-by-readmore-plugin/
description:
---

通过readmore的插件工具，实现了博客的每一篇文章自动增加阅读更多效果,关注公众号后方可解锁全站文章,从而实现博客流量导流到微信公众号粉丝目的。

<!-- more -->

如图，![通过readmore插件实现公众号引流](/images/通过readmore插件实现公众号引流/QQ截图20191023221432.png)

# Step #1 - 更新 `_config.yml` 配置文件

在 `_config.yml` 配置文件中,配置 `readmore` 插件相关信息,详情见 [OpenWrite 微信公众号增长神器 "ReadMore" 简介](https://openwrite.cn/openwrite/openwrite-readmore/).

```yml
plugins:
  readmore:
    blogId: 16671-1571749158048-830
    name: laiczhang
    qrcode: https://39.96.24.63/wp-content/uploads/2019/06/export1559829285250.jpg
    keyword: 博客
```

> 注意: 前往 [OpenWrite](https://openwrite.cn/) 后台申请开通 `readmore` 功能后,**一定要替换成自己的相关配置**!

其中,配置参数含义如下:

- `blogId` : [必选]OpenWrite 后台申请的博客唯一标识,例如:15702-1569305559839-744
- `name` : [必选]OpenWrite 后台申请的博客名称,例如:雪之梦技术驿站
- `qrcode` : [必选]OpenWrite 后台申请的微信公众号二维码,例如:<https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg>
- `keyword` : [必选]OpenWrite 后台申请的微信公众号后台回复关键字,例如:vip

# Step #2 - 运行 hexo 相关命令

- 运行 `npm install` 命令安装到本地项目

```bash
npm install hexo-plugin-readmore --save
```

- 运行 `hexo generate` 命令构建本地项目或者 `hexo server` 启动本地服务.

```bash
hexo generate
```

或者

```bash
hexo server
```

## 示例

不仅 [hexo-plugin-readmore](https://github.com/snowdreams1006/hexo-plugin-readmore) **官方文档**已整合 `readmore` 版权保护插件,此外还提供了示例项目,详情参考 `example` 目录.

- [官方文档](https://github.com/snowdreams1006/hexo-plugin-readmore/tree/master/docs)
- [官方示例](https://github.com/snowdreams1006/hexo-plugin-readmore/tree/master/example)
