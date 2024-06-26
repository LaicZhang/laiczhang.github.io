---
title: win10安装Linux子系统遇到的问题
copyright: true
comment: false
mathjax: false
date: 2020-04-09 20:49:41
updated: 2020-04-09 20:49:41
tags:
  - linux
  - win10
categories: linux
keywords: linux,Windows,子系统
permalink: some-problems-with-win10-install-linux-system/
description:
---
win10直接在应用商店搜索Ubuntu下载就可以用了，网上也有安装图形界面的教程，挺好的，而且真正玩Linux的大神都是完全脱离图形界面的(滑稽.jpg

安装过程中遇到了两个问题，折腾了一会儿终于成功，在此记录一波。
<!-- more -->
## 第一个问题

Windows store 点击获取按钮没反应。

解决办法：

- 1、按下Win+R 打开运行框，输入：services.msc ，点击确定；
- 2、这时我们来就打开了服务界面，我们以Windows Update服务为例，在服务界面找到该服务后双击打开；
- 3、先将启动类型修改为【自动】，然后点击【应用】【确定】即可，以此类推，确保Windows Firewall，Windows License Manager Service，Network Connection Broker，Windows Store Service （WSService）几个服务都已正常启动；
- 4、检测自完服务之后，我们同样按下Win+R呼出运行，输入：wsreset ，点击确定以重置应用商店；
- 5、打开此电脑，依次展开C:\Windows\SoftwareDistribution 文件夹百，在SoftwareDistribution 文件夹中删除DataStore文件夹下的内容和Download文件夹下的内容（若出现无法删除的现象，可参考方法1、2 、3将Windows Update 服务暂停，然后即可进行删除，删除后重新启度用Windows update服务即可）。

## 第二个问题
```
Installing, this may take a few minutes.
WslRegisterDistribution failed with error: 0x8007019e
The Windows Subsystem for Linux optional corrponent is not enabled.
See https://aka.ms/wslinstall for details.
Press any key to continue.
Please enable it and try again.
```
解决办法：
![](https://cdn.zyha.cn/blog/QQ截图20200409211910.png?x-oss-process=style/blog)

控制面板--程序与功能--启动或关闭Windows功能勾选适用于Linux的Windows子系统，重启即可

参考：
- [win10应用商店无法登录-百度知道](https://zhidao.baidu.com/question/986169874005248659.html?fr=iks&word=Windows+store+%CE%DE%B7%A8+%B5%C7%C2%BC&ie=gbk)
- [win10安装Linux子系统(WSL)时遇到的两个问题](https://blog.csdn.net/AI_Fanatic/article/details/82185437)