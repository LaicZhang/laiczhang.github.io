---
title: vscode远程开发配置
copyright: true
comment: true
mathjax: false
date: 2020-04-10 19:13:13
updated: 2020-04-10 19:13:13
tags:
  - vscode
  - 环境配置
categories: 环境配置
keywords: vscode,remote,环境配置
permalink: remote-development-configuration-in-vscode/
description:
---
vscode上微软官方发布了三个相关插件，包括 ：

- `Remote – SSH SSH` 连接虚拟/实体`Linux`主机；
- `Remote – Containers` 连接容器；
- `Remote – WSL 连接WSL`（也就是`Linux`子系统）。
重点服务使用`Windows`但具有`Linux`开发需求的用户。

我有个阿里云香港`ecs`和`Windows`的`Ubuntu`子系统，所以就装了`Remote – SSH`和`Remote – WSL`

<!--more -->

## Remote – SSH

选择了 Remote - SSH 这个插件，安装完成后可以在左侧边栏看见`远程资源管理器`

选择后点击 Configure，选择编辑第一个也就是用户文件夹下的.ssh/config，如果你没有这个文件夹的话，那就是 OpenSSH 没装。去Windows设置 》应用 》 管理可选功能 》添加功能那里添加 OpenSSH 客户端。

config参考：

```txt
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host alias # 别名
    HostName hostname # ip或host
    User user # ssh用户名
```

注意：这是基于SSH对服务器进行连接的，所以建议通过把本机的 ssh 公钥添加到服务器的 authorized_keys 文件中，具体的操作流程请百度 “ssh公钥连接” 。

建议在扩展的设置`Remote.SSH: Config File`中填上你存放config的路径。

保存后就可以通过CONNECTION侧边栏进行连接了。

## Remote – WSL

相比ssh，wsl就简单多了，

vscode会自动检测Windows中的子系统，

只需要调到`WSL Targets` 即可看到子系统，右键点击`connect to WSL`即可连接。

## 参考

- [VS Code Remote 发布！开启远程开发新时代 - 知乎](https://zhuanlan.zhihu.com/p/64505333)
- [VSCode Remote 体验 | 远程Linux环境开发真香 - 知乎](https://zhuanlan.zhihu.com/p/64849549)
