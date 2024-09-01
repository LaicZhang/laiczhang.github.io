---
title: node环境安装-超详细
copyright: true
comment: false
mathjax: false
date: 2020-04-04 16:40:36
updated: 2024-07-05 16:40:36
tags:
  - node
  - 环境配置
categories: 环境配置
keywords: node,环境配置,前端框架,nvm,npm, node-manager, nvm-windows
permalink: how-to-install-node/
description: node is a good choice for front-end development.
---
`node` 是一个很有用的东西，比如我的 `hexo` 博客就是基于 `node` 环境搭建的。

- 2022.2.3 更新，增加mac安装方法和常用命令
- 2022.7.22 更新, 推荐版本号为 ~~~`v16.x`~~~`v22.x`
- 2024.7.05 更新，nodejs官网给出了更直观的通过版本管理器进行安装的页面，推荐`22.x`版本
<!-- more -->

## 0.关于node

简单的说 `Node.js` 就是运行在服务端的 `JavaScript`。

`Node.js` 是一个基于`Chrome JavaScript` 运行时建立的一个平台。

`Node.js`是一个事件驱动`I/O`服务端`JavaScript`环境，基于`Google`的`V8`引擎，`V8`引擎执行`Javascript`的速度非常快，性能非常好。

## 1.node版本管理工具

### 官网选择（推荐）

![image.png](https://img.tucang.cc/api/image/show/5005b24d5a49fda2c46a49669d2d3861)

- [Node.js — 下载 Node.js®](https://nodejs.org/zh-cn/download/package-manager)
- [Node.js — 通过包管理器安装 Node.js](https://nodejs.org/zh-cn/download/package-manager/all)

### nvm-windows

- 2024.7.10更新，发现官方已经放缓了对`nvm-windows`的维护，建议使用其他版本管理器进行安装。

```txt
NVM4W Feature Freeze
I intend to deprecate NVM for Windows after Runtime is released. There are two things slowing work on Runtime. First, client engagements. I am wrapping up the most time-consuming projects, which extended into Q2 2023. My co-developer and I started working on this full-time on June 20, 2023. The other thing slowing down Runtime development is this project. So, I'm freezing feature development on NVM for Windows.
```

需要注意的是，一定要卸载已安装的 NodeJS（意思就是，如果你有多版本的node并且不想卸载老版本的，你可以直接上手nvm-windows），否则会发生冲突。然后下载 `nvm-windows` 最新安装包，直接安装即可。

Github下载地址：<https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe>

镜像地址：

- <https://nvm-windows.io/v1.1.12/nvm-setup.exe>
- <https://ghproxy.com/https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe>

### nvm

`MacOS`可以使用 `brew` 一键安装`nvm`: `brew install nvm`

### 其他版本管理工具

官网已经列举了很多版本管理工具，如果你想使用其他版本管理工具，可以参考：[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#installing-node-js-via-package-manager)

- 如果你想使用`nvm-windows`/`nvm`安装`node`，可以直接看后面的[5.nvm常用命令](./#5.nvm常用命令)部分。

## 2.使用安装包

- [通过镜像下载](https://files.catbox.moe/lnhsc4.pkg)

建议不使用其他第三方下载站，谁知道有没有加东西。

### 关于版本

官方给出的说法是

```txt
主要Node.js版本进入当前发布状态六个月，这让库作者有时间添加对它们的支持。
六个月后，奇数版本（9、11等）不受支持，偶数版本（10、12等）将移动到Active LTS状态，并可供一般使用。
LTS发布状态为“长期支持”，这通常保证关键错误将修复总共30个月。
生产应用程序只能使用Active LTS或维护LTS版本。
```

![image.png](https://img.tucang.cc/api/image/show/8ebfe8c27e15beff5474cd8a32d1df4d)

| Release |     Status      | Codename | Initial Release | Active LTS Start | Maintenance Start | End-of-life |
| :-----: | :-------------: | :------: | :-------------: | :--------------: | :---------------: | :---------: |
|  18.x   | **Maintenance** | Hydrogen |   2022-04-19    |    2022-10-25    |    2023-10-18     | 2025-04-30  |
|  20.x   |     **LTS**     |   Iron   |   2023-04-18    |    2023-10-24    |    2024-10-22     | 2026-04-30  |
|  22.x   |   **Current**   |          |   2024-04-24    |    2024-10-29    |    2025-10-21     | 2027-04-30  |
|  23.x   |   **Pending**   |          |   2024-10-15    |        -         |    2025-04-01     | 2025-06-01  |
|  24.x   |   **Pending**   |          |   2025-04-22    |    2025-10-28    |    2026-10-20     | 2028-04-30  |

- 建议下载`LTS`（长期支持版本）
- ~~推荐下载`v16.x`版本，因为`12`版本已经结束其维护周期，18版本还未进入维护阶段。~~
- 推荐下载`22.x`版本

## 3.安装

1. 两种方式选择一种即可

`node.js` 的 `zip` 包安装时是直接解压缩后就可以了，但使用时不那么方便，

而`node.js` 的 `msi` 包是傻瓜式一路`next`就可以了，所以尽量选择`msi`进行安装

2. 解压后的目录,或者`mis`安装后，先打开`cmd`验证一下，输入 `node -v` 来查看安装版本和是否安装成功
![image.png](https://img1.tucang.cc/api/image/show/1b5abc28a21a0b69dd758b18e30b4795)

如图，安装成功

## 4.换源

因为众所周知的原因，下载工具和包容易丢包或者下载速度很慢，这个时候我们可以更换默认下载地址来加快下载。

更换为淘宝源，淘宝仓库源和`npm`仓库源每10分钟同步一次，基本满足需求。

```bash
npm config set registry https://registry.npmmirror.com
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
