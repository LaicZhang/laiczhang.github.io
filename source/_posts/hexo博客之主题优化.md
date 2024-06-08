---
title: hexo博客之主题优化
date: 2019-07-05 15:08:56
updated: 2019-07-05 15:08:56
tags:
  - hexo
  - next
  - theme
categories: hexo
keywords: hexo,next,theme
permalink: hexo-theme-optimize/
copyright: true
---

### 主题优化

#### 选择主题

Hexo默认的主题是`landscape`，推荐以下主题：

1. [snippet](https://github.com/shenliyang/hexo-theme-snippet#hexo-theme-snippet)
2. [Hiero](https://github.com/iTimeTraveler/hexo-theme-hiero#hiero)
3. [JSimple](https://github.com/tangkunyin/hexo-theme-jsimple#jsimple)
4. [BlueLake](https://github.com/chaooo/hexo-theme-BlueLake#bluelake)
5. [next](https://github.com/iissnan/hexo-theme-next)

详见：<https://github.com/search?q=hexo-theme>

<!--more-->

#### 应用主题

1. 下载主题
2. 将下载好的主题文件夹，粘贴到站点目录的`themes`下。
3. 更改站点配置文件`_config.yml` 的theme字段，为主题文件夹的名称：

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: <主题文件夹的名称>
```

#### 优化常见问题

以上主题都有比较详细的说明文档，本节主要解决主题优化的常见问题。

主题优化一般包括：

- **设置「RSS」**

- **添加「标签」页面**

- **添加「分类」页面**

- **设置「字体」**

  问题：引用国外字体镜像较慢。

  解决：可以改用国内的。将\themes\*\layout_partials\head external-fonts.swig文件中fonts.google.com改成fonts.lug.ustc.edu.cn。

- **设置「代码高亮主题」**

- **侧边栏社交链接**

  问题：图标哪里找？

  解决：[Font Awesome](https://fontawesome.com/icons?d=gallery)

- **开启打赏功能**

  问题：微信支付宝二维码不美观，规格不一。

  解决：[在线生成二维码](https://cli.im/weixin)

- **设置友情链接**

- **腾讯公益404页面**

- **站点建立时间**

- **订阅微信公众号**

- **设置「动画效果」**

  问题：慢，需要等待 JavaScript 脚本完全加载完毕后才会显示内容。
  解决：将主题配置文件`_config.yml`中，use_motion字段的值设为 `false` 来关闭动画。

- **设置「背景动画」**

主题优化还包括：

##### 添加背景图

在 themes/*/source/css/_custom/custom.styl 中添加如下代码：

```stylus
body{
    background:url(/images/bg.jpg);
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
}
```

##### 修改Logo字体

在 `themes/*/source/css/_custom/custom.styl` 中添加如下代码：

```stylus
@font-face {
    font-family: Zitiming;
    src: url('/fonts/Zitiming.ttf');
}
.site-title {
    font-size: 40px !important;
 font-family: 'Zitiming' !important;
}
```

其中字体文件在 `themes/next/source/fonts` 目录下，里面有个 `.gitkeep` 的隐藏文件，打开写入你要保留的字体文件，比如我的是就是写入 `Zitiming.ttf` ，具体字库自己从网上下载即可。

##### 修改内容区域的宽度

编辑主题的 `source/css/_variables/custom.styl` 文件，新增变量：

```stylus
// 修改成你期望的宽度
$content-desktop = 700px

// 当视窗超过 1600px 后的宽度
$content-desktop-large = 900px
```

##### 网站标题栏背景颜色

打开 `themes/*/source/css/_custom/custom.styl` ,在里面写下如下代码：

```stylus
.site-meta {
  background: $blue; //修改为自己喜欢的颜色
}
```

##### 自定义鼠标样式

打开 `themes/*/source/css/_custom/custom.styl` ,在里面写下如下代码：

```stylus
// 鼠标样式
  * {
      cursor: url("https://om8u46rmb.bkt.clouddn.com/sword2.ico"),auto!important
  }
  :active {
      cursor: url("https://om8u46rmb.bkt.clouddn.com/sword1.ico"),auto!important
  }
```

##### 文章加密访问

打开 `themes/*/layout/_partials/head.swig`文件,在 ``之前插入代码：

```html
<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入密码') !== '{{ page.password }}'){
                alert('密码错误');
                history.back();
            }
        }
    })();
</script>
```

写文章时加上`password: *`：

```txt
---
title: 2018
date: 2018-10-25 16:10:03
password: 123456
---
```

##### 实现点击出现桃心效果

1. 在`/themes/*/source/js/src`下新建文件`click.js`，接着把以下粘贴到`click.js`文件中。
   代码如下：

```js
!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
```

1. 在`\themes\*\layout\_layout.swig`文件末尾添加：

```html
<!-- 页面点击小红心 -->
<script type="text/javascript" src="/js/src/clicklove.js"></script>
```

##### 静态资源压缩

在站点目录下：

```bash
npm install gulp -g
```

安装gulp插件：

```bash
npm install gulp-minify-css --save
npm install gulp-uglify --save
npm install gulp-htmlmin --save
npm install gulp-htmlclean --save
npm install gulp-imagemin --save
```

在 `Hexo` 站点下新建 `gulpfile.js`文件，文件内容如下：

```js
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
// 压缩css文件
gulp.task('minify-css', function() {
  return gulp.src('./public/**/*.css')
  .pipe(minifycss())
  .pipe(gulp.dest('./public'));
});
// 压缩html文件
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
  .pipe(htmlclean())
  .pipe(htmlmin({
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  }))
  .pipe(gulp.dest('./public'))
});
// 压缩js文件
gulp.task('minify-js', function() {
    return gulp.src(['./public/**/.js','!./public/js/**/*min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩 public/demo 目录内图片
gulp.task('minify-images', function() {
    gulp.src('./public/demo/**/*.*')
        .pipe(imagemin({
           optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
           progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
           interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
           multipass: false, //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('./public/uploads'));
});
// 默认任务
gulp.task('default', [
  'minify-html','minify-css','minify-js','minify-images'
]);
```

只需要每次在执行 `generate` 命令后执行 `gulp` 就可以实现对静态资源的压缩，压缩完成后执行 `deploy` 命令同步到服务器：

```bash
hexo g
gulp
hexo d
```

##### 修改访问URL路径

默认情况下访问URL路径为：`domain/2018/10/18/关于本站`,修改为 `domain/About/关于本站`。 编辑 `Hexo` 站点下的 `_config.yml` 文件，修改其中的 `permalink`字段：

```yml
permalink: :category/:title/
```

##### 博文置顶

1. 安装插件

```bash
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

然后在需要置顶的文章的Front-matter中加上top即可：

```txt
---
title: 2018
date: 2018-10-25 16:10:03
top: 10
---
```

1. 设置置顶标志

打开：/themes/*/layout/_macro/post.swig，定位到

，插入以下代码即可：

```txt
{% if post.top %}
  <i class="fa fa-thumb-tack"></i>
  <font color=7D26CD>置顶</font>
  <span class="post-meta-divider">|</span>
{% endif %}
```

##### 在右上角或者左上角实现fork me on github

1. 选择样式[GitHub Ribbons](https://blog.github.com/2008-12-19-github-ribbons/),
2. 修改图片跳转链接,将`<a href="https://github.com/you">`中的链接换为自己Github链接：
3. 打开 `themes/next/layout/_layout.swig` 文件，把代码复制到`<div class="headband"></div>`下面。

##### 主页文章添加边框阴影效果

打开 `themes/*/source/css/_custom/custom.styl` ,向里面加代码:

```stylus
// 主页文章添加阴影效果
.post {
   margin-top: 0px;
   margin-bottom: 60px;
   padding: 25px;
   -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
   -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
}
```

##### 显示当前浏览进度

修改`themes/*/_config.yml`，把 `false` 改为 `true`：

```yml
# Back to top in sidebar
b2t: true

# Scroll percent label in b2t button
scrollpercent: true
```

##### 创建分类页

在终端窗口下，定位到 `Hexo` 站点目录下，新建：

```bash
cd <站点目录>
hexo new page categories
```

##### 加入 广告

主要有两种：[百度SSP](https://ssp.baidu.com/static/register.html)和[谷歌Adsense](https://www.google.com/adsense/start/#/?modal_active=none)。方法类似：

1. 注册，复制广告代码

2. 部署到网站。

   2.1. 新建 `theme/*/layout/_custom/google_ad.swig`，将 AdSense 上的代码粘贴进去
   2.2. 头部。在 `theme/*/layout/_custom/head.swig` 中也粘贴一份
   2.3. 每篇博客。在 `theme/*/layout/post.swig` 里中在希望看到的地方加上：

   ```txt
   {% include '_custom/google_ad.swig' %}
   ```

   例如：在 `<div id="posts" class="posts-expand"> </div>` 中间插入，总代码如下：

   ```txt
   {% block content %}
     <div id="posts" class="posts-expand">
       {{ post_template.render(page) }}
       {% include '_custom/google_ad.swig' %}
     </div>
   {% endblock %}
   ```

3. 等待审核通过。如果失败，可再次申请。

##### 添加萌萌哒

1. 安装插件

   ```bash
   npm install --save hexo-helper-live2d
   ```

2. 复制你选择的模型名字：

3. 将以下代码添加到主题配置文件`_config.yml`，修改<你喜欢的模型名字>：

   ```yml
   live2d:
     enable: true
     scriptFrom: local
     pluginRootPath: live2dw/
     pluginJsPath: lib/
     pluginModelPath: assets/
     tagMode: false
     log: false
     model:
       use: live2d-widget-model-<你喜欢的模型名字>
     display:
       position: right
       width: 150
       height: 300
     mobile:
       show: true
   ```

4. 建配置文件

   4.1. 在站点目录下建文件夹`live2d_models`，

   4.2. 再在`live2d_models`下建文件夹`<你喜欢的模型名字>`,

   4.3. 再在`<你喜欢的模型名字>`下建json文件：<你喜欢的模型名字>.model.json

5. 安装模型。在命令行（即Git Bash）运行以下命令即可：

   > npm install --save live2d-widget-model-<你喜欢的模型名字>

6. 在命令行（即Git Bash）运行以下命令， 在`https://127.0.0.1:4000/`查看测试结果:

   > hexo clean && hexo g && hexo s

## 参考链接

- [GitHub+Hexo 搭建个人网站详细教程](https://zhuanlan.zhihu.com/p/26625249 )
- [【持续更新】最全Hexo博客搭建+主题优化+插件配置+常用操作+错误分析](https://www.simon96.online/2018/10/12/hexo-tutorial/ )
