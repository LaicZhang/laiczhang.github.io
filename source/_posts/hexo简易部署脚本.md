---
title: hexo简易部署脚本
copyright: true
comment: true
date: 2019-11-03 14:15:58
updated: 2019-11-03 14:15:58
tags:
  - hexo
  - 技巧
categories: hexo
keywords: hexo,技巧,部署脚本,deployment script
permalink: a-simple-hexo-deploy-script/
description:
---

我的`hexo`博客每次写了新的文章，要部署到博客上，还要`hexo g`和`hexo d`，过于麻烦，于是写个巨简陋的脚本，减少点工作量。

<!-- more -->
## 发布

重新 `generate` 下文件，然后重新部署。

在根目录下新建一个 `deploy.sh` 的脚本文件，内容如下：

```shell
hexo clean
hexo generate
hexo deploy
```

这样我们在部署发布的时候只需要执行：

```shell
bash deploy.sh
```

就可以完成博客的更新了，非常简单。

![输出结果](https://cdn.zyha.cn/blog/20220721224915.png?x-oss-process=style/blog)

windows运行结束后，Git窗口会自动关闭，Mac直接在terminal中运行即可。

## 预览

```shell
./node_modules/hexo/bin/hexo clean    #清除public文件夹
./node_modules/hexo/bin/hexo g     #编译文章，生成public文件夹
./node_modules/hexo/bin/hexo server --watch --host

# INFO  Hexo is running at http://localhost:4000/ . Press Ctrl+C to stop.
```
