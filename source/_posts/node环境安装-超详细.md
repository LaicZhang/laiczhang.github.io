---
title: node环境安装-超详细
copyright: true
comment: false
mathjax: false
date: 2020-04-04 16:40:36
updated: 2022-07-22 16:40:36
tags: 
  - node
  - 环境配置
categories: 环境配置
keywords: node,环境配置,前端框架,nvm,npm, node-manager, nvm-windows
permalink: how-to-install-node/
description: node is a good choice for front-end development.
---
`node` 是一个很有用的东西，比如我的 `hexo` 博客就是基于 `node` 环境搭建的。

- 2022.2.3 更新 增加mac安装方法和常用命令
- 2022.7.22 更新推荐版本号为 `v16.16.0`
<!-- more -->

## 0.关于node

简单的说 `Node.js` 就是运行在服务端的 `JavaScript`。

`Node.js` 是一个基于`Chrome JavaScript` 运行时建立的一个平台。

`Node.js`是一个事件驱动`I/O`服务端`JavaScript`环境，基于`Google`的`V8`引擎，`V8`引擎执行`Javascript`的速度非常快，性能非常好。

## 1.node版本管理工具

### nvm-windows（非必须）

A node.js version management utility for Windows. Ironically written in Go.

需要注意的是，一定要卸载已安装的 NodeJS（意思就是，如果你有多版本的node并且不想卸载老版本的，你可以直接上手nvm-windows），否则会发生冲突。然后下载 `nvm-windows` 最新安装包，直接安装即可。

Github下载地址：<https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe>

镜像地址：

- <https://nvm-windows.io/v1.1.9/nvm-setup.exe>
- <https://ghproxy.com/https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe>

### nvm

`MacOS`可以使用 `brew` 一键安装`nvm`: `brew install nvm`

### 其他版本管理工具

官网已经列举了很多版本管理工具，如果你想使用其他版本管理工具，可以参考：[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#installing-node-js-via-package-manager)

- 如果你想使用`nvm-windows`/`nvm`安装`node`，可以直接看后面的[5.nvm常用命令](./#5.nvm常用命令)部分。

## 2.下载

- 官网：<https://nodejs.org/en/download/>
- 本站镜像下载：[镜像1](https://updog.cc/share/9sICKmlXuvdldGZP) / [镜像2](https://file.dtnetwork.top/dlink/demo2/node-v16.17.0.pkg) / [镜像3](https://files.catbox.moe/lnhsc4.pkg)

建议不使用其他第三方下载站，谁知道有没有加东西。

### 关于版本

官方给出的说法是

```txt
主要Node.js版本进入当前发布状态六个月，这让库作者有时间添加对它们的支持。
六个月后，奇数版本（9、11等）不受支持，偶数版本（10、12等）将移动到Active LTS状态，并可供一般使用。
LTS发布状态为“长期支持”，这通常保证关键错误将修复总共30个月。
生产应用程序只能使用Active LTS或维护LTS版本。
```

![node版本 lifecycle](https://cdn.zyha.cn/blog/20220722003255.png?x-oss-process=style/blog)

- 建议下载`LTS`（长期支持版本）

- 推荐下载`v16.17.0`版本，因为12版本已经结束其维护周期，18版本还未进入维护阶段。

## 3.安装

1. 两种方式选择一种即可

`node.js` 的 `zip` 包安装时是直接解压缩后就可以了,

`node.js` 的 `msi` 包是傻瓜式一路`next`就可以了

2. 解压后的目录,或者`mis`安装后，先打开`cmd`验证一下，输入 `node -v` 来查看安装版本和是否安装成功

![node版本验证](https://cdn.zyha.cn/blog/20220722004821.png?x-oss-process=style/blog)

如图，安装成功

## 4.换源

因为众所周知的原因，下载工具和包容易丢包或者下载速度很慢，这个时候我们可以更换默认下载地址来加快下载。

更换为淘宝源，淘宝仓库源和`npm`仓库源每10分钟同步一次，基本满足需求。

```bash
 npm config set registry https://registry.npm.taobao.org/
 ```

测试：`npm install express -g`

## 5.nvm常用命令

```bash
nvm ls 查看版本s
nvm install v16.17.0 指定版本
nvm use xxx.xxx.xx xxx为你指定的已经安装的版本（此命令为临时切换）
nvm uninstall xxx.xxx.xx 删除指定版本
nvm alias default xxx.xxx.xx 创建别名为default，即设置为默认版本
```

## 6.常见错误

### 1.“node”不是内部或外部命令，也不是可运行的程序或批处理文件

手动将 `node` 相关路径加入环境变量即可。

比如我的 `node` 安装路径为：`C:\Program Files\nodejs`，

则添加的环境变量为：

```txt
C:\Users\HP\AppData\Roaming\npm
C:\Program Files\nodejs\
```

### 2. npm-cli---Cannot find module 'C:\node\nodejs\node_module\bin\npm-cli.js'

重新点击`setup`文件，点击`repair`；或者卸载后重新安装。

### 3.其他错误

尝试重启及更换网络。
