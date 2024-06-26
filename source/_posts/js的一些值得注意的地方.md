---
title: JS的一些值得注意的地方
copyright: true
comment: false
mathjax: false
date: 2022-04-28 18:04:46
updated: 2022-04-28 18:04:46
tags:
  - js
  - string
categories: JS
keywords: js, sort, parseInt
permalink: you-should-know-js-about-something/
description:
---
## 前言

总结的一些js的自带函数的值得注意的点。

已更新：parseInt,sort

<!-- more -->

[toc]

## [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

### 语法

```javascript
parseInt(string, radix)
```

### 参数

| 参数      | 描述 |
| ----------- | ----------- |
| string      | 必需。要被解析的字符串。       |
| radix   | 可选。不传默认为0，表示要解析的数字的基数。该值介于 2 ~ 36 之间。        |

### 使用

#### 一般情况

```javascript
console.log(parseInt('5'))        // 5
console.log(parseInt('-5'))       // -5
console.log(parseInt('2022年'))   // 2022

console.log(parseInt(0.1))        // 0
console.log(parseInt(0.01))       // 0
console.log(parseInt(0.001))      // 0
console.log(parseInt(0.0001))     // 0
console.log(parseInt(0.00001))    // 0
console.log(parseInt(0.000001))   // 0
```

#### 特殊情况

```javascript
console.log(parseInt(0.0000001))  // 1
```

### 问题

`parseInt()` 把 `float` 数据 `0.0000001` 解析为 1

### 原因

#### 第一个参数默认字符串，如果不是字符串可能在处理时会进行转换

比如

```javascript
console.log(String(0.1))        // '0'
console.log(String(0.01))       // '0'
console.log(String(0.001))      // '0'
console.log(String(0.0001))     // '0'
console.log(String(0.00001))    // '0'
console.log(String(0.000001))   // '0'

console.log(String(0.0000001))  // '1e-7'
```

字符串 `'1e-7'` ，`parseInt()`会解析为1(在非chrome浏览器中可能无输出)

```javascript
console.log(parseInt('1e-7'))  // 1
```

#### 当遇到极大/小的数，Js会自动转成指数形式

```javascript
console.log(0.0000001)        // 1e-7

console.log(parseInt(1e-7))   // 1

console.log(parseInt('1e-7')) // 1

console.log(parseInt(9999999999999999)) // 10000000000000000
console.log(parseInt(999999999999999999999)) // 1
```

### 总结

parseInt()总是将其第一个参数转换为字符串，所以小于10^-6的浮点数将以指数形式表示法编写。然后`parseInt()`从float的指数表示法中提取整数

### 解决方案

如果是小于10^-6的浮点数，可以使用Math.floor()函数来处理

```javascript
console.log(Math.floor(0.1))        // 0
console.log(Math.floor(0.01))       // 0
console.log(Math.floor(0.001))      // 0
console.log(Math.floor(0.0001))     // 0
console.log(Math.floor(0.00001))    // 0
console.log(Math.floor(0.000001))   // 0

// 1e-7 
console.log(Math.floor(0.0000001))  // 0

```

## [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### 语法

```js
// Functionless
sort()

// Arrow function
sort((a, b) => { /* ... */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* ... */ })
```

### 参数

| 参数      | 描述 |
| ----------- | ----------- |
| `compareFn` | Optional.Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value. |
| `a` | The first element for comparison. |
| `b` | The second element for comparison.|

```txt
若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
若 a 等于 b，则返回 0。
若 a 大于 b，则返回一个大于 0 的值。
```

### 问题

```javascript
['Xiaomi', 'apple', 'Oppo'].sort(); // ['Oppo', 'Xiaomi", 'apple']

[10, 22, 1, 8, 2].sort(); // [1, 10, 2, 22, 8]
```

### 原因

`sort()`方法是根据`字符串`的`ASCII码`进行排序，所谓的ASCII码也就是我们常说的`unicode`编码。而`同一个`英文字母，`大写`与`小写`是有区别的，小写字母的ASCII码是排在大写字母的后边。

在unicode码比较大小时，是`从前到后`且`逐位`进行比较（先是比较数组中`所有`元素的`第一位`，接着是第二位，第三位…）。

处理数组时，其实是对数组中的所有元素做了`隐式转换`,将`number`类型转换为`string`类型，然后进行针对上述字符串的排序。

### 解决方案

#### 针对字母

- 对所有元素的大小写做了`统一大小写处理`

```javascript
var arr = ['Xiaomi', 'apple', 'Oppo'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Oppo', 'Xiaomi']
```

#### 针对数字

```js
var arr = [10, 22, 1, 8, 2];
arr.sort(function(a,b){
    return a-b
});
console.log(arr);// [ 1, 2, 8, 10, 22 ]
```
