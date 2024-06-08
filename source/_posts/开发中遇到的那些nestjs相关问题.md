---
title: 开发中遇到的那些nestjs相关问题
copyright: true
comment: true
mathjax: false
date: 2024-04-21 00:48:23
updated: 2024-04-21 00:48:23
tags:
  - nestjs
  - node
  - 后端
  - ts
categories: 后端
keywords: nestjs,后端,ts, static, nest,typescript,file,server-static,prisma,db,postgres,sql,ENOENT,file,file-index,500,404,stat,no-such-file-or-directory,html
permalink: some-problems-in-nestjs/
description:
---
## 前言

最近在开发nestjs项目，遇到了一些问题，记录一下。

<!-- more -->

## Nest 静态文件服务

虽然并没有使用nestjs的静态文件服务作为默认的静态资源地址，但还是可以当作备用方案。很久前就遇到了这个问题，只是看官方的issue和网上的一些blog也没有解决就先放到了一边开发其他功能去了，今天想起来了，解决一下。

根据官方文档，Nest 静态文件服务需要在项目根目录下创建一个 `public` 文件夹，然后将静态文件放到这个文件夹下。

文件路径为：

```txt
  .
  ├── package.json
  ├── public
  │   └── foo.png
  ├── src
  │   ├── app.controller.spec.ts
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   ├── app.service.ts
  │   ├── main.ts
  ├── tsconfig.build.json
  ├── tsconfig.json
  └── yarn.lock
```

根据官网示例配置一下import，

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

但当打开url `http://localhost:3000/public/foo.png` 时，浏览器和日志都提示 `ENOENT: no such file or directory, stat xxxx/index.html`。

解决方案：

```ts
imports: [ 
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'),
    serveRoot: '/public/'
  }),
],
```

这样就可以通过 `http://localhost:3000/public/foo.png` 访问静态文件了。
