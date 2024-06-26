---
title: 通过Netlify加速GitHubPages博客
copyright: true
comment: false
mathjax: false
date: 2021-07-29 17:39:06
updated: 2021-07-29 17:39:06
tags:
  - web
  - github
  - Netlify
  - 镜像
categories: web
keywords: github, pages, web, netlify
permalink: speed-up-github-pages-by-netlify/
description: 众所周知，GitHub page的速度感人，所以国内想要更好的体验就需要借助更快的CDN，免费的Netlify就是一个很好的选择。
---

众所周知，GitHub page的速度感人，所以国内想要更好的体验就需要借助更快的CDN，免费的Netlify就是一个很好的选择。

- 2022.7.24更新 貌似Netlify某cdn被墙，所以弃用，转用国内阿里云全站加速cdn。

<!-- more -->

官网：<https://www.netlify.com/>

建议选择下方的Email注册，我想使用GitHub登录，结果卡在最后一步，收不到reset password 的验证邮件。

登录之后，选择Sites-》，授权netlify访问你的GitHub仓库的权限

![image-20210729174711592](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729174711592.png)

![image-20210729174915747](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729174915747.png)

选择网站源码托管的代码仓库类型，支持Github、Gitlab以及Bitbucket，选择`GitHub`

![image-20210729174947104](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729174947104.png)

然后会进入Github的认证授权页面，点击`Authorize Netlify by Netlify`

![image-20210729175025620](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729175025620.png)

点击`Only select repositories`选择要授权的Github仓库，当然，也可以直接选择授权所有仓库，这个授权在设置中可以改

之后，授权完成回到Netlify后台页面，选择我们刚刚授权的Github仓库继续

![image-20210729175118256](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729175118256.png)

选择部署的用户以及分支，如果是一些需要编译的项目，还支持定义编译的命令以及最终发布的目录，此博客是有hexo生成的纯静态网站的话都不需要填写，直接点击`Deploy site`即可完成部署。

部署完成后，Netlify会自动生成一个随机的二级域名`xxx.netlify.com`，我们可以修改为自定义的二级域名，点击`Sites Settings`或者`Domain settings`

![image-20210729175256844](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729175256844.png)

点击的是Sites Settings，则在Site details的Site information中点击Change site name

![image-20210729175456790](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729175456790.png)

若是点击的domain setting，则点击add domain（此处我是已经添加成功的截图，但是初次添加时也是这个按钮

![image-20210729175634420](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729175634420.png)

在这一步之前，回到域名的DNS解析商，比如我的laiczhang.com是在<https://dnspod.cn> 进行解析的，所以打开此域名的解析控制台 <https://console.dnspod.cn/dns/laiczhang.com/record#>

添加一行解析，

![image-20210729175907621](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729175907621.png)

阿里云的添加解析也是大同小异的操作。

在Domain setting页面的最下方，有Https相关的选型，你可以自己上传ssl证书，也可以使用Let's Encrypt的证书，但是听说Let's Encrypt有兼容还是有部分验证域名被污染了，在mac系统或者firefox浏览器中会加载缓慢，所以我选择使用腾讯提供的免费一年的ssl证书，在域名解析的右侧，点击一下`SSL`，然后就会自动申请。

![image-20210729180013422](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729180013422.png)

大概1分钟，申请成功。

下载下来有三个文件，分别使用记事本打开，然后把里面的内容复制到netlify提供的三个文本框中即可。

![image-20210729180347651](https://cdn.jsdelivr.net/gh/LaicZhang/picture-bed/com/image-20210729180347651.png)

至此Netlify与Github绑定完成，可以通过自定义域名访问网站了，之后你每一次提交代码到Github，便会**自动**发布至Netlify，无需额外操作，非常方便

国内也有类似于Github pages这样的服务，例如Gitee和Coding提供的pages服务，在速度方面要有不少的优势，但gitee不付费就需要手动重新部署，麻烦，而coding，更新迭代的太快，动不动就是改界面，改入口，稳定性欠佳，且两者可能会面临层层审查域名备案等问题。

如果域名有备案，项目又是纯静态的话，还可以考虑直接托管在国内的一些对象存储服务上，例如阿里云OSS、腾讯云COS等，然后开启CDN加速，效果也不错，并且前期流量小的时候都消费很低甚至有免费流量可以使用。
