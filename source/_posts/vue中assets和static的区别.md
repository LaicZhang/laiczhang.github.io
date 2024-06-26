---
title: vue中assets和static的区别
copyright: true
comment: false
mathjax: false
date: 2022-01-08 09:21:25
updated: 2022-01-08 09:21:25
tags:
  - vue
  - static
  - assets
categories: vue
keywords: vue,vue-cli,assets,static,理解,区别,底层
permalink: difference-between-assets-and-static-in-vue/
description: 
---
使用 `vue-cli` 搭建的项目中有 `assets` 和 `static` 文件夹，本文翻译官方文档中两者的区别。
[Handling Static Assets](https://vuejs-templates.github.io/webpack/static.html)
<!--more-->
## Webpacked Assets

为了回答这个问题，我们首先需要了解`Webpack`如何处理`static assets`。在 `*.vue` 组件中，所有模板和CSS都会被 `vue-html-loader` 及 `css-loader` 解析，并查找资源URL。例如，在 `<img src="./logo.png">`
和 `background: url(./logo.png)` 中，"./logo.png" 是相对的资源路径，将由`Webpack`解析为模块依赖。

因为 `logo.png` 不是 `JavaScript` ，当被视为模块依赖时，需要使用 `url-loader` 和 `file-loader`
处理它。 `vue-cli` 的 `webpack` 脚手架已经配置了这些 `loader` ，因此可以使用相对/模块路径。

由于这些资源可能在构建过程中被内联/复制/重命名，所以它们基本上是源代码的一部分。这就是为什么建议将
Webpack 处理的静态资源放在 `/src` 目录中和其它源文件放一起的原因。事实上，甚至不必把它们全部放在 `/src/assets`：可以用模块/组件的组织方式来使用它们。例如，可以在每个放置组件的目录中存放静态资源。

## "Real" Static Assets

相比之下，static/ 目录下的文件并不会被 `Webpack` 处理：它们会直接被复制到最终目录（默认是`dist/static`）下。必须使用绝对路径引用这些文件，这是通过在 `config.js` 文件中的 `build.assetsPublicPath` 和 `build.assetsSubDirectory` 连接来确定的。

任何放在 `static/` 中文件需要以绝对路径的形式引用：`/static/[filename]`。如果更改 `assetSubDirectory` 的值为 `assets` ，那么路径需改为 `/assets/[filename]`。
