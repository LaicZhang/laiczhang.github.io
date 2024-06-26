---
title: PHP获取bing今日壁纸
copyright: true
comment: false
mathjax: false
tags:
  - bing
  - 壁纸
  - PHP
categories: 壁纸
permalink: php-get-bing-todays-wallpaper/
date: 2020-04-17 09:45:42
updated: 2020-04-17 09:45:42
keywords: bing,壁纸,PHP,今日壁纸
description:
---
众所周知，[bing官网](https://cn.bing.com/) 每日壁纸都是不一样的 如何获取当日的壁纸呢？
<!-- more -->

预览图片：

![](https://laiczhang.com/bing.php)

在网站目录下建一个.php后缀的文件，粘贴代码

```php
<?php
$str = file_get_contents('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1'); // 从bing获取数据

if(preg_match('/<url>([^<]+)<\/url>/isU', $str, $matches)) { // 正则匹配抓取图片url
$imgurl = 'https://cn.bing.com'.$matches[1];
} else {
$imgurl = 'https://img.infinitynewtab.com/InfinityWallpaper/2_14.jpg'; // 使用默认的图像(默认图像链接可修改为自己的)
}
 
header("Location: {$imgurl}"); // 跳转至目标图像
```

在Markdown中输入`![](https://laiczhang.com/bing.php)`，即可看到预览图片。
