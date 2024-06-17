---
title: NuxtHub尝鲜
copyright: true
comment: true
mathjax: false
date: 2024-06-18 00:04:59
updated: 2024-06-18 00:04:59
tags:
  - vue
  - nuxt
categories: nuxt
keywords: nuxt, vue, nuxtHub,nuxt-hub,cf,free,cloudflare,d1,r2
permalink: nuxthub-preview/
description:
---
我们`Vue`也要有自己的`Vercel`了：）

<!-- more -->
## 写在最前面

- 当前`NuxtHub`还在`beta`阶段，请不要用于生产环境。
- `NuxtHub`目前基于`Cloudflare`的`Workers`,`D1`,`R2`等服务，在不做其他优选的情况下网络联通性可能比不上`Vercel`。
- `NuxtHub`目前仅支持`GitHub`作为登录方式，并且要绑定`Cloudflare`账户才能使用。

## 关于[NuxtHub](https://hub.nuxt.com/)

![20240618002457](https://cdn.zyha.cn/blog/20240618002457.png?x-oss-process=style/blog)

- NuxtHub 是由 Cloudflare 提供支持的 Nuxt 部署和管理平台。
- 在 Cloudflare 账户上部署带有数据库、键值和 blob 存储的应用程序，无需任何配置。
- NuxtHub 可让您经济实惠地在任何地方运行高性能 Nuxt 应用程序。

## 价格

![20240618002915](https://cdn.zyha.cn/blog/20240618002915.png?x-oss-process=style/blog)
而`Vercel`的价格

![20240618003117](https://cdn.zyha.cn/blog/20240618003117.png?x-oss-process=style/blog)
当然，对于较大的项目来说，截图中的月费可能并不是最终花费。但由于`NuxtHub`是基于大善人`Cloudflare`的服务，所以大概率是更低价的。x上众多吐槽vercel费用高昂的有业务的用户可能会感到开心：）

当然，对用量极少的大部分人来说，两者都差不多。

## 简单对比

两者的大部分基础功能都是重合的，此处列举一些我认为值得对比的东西。

|          | NuxtHub                                                                   | Vercel                                                                                  |
| -------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 模板数量     | 极少（4个）                                                                    | 多                                                                                       |
| 同等较大项目计费 | 低                                                                         | 高                                                                                       |
| 教程数量     | 极少                                                                        | 多                                                                                       |
| 文档质量     | 一般                                                                        | 高                                                                                       |
| 更新频次     | 高                                                                         | 高                                                                                       |
| 网络联通测试   | ![](https://cdn.zyha.cn/blog/20240618010910.png?x-oss-process=style/blog) | ![20240618010749](https://cdn.zyha.cn/blog/20240618010749.png?x-oss-process=style/blog) |

- 此为2024.6.17的情况，随时可能变化，以官网内容为准
- `NuxtHub`的总体表现不及`Vercel`，主要原因之一是目前项目还太新了（2024.6.3发布beta），算是未来可期吧

## 总之

`NuxtHub`目前还处于`beta`阶段，功能还不完善，但对于个人开发者来说，应该是个不错的选择。

## 相关

- [nuxthub's changelog](https://hub.nuxt.com/changelog)
- [Introducing NuxtHub Beta](https://hub.nuxt.com/blog/beta)
- [Learn more about Cloudflare pricing](https://www.cloudflare.com/plans/developer-platform/)
