---
title: 基于nodePPT搭建在线版幻灯片
copyright: true
comment: false
mathjax: false
date: 2020-01-10 23:34:07
updated: 2020-01-10 23:34:07
tags:
  - PPT
  - node
categories: Github项目
keywords: node, ppt, 幻灯片
permalink: build-a-slideshow-with-node-and-ppt/
description:
---
> 累死累活干不过做 PPT 的！
> 查看效果：<https://nodeppt.js.org>

nodeppt是@三水清大大的力作，想要了解nodeppt有哪些强大的功能，可以来[这儿](https://github.com/ksky521/nodeppt)看看
<!-- more -->

## 配置node环境

### 方法一

Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：

不要使用默认的`sudo apt-get install node`这样安装的版本不够，可以下载Node.tar.xz，版本选择v10.16.0。

```bash
# wget https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-x64.tar.xz    // 下载
# tar xf  node-v10.16.0-linux-x64.tar.xz       // 解压
# cd node-v10.16.0-linux-x64/                  // 进入解压目录
# ./bin/node -v                               // 执行node命令 查看版本
v10.16.0
```

解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：

```bash
ln -s /usr/software/nodejs/bin/npm   /usr/local/bin/ 
ln -s /usr/software/nodejs/bin/node   /usr/local/bin/
```

### 方法二

以下部分我们将介绍在 Ubuntu Linux 下使用源码安装 Node.js 。 其他的 Linux 系统，如 Centos 等类似如下安装步骤。

在 Github 上获取 Node.js 源码,当然，我也在码云上导入了一份，可以替换，加快下载速度(将命令中的`https://github.com/nodejs/node.git`替换成`https://gitee.com/qianliyue/node`即可)

```bash
$ sudo git clone https://github.com/nodejs/node.git
Cloning into 'node'...
```

修改目录权限：

```bash
sudo chmod -R 755 node
```

使用 `./configure` 创建编译文件，并按照：

```bash
cd node
sudo ./configure
sudo make
sudo make install
```

查看 node 版本：

```bash
$ node --version
v0.10.25
```

## 安装并配置nodePPT

安装：`npm install -g nodeppt`

如果失败，可以再试试`sudo npm install -g nodeppt`

具体配置可以查看[nodeppt官方文档](https://github.com/ksky521/nodeppt)
