---
title: Nestjs项目升级eslint到v9过程全解
copyright: true
comment: false
mathjax: false
date: 2024-10-23 13:44:50
updated: 2024-10-23 13:44:50
tags:
categories:
keywords: 升级,eslint,v9,prettier,v8,eslint9
permalink: upgrade-eslint-to-v9/
description:
---
距离 9.0 版本发布已经4个多月了，主流框架或者工具基本都已经适配，体验一下新版本。

eslint 8 到 9 属于破坏性更新（Break Change），因此导致 eslint v8 的配置方式无法直接使用（可以使用兼容包，但这不是本文的主题）。

其实大家最关心的就是从 eslint 8 到 9 之后的写法，而与 eslint 息息相关的多种配置插件也需要大量的变更，因此本文核心就是：使用 eslint9 配置规则和集成 prettier。

- TODO

<!-- more -->