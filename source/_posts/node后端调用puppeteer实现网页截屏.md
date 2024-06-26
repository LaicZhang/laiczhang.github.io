---
title: node后端调用puppeteer实现网页截屏
copyright: true
comment: false
mathjax: false
date: 2022-04-07 09:36:57
updated: 2022-04-08 00:36:57
tags:
  - node
  - puppeteer
categories: node
keywords: node,puppeteer,截屏,网页截屏
permalink: node-call-puppeteer-to-finish-a-web-screenshot/
description:
---
如果`linux`中没有中文字体，截图出来的网页中会出现乱码，可以在`linux`中安装中文字体。

<!--more-->
## 安装中文字体-方法1

```shell
# sudo apt-get install language-pack-zh*
# sudo apt-get install chinese*
```

And finally, you will need to add additional fonts:

```shell

# sudo apt-get install fonts-arphic-ukai fonts-arphic-uming fonts-ipafont-mincho fonts-ipafont-gothic fonts-unfonts-core
```

## 安装中文字体-方法2

### 安装fontconfig

```shell
yum -y install fontconfig
```

### 添加中文字体库

```bash
mkdir -p /usr/share/fonts/chinese
cd /usr/share/fonts/chinese
wget https://www.chinafont.com/download/fonts/chinese/wqy/wqy-microhei.ttc
wget https://www.chinafont.com/download/fonts/chinese/wqy/wqy-zenhei.ttc
chmod -R 775 /usr/share/fonts/chinese

yum -y install ttmkfdir #搜索目录中所有的字体信息
ttmkfdir -e /usr/share/X11/fonts/encodings/encodings.dir
vi /etc/fonts/fonts.conf
```

粘贴下面的内容

```bash
<!-- Font directory list -->

<dir>/usr/share/fonts</dir>
<dir>/usr/share/X11/fonts/Type1</dir>
<dir>/usr/share/X11/fonts/TTF</dir>
<dir>/usr/local/share/fonts</dir>
<dir>/usr/local/share/fonts/chinese</dir>
<dir>~/.fonts</dir>
```

然后使用`fc-list :lang=zh`即可看到中文字体的信息。

## 用puppeteer来截屏

### 安装puppeteer

```bash
npm install --save puppeteer
```

### koa中主要实现代码

```js
const router = require('@koa/router')()
const puppeteer = require('puppeteer')

router.get('/screenshot', async(ctx) => {
    const { url } = ctx.request.query
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.goto(url)
    const shareId = await counterService.plusOne('shareId')
    await page.screenshot({ path: `filename.png` })
    await page.close()
    await browser.close()
    ctx.body = success(url)
})
```

- 此处代码可以进行简单优化，如把定义`browser`放到外面，这样就不需要每次调用`puppeteer.launch`及`browser.close()`了。

#### 部分可能用到的api

```js
await page.goto(url, { // networkidle2 - consider navigation to be finished when there are no more than 2 network connections for at least 500 ms. networkidle0 会一直等待，直到页面加载后同时没有资源请求，这个种状态持续至少 500 ms。
      waitUntil: 'networkidle0',
    })
await page.setViewport({ width: 1440, height: 789 }) // 设置浏览器窗口大小
await page.waitForTimeout(3000) // 等待3秒
await page.screenshot({
      path: `public/screenshot/${shareId}.png`,
      // fullPage: true, 对整个页面进行截取。如果页面过长，超出了当前视窗（viewport），它会自动截取超出的部分，即截取结果是长图。
      clip: { // 截图的范围,如果手动指定了 clip 参数对页面进行范围的限定，则不能再指定 fullPage 参数。
        x: 1040,
        y: 100,
        width: 380,
        height: 200,
      },
    })
```
