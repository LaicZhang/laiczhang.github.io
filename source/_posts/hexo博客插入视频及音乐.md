---
title: hexo博客插入视频及音乐
copyright: true
comment: false
permalink: hexo-blog-insert-videos-and-musics/
date: 2019-10-25 18:09:34
updated: 2019-10-25 18:09:34
tags:
  - hexo
categories: hexo
keywords: hexo,hexo博客插入视频及音乐
description:
---
Hexo插入音乐/视频/网易云音乐/bilibili视频，会让博客看起来很洋气 (ง •̀_•́)ง 。

- 本文介绍的视频插入插件在本博客正在使用的hexo默认主题中无效。

<!-- more -->

## 一.iframe标签

### 1.添加音乐（代码从网易云音乐获得 ）

```html
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="音乐地址"></iframe>
```

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=421160838&auto=0&height=66"></iframe>

### 2.~~添加视频代码:(长宽可以自己定义) ~~

在hexo默认主题中无效。

```html
<iframe src="//player.bilibili.com/player.html?aid=39998869&cid=70251492&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

### 3.添加 gif 代码:(长宽可以自己定义)

```html
<iframe src="gif 图片地址"></iframe>
```

<iframe height=100 width=100 src="https://cdn.jsdelivr.net/gh/laiczhang/blogPic@master/blog/bu8is-0y6hi.gif"></iframe>

## 二.使用插件

### 1.安装视频插件：`npm install hexo-tag-dplayer`

在markdown中加入：

```html
{% dplayer "url=https://home.ustc.edu.cn/~xxxxx/GEM.mp4"  "pic=https://home.ustc.edu.cn/~xxxxx/GEM.jpg" "loop=yes" "theme=#FADFA3" "autoplay=false" "token=tokendemo" %}
```

### 2.安装音乐插件：npm install hexo-tag-aplayer

在markdown中加入：

```html
{% aplayer "她的睫毛" "周杰伦" "https://home.ustc.edu.cn/~xxxxx/%d6%dc%bd%dc%c2%d7%20-%20%cb%fd%b5%c4%bd%de%c3%ab.mp3" "https://home.ustc.edu.cn/~xxxxx/jay.jpg" "autoplay=false" %}
```

参考

- <https://www.jianshu.com/p/26a7fc7cc185>
