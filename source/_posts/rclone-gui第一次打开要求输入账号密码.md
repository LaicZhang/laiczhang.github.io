---
title: rclone-gui第一次打开要求输入账号密码
copyright: true
comment: true
mathjax: false
date: 2021-09-17 13:33:05
updated: 2021-09-17 13:33:05
tags:
  - rclone
  - 安全
categories: 网盘
keywords: rclone, rclone-gui
permalink: first-time-open-require-input-account-password-in-rclone-gui/
description:
---
心血来潮想挂载onedrive，发现rclone有了gui，第一次打开时需要填入账号密码。

rclone 文档：<https://rclone.org/docs/>

rclone gui文档：<https://rclone.org/gui/>
<!--more-->
之前已经安装好了rclone，所以不再演示如何安装。

文档里直接给了运行代码，`rclone rcd --rc-web-gui`

不过第一次打开时，会要求输入账号密码（第一次打开，我自己都不知道账号密码是什么，还输入什么）

然好在官网论坛找到了解决办法，

If you do not specify a password, it will randomly generate one.

Since you are launching it with a machine with a browser, it's passing in the URL when start it to the browser and logging you in.

If you close said browser, you'd get prompted to login again with the user name and password in the file or you can use:

```txt
--rc-user usernamehere
--rc-passwd somepassword
```

To set it yourself.

翻译一下就是，复制粘贴`rclone rcd --rc-web-gui --rc-user usernamehere
--rc-passwd somepassword`，然后将对应的用户密码改成自己的即可。

![](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210917134758190.png)

参考链接：<https://forum.rclone.org/t/browser-asking-to-sign-in-when-using-gui/18601>
