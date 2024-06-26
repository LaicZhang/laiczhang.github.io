---
title: 【第二届字节青训营】理解CSS笔记
copyright: true
comment: false
mathjax: false
date: 2022-01-16 21:34:46
updated: 2022-01-16 21:34:46
tags:
  - css
  - 字节跳动
categories: note
keywords: 笔记, css, 字节跳动, 青训营,flex,grid,feat
permalink: the-2nd-youth-training-camp-frontend-field-of-winter-vacation-understanding-css-chapter/
description:
---
参加了字节跳动的第二届青训营，寒假前端场，本文为《理解CSS》的笔记。
<!--more-->
## css用来定义页面元素的样式

- 设置字体和颜色
- 设置位置和大小
- 添加动画效果

## 继承

某些属性会自动继承其父元素的属性，除非显示指定`box-sizing: inherit`，即设置为显式继承。

## 初始值

- CSS中的每个属性都有一个初始值，
  - background-color的初始值为transparent
  - margin-left的初始值为0
- 可以使用initial关键字显式地将某个属性重置为其初始值，如：background-color:initial;
- 若将盒子模型的外边距、边框和内边距的大小设置为百分数，则是以其父元素的宽度为准的；若将盒子模型的宽度设置为百分数则是以其父元素的宽度为准的，若将盒子模型的高度设置为百分数，则是以其父元素的高度为准的，但是其元素要设置高度才可以。

## 求值过程

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6d1f306109d451fac67fba1a80d7216~tplv-k3u1fbpfcp-watermark.image?)

## 布局layout

- 布局是一种依据元素、容器、兄弟节点和内容等信息来**确定内容的大小和位置的算法**

- CSS中的布局技术有三大类
    (1)常规流(文档流)
    (2)浮动
    (3)定位

### [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

- 在常规流里布局
- 相对于自己本应该在的位置进行偏移
- 使用`top`,`left`,`right`,`bottom`设置偏移长度
- 流内其他元素当它没有偏移一样布局
- position属性
  - static，默认值，非定位元素
  - relative，相对自身原本位置偏移，不脱离文档流
  - absolute，绝对定位，相对非static祖先元素定位
  - fixed，相对视口绝对定位

## [BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

- 一个独立渲染区域。
- 块元素和行内元素是HTML的概念，在CSS中，由于内置了dispaly属性，块元素默认会生成块级盒子，行内元素会默认生成行级盒子，也可以自定义使用display属性来改变盒子的属性。
- 最常用的设置BFC方法 `overflow: hidden`
- 创建**块格式化上下文**：
  - 根元素（`<html>）`
  - 浮动元素（元素的 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 不是 `none`）
  - 绝对定位元素（元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `absolute` 或 `fixed`）
  - 行内块元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `inline-block`）
  - 表格单元格（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-cell`，HTML表格单元格默认为该值）
  - 表格标题（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-caption`，HTML表格标题默认为该值）
  - 匿名表格单元格元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table、``table-row`、 `table-row-group、``table-header-group、``table-footer-group`（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 `inline-table`）
  - [`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 计算值(Computed)不为 `visible` 的块元素
  - [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 值为 `flow-root` 的元素
  - [`contain`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain) 值为 `layout`、`content`或 paint 的元素
  - 弹性元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `flex` 或 `inline-flex`元素的直接子元素）
  - 网格元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `grid` 或 `inline-grid` 元素的直接子元素）
  - 多列容器（元素的 [`column-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count) 或 [`column-width` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width "Currently only available in English (US)") 不为 `auto，包括 ``column-count` 为 `1`）
  - `column-span` 为 `all` 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（[标准变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)，[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）。

## [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

- 一种新的排版上下文
- 它可以控制子盒子的：
  - 摆放的流向
  - 摆放顺序
  - 盒子宽度和高度
  - 水平和垂直方向的对齐
  - 是否允许折行

## [grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)

- `display: grid`使元素生成一个grid容器
- 使用`grid-template`相关属性将容器分为网格
- 设置每一个子项占哪些行/列

## 参考

- <https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid>
- <https://www.w3.org/>
