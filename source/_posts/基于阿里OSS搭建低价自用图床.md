---
title: 基于阿里OSS搭建低价自用图床
copyright: true
comment: false
mathjax: false
date: 2020-01-10 21:14:48
updated: 2022-07-10 21:14:48
tags:
  - oss
  - 图床
categories: 优化
keywords: oss, 图床, 低价, 自用
permalink: Building-a-low-cost-self-use-image-bed-based-on-Ali-OSS/
description: The picture bed is a place to store pictures on the network. The purpose is to manage pictures more intuitively, speed up the opening of pictures, and save space on the local server.
---
## 图床知识普及

简单说图床就是一个在网络上存储图片的地方，目的是为了更直观的管理图片，加快图片打开速度，以及节约本地服务器空间。

一般的咱们在网上看到的文章里的插图，其实在浏览器上就是一个图片链接，那个链接所指向的服务器就是所谓的“图床”。粗暴的理解就是文章插图所存放的地方，图床上的图片都可以一串地址链接的形式被用在网络里的各个地方。

图床地址最容易识别的特征，就是复制图片地址，粘贴到浏览器可以直接且快速打开图片。

- 2022.6.19更新 新增vscode插件及其快捷键
- 2022.7.17更新 增加picgo配置图片示例
<!-- more -->
## 搭建过程

### 开通OSS对象存储服务

通俗的解释这就是一块云盘，只不过他可以通过接口api的形式去使用，面向的对象是开发人员而不是咱们日常客户。主要应用场景就是在存取非结构性数据文件上，就是不是那种数据库里存的结构化数据（目的就是区分云数据库的功能）。

[阿里云-对象存储 OSS](https://www.aliyun.com/product/oss?userCode=ssxle8y1)

开通OSS服务功能之后就可以进到OSS控制台了。

![](https://cdn.zyha.cn/blog/oss-images-bed/20200110214237.png?x-oss-process=style/blog)

关于流量包购买的问题，不开通流量包就是默认为按量收费，大概算了下1.2元10个G每月，还行吧不是很贵，用着再说。

当然，个人练手，只是自己访问的话，不买套餐包也完全OK，有一定的免费额度。

ps：以防大家可能遇到爬虫攻击或者其他其外情况，就尽量不要在阿里云账号余额里存里过多的钱，不然可能一晚上起来余额就空了，我一般就充50，用完再续随时用手机阿里云就能充值的。本身阿里云就有自己余额超限停止服务的机制（带宽限制），不用担心因为流量被刷变成负几万资产。

我永远也不会说付钱的时候我忽然忘了我的支付密码导致我的支付宝被锁了3个小时。

~~找人代付之后~~成功进入OSS的控制台，

### 创建一个Bucket

![20220619221200](https://cdn.zyha.cn/public/upload/20220619221200.png?x-oss-process=style/blog)

这个bucket就是顾名思义的存储桶，你可以创建多个桶，根据你对想存的东西的定义或者类型来划分。

此处简单解释一下如何填写相关信息。

- Bucket 名称： 不能为空；只允许小写字母、数字、短横线（-），且不能以短横线开头或结尾；
- 地域： 建议选择离你所在的地域或者目标用户最多的地域；
- 存储类型： 图床是会被频繁访问的，建议选择标准存储；
- 同城冗余存储： 个人用户可以不开启以节约成本
- 版本控制： 个人用户可以不开启以节约成本，重要数据可以开启版本控制；
- 读写权限： 建议选择公共读写；
- 服务端加密方式： 可以选择无
- 实时日志查询： 个人用户可以不开启以节约成本
- 定时备份： 个人用户可以不开启以节约成本

### 绑定域名

想要自定义域名那就必须要将域名备案。而我的 `cdn.zyha.cn` 域名已经备案，所以可以绑定。

已备案域名搭配阿里云CDN使用效果更好。

### 关于流量包

阿里云给出了一些流量包的价格，可以根据自己的流量状况选择一个最优的流量包，这样可以节省我们的费用。如果访问量很小，暂时可以不买，OSS存储空间和流量都有一定的免费额度。

- 如果想买套餐包，可以关注阿里云的最新的一些关于oss的活动，用量小的话，价格相当便宜。

![](
https://cdn.zyha.cn/blog/oss-images-bed/20200110212720.png?x-oss-process=style/blog)

### 防盗链

在对象存储的控制台，进入Bucket 列表中对应的那个Bucket，

选择权限管理-》防盗链，

![20220619221033](https://cdn.zyha.cn/public/upload/20220619221033.png?x-oss-process=style/blog)

开启防盗链后，在Referer中填写你允许使用图片的网站地址，比如我可以填写

```txt
coding.laiczhang.com
```

保存即可。

### 配置和使用PicGo

一个帮助我们上传的免费开源软件，[picgo地址](https://picgo.github.io/PicGo-Doc/zh/)

![](https://cdn.zyha.cn/blog/oss-images-bed/20200110220739.png?x-oss-process=style/blog)

- `keyid` 和 `keysecret` 这个是阿里账户专用的一个密钥，从头像那里应该找到，没有就创建一个，有就自己回忆回忆存哪了，或者新建一个子密钥密钥也可以

- 空间名就是bucket的名字

- 储存区域就是你当时选的服务器地区的编码从控制台可以找到最后的自定义域名就是你在用你图床外链的时候要显示的域名，可以用默认阿里给你分配的，也可以用自己绑定的自己的个人域名，加上我安装了https证书，所以前面还能加个S。

使用也非常简单，上传就是拖拽和剪切板上传2种，我试了一下可以一次拖拽多张图片上传，剪切板上传除了用电脑截图的方式、也同样可以复制其他网站上的（例如百度图片、微博图片）直接粘贴上传。

上传成功的图片会在图床相册里，只有点击一下想要用的图片的左下角的复制按钮就能直接变成现成的Markdown图床链接样式，就可以直接愉快的插入MD编辑器中使用了。

## vscode中使用PicGo

![20220619220757](https://cdn.zyha.cn/public/upload/20220619220757.png)

- 最开始集成picgo的是Typora，但它现在已经收费了，所以就不在此处介绍了。

直接安装[`picgo`](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)插件即可。
使用方法在插件主页已经给出。在这里我也简单翻译一下。

| OS           | 直接通过剪切板上传               | 通过资源管理器上传                  | 通过输入图片路径上传               |
| ------------ | --------------- | -------------------- | --------------------- |
| Windows/Unix | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>U</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>E</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> |
| Mac OS          | <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>U</kbd>  | <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>E</kbd>  | <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>O</kbd>  |

## 参考

- [PicGo操作手册](https://picgo.github.io/PicGo-Doc/zh/)
- [vscode插件-picgo](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)
