---
title: mac清空外接硬盘垃圾桶
copyright: true
comment: false
mathjax: false
date: 2024-10-28 12:03:36
updated: 2024-10-28 12:03:36
tags:
  - mac
categories: mac
keywords: mac, 外接硬盘, 垃圾桶,bin,empty
permalink: how-to-empty-bin-on-external-hard-disk-in-mac/
description:
---
## 具体情况

```txt
The operation can’t be completed because the item “demo” is in use.
```

清空废纸篓时提示 “不能完成此操作，因为项目“domo”正在使用中。”

<!--more-->

实际上该文件夹并未使用，这也是一个空文件夹，里面啥也没有。

![](https://img1.tucang.cc/api/image/show/ebd2b7937a9750e9872213082e0eaf3f)

## 解决办法

- 在废纸篓中，右键菜单没有“放回原处”的选项，所以也不能恢复。
![](https://img1.tucang.cc/api/image/show/033e03b24d9e395d0199904256dd7e32)

- 尝试了重启，重启大法并未生效。

- 尝试了使用终端执行 `sudo rm -rf ~/.Trash/demo`，也没有删除掉，并且还发现在终端里是看不到这个文件夹的。

忽然想起这是外接硬盘的文件，所以应该在外接硬盘上操作。

- 弹出硬盘再拔出，垃圾桶中demo文件夹消失，重新插入，demo文件夹再次出现。

```bash
rm -rf /Volumes/TOSHIBA(移动硬盘名称)/.Trashes/501/demo
```

终于成功删除了该目录。

问题解决。