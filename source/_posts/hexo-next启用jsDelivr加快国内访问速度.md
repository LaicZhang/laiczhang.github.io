---
title: hexo-next启用jsDelivr加快国内访问速度
copyright: true
comment: false
mathjax: false
date: 2020-08-29 09:25:59
updated: 2020-08-29 09:25:59
tags:
  - hexo
  - cdn
categories: hexo
keywords: hexo,加速,cdn
permalink: speed-up-the-next-site-by-jsdelivr/
description:
---

## 前言

很多hexo博客都是部署在github pages 上的，虽然很方便又免费 ，但是速度往往不理想，而免费的jsdelivr在国内使用的是网宿的CDN加速！访问速度一点儿都不慢！可以对网站中的部分js等静态资源进行加速。

PS: 本域名解析国内IP访问coding page，国外IP访问GitHub page，可能优化不是特别明显。。。

- 2022.7.20更新 jsdelivr在部分地方已经不可用，建议自己反代并设置防盗链

<!-- more -->

在本地的next主题的配置中已经有对应的配置，

路径形如：./themes/next/_config.yml

我使用的notepad++，CTRL+f搜索关键词`jsdelivr`即可找到相关配置。

![](https://cdn.zyha.cn/blog/093624.png?x-oss-process=style/blog)

以jQuery模块为例，其他的照样修改即可。

```txt
  # Internal version: 3.4.1
  # Example:
  # jquery: //cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
  # jquery: //cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
  jquery: //cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
```

然后部署即可。

打开网站，F12，

可以看到，

![20200829095151](https://cdn.zyha.cn/blog/20200829095151.png?x-oss-process=style/blog)

修改成功！

需要注意的是，仅建议加速js等静态文件，不建议作为图床使用！

jsdelivr禁止以下行为：

1. 托管或访问以下内容：

   - 包含任何形式的恶意软件或有害代码
   - 侵犯他人的所有权
   - 是色情的
   - 在欧盟或美国可能是非法的。

2. **滥用服务及其资源，或将jsDelivr用作通用文件或媒体托管服务。例如，这包括：**

   - **运行图像托管网站，并使用jsDelivr作为所有上传图像的存储空间，**
   - **托管视频，文件备份或大量其他文件。**

   我们认识到存在包含大量文件的合法项目，这些不被视为滥用。例如：图标包，应用程序或具有大量资产的游戏。

3. 试图以任何方式绕过我们的限制或限制。我们很乐意为合法项目消除限制或提供定制解决方案。

- [jsDelivr官网](https://www.jsdelivr.com/)
- [使用jsdelivr加速hexo next主题-CSDN](https://blog.csdn.net/RayDon03/article/details/104398759/)
