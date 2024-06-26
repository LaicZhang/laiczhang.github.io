---
title: 通过Gulp压缩Hexo打包生成的静态资源
copyright: true
comment: false
mathjax: false
date: 2022-06-07 17:05:48
updated: 2022-06-07 17:05:48
tags:
  - hexo
  - 插件
  - 优化
categories: hexo
keywords: hexo,插件,优化,压缩,静态资源,gulp
permalink: hexo-static-resource-compress-by-gulp/
description:
---
## 安装配置gulp

### 1、安装gulp

```shell
npm install --global gulp-cli
```
<!--more-->
### 2、安装相关压缩模块

``` shell
npm install gulp --save
npm install gulp-htmlclean gulp-htmlmin gulp-clean-css gulp-uglify gulp-imagemin --save
npm install gulp-babel babel-preset-env babel-preset-mobx --save
npm install -D @babel/core @babel/preset-react @babel/preset-env --save
```

### 3、在hexo目录创建gulpfile.js，内容为

```javascript

let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let htmlmin = require('gulp-htmlmin')
let htmlclean = require('gulp-htmlclean')
let babel = require('gulp-babel') /* 转换为es2015 */
let uglify = require('gulp-uglify')
let imagemin = require('gulp-imagemin')

// 设置根目录
const root = './public'

// 匹配模式， **/*代表匹配所有目录下的所有文件
const pattern = '**/*'

// 压缩html
gulp.task('minify-html', function() {
  return gulp
    // 匹配所有 .html结尾的文件
    .src(`${root}/${pattern}.html`)
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      })
    )
    .pipe(gulp.dest('./public'))
})

// 压缩css
gulp.task('minify-css', function() {
  return gulp
    // 匹配所有 .css结尾的文件
    .src(`${root}/${pattern}.css`)
    .pipe(
      cleanCSS({
        compatibility: 'ie8'
      })
    )
    .pipe(gulp.dest('./public'))
})

// 压缩js
gulp.task('minify-js', function() {
  return gulp
    // 匹配所有 .js结尾的文件
    .src(`${root}/${pattern}.js`)
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('./public'))
})

// 压缩图片
gulp.task('minify-images', function() {
  return gulp
    // 匹配public/images目录下的所有文件
    .src(`${root}/images/${pattern}`)
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ optimizationLevel: 3 }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 7 }),
          imagemin.svgo()
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest('./public/images'))
})

gulp.task('default', gulp.series('minify-html', 'minify-css', 'minify-js'))
```

其中，gulp 3.x和4.x版本语法有些许不同，gulp 3.x版本的`gulp.series()`函数可以接受一个或多个函数，而gulp 4.x版本的`gulp.series()`函数只能接受一个函数。

``` javascript
//v3版本执行语法
gulp.task('default', gulp.parallel('compress', 'minify-css', 'minify-html', 'minify-images'))

//gulp 4.0.2新语法修改
gulp.task('default', gulp.series('compress', 'minify-css', 'minify-html'))
```

### 4、压缩

```bash
gulp
```

## 生成流程

```bash
hexo clean
hexo g
gulp
hexo d
```

## 参考文章

- [Hexo使用Gulp压缩静态资源](https://www.voidking.com/dev-hexo-gulp/)
- [gulp v4.0更新修改](https://sarakale.github.io/blog/posts/4425.html)
