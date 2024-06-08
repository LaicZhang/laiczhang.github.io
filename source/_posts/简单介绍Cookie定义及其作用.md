---
title: 简单介绍Cookie定义及其作用
copyright: true
comment: true
mathjax: false
tags:
  - web
  - 前端
categories: web
keywords: cookie,web
date: 2020-05-24 11:37:07
updated: 2020-05-24 11:37:07
permalink: briefly-introduce-cookies-definition-and-its-role/
description:
---
## cookies是什么？

Cookie（复数形态Cookies），又称为“小甜饼”。类型为“小型文本文件”，指某些网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。

- Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据。
- 浏览器需要保存这段数据，不得轻易删除。
- 此后每次浏览器访问该服务器，都必须带上这段数据。
- 无论谁访问服务器时都必须携带自己的「通行证」，这样服务器就可以通过「通行证」确定用户身份了。
- Cookie有不可跨域名性。即浏览器不会将<https://baidu.com> 的cookie发送给<https://google.com>
Cookie 就是这么简单，这就是 Web 开发里 Cookie 的含义。

<!-- more -->

## 查看网站cookies

### 在application中查看

![](https://cdn.zyha.cn/blog/QQ截图20200524112526.png?x-oss-process=style/blog)

### 在network中查看

![](https://cdn.zyha.cn/blog/QQ截图20200524112732.png?x-oss-process=style/blog)

### console中通过js查看

document.cookie

### 通过浏览器插件查看

如Chrome浏览器的EditThisCookie插件等等。

## Cookies有几个特点

第一，它具有专属性，就是谁发出的Cookies就只有谁有权限读。你去淘宝买完了东西又上京东，京东的服务器来读取Cookies时是无法读取淘宝放在你机器中的Cookies的，它只能放置自己的Cookies，在需要时读取。所以尽管你电脑上存储了淘宝京东新浪草榴等一堆网站的Cookies，但只要电脑不丢，这些Cookies本身都是安全的，没有哪个网站能主动取走。

第二个特点，Cookies的确能记录你的很多个人信息，比如你经常访问哪类网页，在网页上停留多久，通常在什么时候上网等等。这些信息有些人可能毫不在乎，但如果有广告商集中搜集过去，就能掌握这个人的上网兴趣口味，有时还能推算出收入水平等个人信息。不过，对于很多地方强调的Cookies会保存用户密码问题，在我看来倒未必是迫在眉睫的危险，因为这些密码通常会用不可逆的方式加密，泄露出去也无法还原出用户密码；这方面的话题还可以专门开一篇文章讲，我们暂时打住，还是去谈主题。

## Cookie的属性

1. String「name」 ：该Cookie的「名称」。Cookie一旦创建，名称便不可更改。

2. Object「value」：该Cookie的「值」

3. Int「maxAge」：该Cookie的「失效时间」，单位秒

注：如果为正数，则该Cookie在maxAge秒后失效。如果为负数，则该Cookie为临时Cookie，关闭浏览器即失效。如果为0，表示删除该Cookie。默认为-1，即关闭浏览器即失效

4. Boolean「secure」：「是否仅使用安全协议传输」，默认为false

5. String「path」：该Cookie的「使用路径」

注：如果设置为“/shit/”，则只有“<https://xxx.xxx.xxx/shit> ”的程序可以访问该Cookie。如果设置为“/”，则本域名下的程序都可以访问Cookie，注意最后一个字符必须为“/”。

6. String「domain」：「可以访问该Cookie的域名」。

注：如果设置为".google.com "，则所有以"google.com "结尾的域名都可以访问该Cookie。注意第一个字符必须为“.”。

7. String「comment」：该Cookie的「用处说明」，用来再浏览器显示Cookie信息的时候显示该说明。

8. Int「version」：该Cookie的「版本号」。0表示遵循Netspace的Cookie规范，1表示遵循W3C的RFC2109规范。

## 参考文章

- [清除Cookie？告诉你什么叫Cookie-知乎](https://zhuanlan.zhihu.com/p/29884606)
- [Cookie是什么？-简书](https://www.jianshu.com/p/fe2de6369acf)
