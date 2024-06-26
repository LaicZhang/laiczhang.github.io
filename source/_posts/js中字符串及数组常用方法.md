---
title: Javascript中字符串及数组常用方法
copyright: true
comment: false
mathjax: false
date: 2022-04-29 15:58:30
updated: 2022-04-29 15:58:30
tags:
  - js
  - 字符串
  - 数组
categories: JS
keywords: js, string, array, function
permalink: some-js-functions-about-string-and-array/
description:
---
项目里一些常见的js的字符串及数组常用方法。

过于简单或常用的如字符串拼接这些就先不写了。

<!--more -->
## 字符串

### 字符串截取substring

```javascript
let str='这是一个字符串';
console.log(str.substring(2));// 一个字符串
console.log(str.substring(0,2));// 这是
console.log(str.substring(2,0));// 这是
console.log(str.substring());// 这是一个字符串
console.log(str.substring(0));// 这是一个字符串
console.log(str.substring(-3,2));// 这是
console.log(str.substring(2,-3));// 这是
/*
*不写参数默认为0，取所有
*两个参数，会自动排序，值小的在前，大的在后
*负数为自动转化为0
*/
```

### 字符串截取slice

```javascript
var str='这是一个字符串';
console.log(str.slice(4));// 字符串
console.log(str.slice(-2));// 符串
console.log(str.slice(0,2));// 这是
console.log(str.slice(2,0));// （空）
console.log(str.slice(-2,-4));// 个字
```

### 字符串切割split

```javascript
var str='www.zyha.cn';
console.log(str.split('.');// ['www','zyha','cn']
console.log('zyha'.split());// ['zyha']
console.log('zyha'.split(''));// ['z','y','h','a']
```

### 颠倒reverse

```javascript
var str = 'abcdef';
console.log(str.split('').reverse().join(''));// 'fedcba'
```
