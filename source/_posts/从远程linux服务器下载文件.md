---
title: 从远程linux服务器下载文件
copyright: true
comment: false
mathjax: false
date: 2024-12-17 20:14:29
updated: 2024-12-17 20:14:29
tags:
  - linux
  - vps
categories: vps
keywords: linux,vps,download file from remote linux server，从远程linux服务器下载文件，remote
permalink: download-file-from-remote-linux-server/
description: 从远程linux服务器下载文件，使用多种下载文件到本地。
---
需要备份远程服务器的文件到本地，可以使用多种方式/工具，这里介绍几种我用过的方法。

## 前提

- 远程linux上有公网ip
- 本地有ssh远程登录权限

<!-- more -->
## 下载文件到本地

### [alist](https://alist.nn.ci/zh/guide/)

![](https://img1.tucang.cc/api/image/show/e5dd6a52ac82e7423bc8c36924205985)

AList 支持多个存储提供商，包括本地存储、阿里云盘、OneDrive、Google Drive 等。

- 安装

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```

- 更新

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
```

- 卸载

```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
```

安装完成后，登陆之后，在【存储】-【添加】中选择【本地存储】驱动，【根文件夹路径】需要备份的文件夹，【挂载路径】为自定义的文件夹名称，点击【保存】。
![](https://img1.tucang.cc/api/image/show/f7fb31ad3685879472b5ab0934c9b6db)

![](https://img1.tucang.cc/api/image/show/b17ba77def1dc961e3962cf47883f210)

状态为【work】则成功配置。

在local文件夹下可以看到备份的文件。

![](https://img1.tucang.cc/api/image/show/31d59af14b68de9f89112a0e9d6b3f1a)

### sftp客户端

此方法要求本机连接vps的客户端支持sftp功能。

#### xshell

xshell的使用体验特别好，支持多标签，支持常用命令的快捷映射，配合着xftp，上传文件到服务器也很方便。

不过xshell在公司环境使用并不免费，而免费的家庭版也只是能供个人开发者在自己家庭电脑上使用。
官网： https://www.xshell.com/zh/free-for-home-school/

唯一的遗憾是没有mac客户端。

#### putty

免费，但是没有多标签页的功能，在连接多个linux机器时候开多个窗口，每个窗口之间的切换就不怎么方便了。而传输文件则使用putty包中带的pscp工具。

```bash
pscp  localfile account@HOSTIP:REMOTEDIR
```

像上面这种纯命令行的上传，也不是很方便。不过很多云厂商的文档都是用putty来作为示例的。

#### windTerm

免费开源的ssh+sftp工具，支持windows，linux，macos3种os，支持多标签页，内置sftp工具，支持暗黑模式。

没有常用命令的快捷映射，不过因为免费而不限制在公司内使用，而且还开源，还要啥自行车么。

- 官方博客：https://kingtoolbox.github.io/
- github地址：https://github.com/kingToolbox/WindTerm

#### finalshell

免费，支持windows，linux，macos 3 种系统，支持多标签页，内置sftp工具，支持多套配色方案，内嵌服务器性能检测功能，可以一键检查服务器各种信息。

基础版本免费，但后续高级版，专业版收费。

特性描述里面有个 内置海外服务器加速,加速远程桌面和ssh连接,操作流畅无卡顿，这种功能合适不合适自己用，仁者见仁智者见智吧。

- 官网：https://www.hostbuf.com/t/988.html

### 命令行上传

#### 0x0.st

0x0.st 同样也仅支持从命令行上传文件，最大限制为 512M ，存储时间不短于30天并且与文件大小有关。

```bash
curl -F file=@./myfile.zip https://0x0.st
```

上传完成后会返回分享链接，0x0.st 不支持同时上传多个文件。另需注意，0x0.st 对部分 IDC IP 进行了屏蔽导致无法上传（如 OVH）。

#### oshi.at

与前面两位不同，oshi.at 同时支持网页上传和命令行上传，最大限制为 5GB，存储时间默认为90天。

```bash
curl -F file=@./myfile.zip https://oshi.at
```

上传完成后 oshi.at 会返回两个链接，其中一个为下载链接，另一个为管理链接可用于续期和删除文件。

## 总结

- 大部分场景下，使用 alist 即可轻松实现远程文件下载到本地。
- 仅少数场景下，使用命令行上传文件到服务器，如需续期或删除文件，命令行 是一个不错的选择。
