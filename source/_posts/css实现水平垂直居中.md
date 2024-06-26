---
title: css实现水平垂直居中
copyright: true
comment: false
mathjax: false
date: 2022-02-23 13:42:00
updated: 2022-02-23 13:42:00
tags:
  - css
  - 技巧
  - web
categories: css
keywords: css,水平垂直居中,水平垂直居中,居中
permalink: center-vertical-align-by-css/
description: Summarize the methods of css to achieve horizontal and vertical centering.
---
总结一下了解的css实现水平垂直居中的方法。

可以在[codepen](https://codepen.io/xbuabc/pen/WNXyORe)上进行测试。

- 2022.3.8更新，增加一些文本水平垂直居中的写法。[codepen](https://codepen.io/xbuabc/pen/JjOqoLQ)
<!-- more -->
## 原始代码

```html
<html>

<body>
  <div class="father">
    <div class="son"></div>
  </div>
</body>

</html>
```

```css
.father {
  border: solid 1px;
  width: 300px;
  height: 300px;
}

.son {
  background: #e4393c;
  width: 100px;
  height: 100px;
}
```

## 具体实现

### flex 方法1——适用于未知宽高

给父元素加弹性盒属性，加`justify-content` , `align-items`属性即可

```css
.father {
  display: flex;
  justify-content: center; /*水平居中*/
  align-items: center; /*垂直居中*/
}
```

### flex 方法2——适用于已知宽高

给父元素加弹性盒属性，子元素加 `margin:auto`

```css
.father {
    display: flex;
}
.son {
    margin：auto;
}
```

### 定位，父相子绝，配合transform属性——适用于未知宽高

父元素相对定位，子元素绝对定位，并且使用`transform`平移实现

```css
.father {
    position: relative;
}
.son {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);/* 参考自己的位置向上向左各平移自身的50% */
}

```

### 定位，父相子绝，配合margin属性

父元素相对定位，子元素绝对定位，同时上下左右为0，同时加上`margin:auto`

```css
.father {
    position: relative;
}
.son {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
```

### 父元素`display: table-cell`，子元素`display: inline-block;`

将父元素转为一个表格单元，子元素转为行内块

```css
.father {
    display: table-cell; /*此元素会作为一个表格单元格显示（类似 <td> 和 <th>）*/
    text-align: center; /*水平居中*/
    vertical-align: middle; /*垂直居中*/
}
.son {
    display: inline-block;  /*将其转为行内块元素*/
}
```

### 纯定位方式实现

父相子绝，子元素 left , right 各50%，再使用 margin-left , margin-top , 移动子元素自身宽高的一半

```css
.father {
    position: relative;
}
.son {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

### grid 方法1

```css
.father {
    display: grid;
    align-content: center;
    justify-content: center;
}
```

### grid 方法2

父元素加`display: grid;`，子元素加`align-self: center; justify-self: center;`即可

```css
.father {
    display: grid;
}
.son {
    align-self: center; 
    justify-self: center;
}
```

### 补充

```html
<div class="father">
  <span class="son">son</span>
</div>
```

```css
.father{
   background-color: red;
  height: 100px;
  text-align:center;
}

.son{
  background-color: pink;
  line-height:100px;
}
```

## 参考

- [CSS-还不会元素水平垂直居中？六种方法送给你](https://juejin.cn/post/7053032960986972196)
- [CSS水平垂直居中的方法](https://juejin.cn/post/6978666858543054885)
- [那些年我总结的css水平垂直居中](https://juejin.cn/post/7062608828570796046)

## 写在最后

关于浏览器兼容性，

- 完全不考虑并且布局较复杂，推荐使用grid（grid 就是为了解决复杂布局的）
- 完全不考虑，flex和grid都是不错的选择；
- 需要考虑移动端，建议使用flex而不是grid；
- 需要兼容老版本的浏览器，建议使用纯定位方式实现
