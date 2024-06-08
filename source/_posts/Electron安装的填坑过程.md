---
title: Electron安装的填坑过程
copyright: true
comment: true
mathjax: false
date: 2020-04-05 12:47:40
updated: 2020-04-05 12:47:40
tags:
  - electron
  - 环境配置
categories: 环境配置
keywords: electron,环境配置,前端框架
permalink: electron-install-process/
description:
---

前段时间就想做个简单的桌面应用，今天终于入坑了electron，参照官方例子配置electron环境，奈何electron始终安装不成功。折腾了大半天总算是解决了electron无法正常安装的问题，在此分享我的安装过程，希望能帮助出现类似问题的同学。

<!-- more -->

## 0.electron介绍

官网：<https://www.electronjs.org/>

如果你可以建一个网站，你就可以建一个桌面应用程序。 Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。

## 1.安装

- node：v12.16.1
- npm: 6.13.4

全局安装命令：

```bash
// 执行此命令安装6.1.1版本的electron
npm install -g electron@6.1.1
```

## 2.填坑过程

### 1.安装electron至node install.js处卡住不动

> 此处参考了 <https://blog.csdn.net/zhujuyu/article/details/79230643>

- 1. 安装cnpm

```bash
cnpm install cnpm -g  --registry=https://registry.npm.taobao.org
```

- 2. 设置electron_mirror配置

```txt
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

### 2.正常安装electron，但是执行electron -v命令或启动项目报错（Error: Electron failed to install correctly, please delete node_modules/electron and try）

这个是真的坑。

直接按照官网的安装例子`npm install electron -g`根本不行，所以我更换了安装命令`npm install -g electron@6.1.1`

再执行`electron -v`命令，可以看到有版本信息，安装成功，

![electron-v](https://i.loli.net/2020/04/05/Opst8CVf4XUWE6Z.png)
