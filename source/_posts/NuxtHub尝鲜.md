---
title: NuxtHub尝鲜
copyright: true
comment: false
mathjax: false
date: 2024-06-18 00:04:59
updated: 2024-09-29 00:04:59
tags:
  - vue
  - nuxt
  - 建站
  - 开发环境
  - 效率
categories: nuxt
keywords: nuxt, vue, nuxtHub,nuxt-hub,cf,free,cloudflare,d1,r2,blob,post
permalink: nuxthub-preview/
description: NuxtHub是由Cloudflare提供支持的Nuxt部署和管理平台，在Cloudflare账户上部署带有数据库、键值和blob存储的应用程序，无需任何配置。
---
我们`Vue`也有自己的`Vercel`了：）

> Nuxt on Cloudflare infra with minimal effort - this is huge!

- 2024.8.11更新：`NuxtHub`支持快速上传文件至r2存储，并提供免费流量。
- 2024.8.18更新：`NuxtHub`支持`Cloudflare Workers AI`相关api
- 2024.9.29更新：忽然发现其暗改免费计划（项目上限20个->5个）
- 2025.7.10更新：[Vercel收编了NuxtLabs，nuxthub或将被开源](https://nuxtlabs.com)，后续nuxt的项目集成可能更多会由vercel实现

<!-- more -->
## 写在最前面

- 当前`NuxtHub`还在`beta`阶段，请不要用于生产环境。
- `NuxtHub`目前基于`Cloudflare`的`Page`,`D1`,`R2`等服务，在不做其他优选的情况下网络联通性可能比不上`Vercel`。
- `NuxtHub`目前仅支持`GitHub`作为登录方式，并且要绑定`Cloudflare`账户才能使用。

## 关于[NuxtHub](https://hub.nuxt.com/)

![20240618002457](https://cdn.zyha.cn/blog/20240618002457.png?x-oss-process=style/blog)

- NuxtHub 是由 Cloudflare 提供支持的 Nuxt 部署和管理平台。
- 在 Cloudflare 账户上部署带有数据库、键值和 blob 存储的应用程序，无需任何配置。
- NuxtHub 可让您经济实惠地在任何地方运行高性能 Nuxt 应用程序。

## 架构

![架构](https://img.tucang.cc/api/image/show/a7a98a507e6564ad3f682138e81dbdae)

## 价格

![20240618002915](https://cdn.zyha.cn/blog/20240618002915.png?x-oss-process=style/blog)

- 其免费计划可以创建的项目已经从20个修改为5个

![](https://img1.tucang.cc/api/image/show/0efb6fc56725f34d1d9e9f69966903cb)

而`Vercel`的价格

![20240618003117](https://cdn.zyha.cn/blog/20240618003117.png?x-oss-process=style/blog)

PS: 对于较大的项目来说，截图中的月费可能并不是最终花费。但由于`NuxtHub`是基于大善人`Cloudflare`的服务，所以大概率是更低价的。x上众多吐槽vercel费用高昂的有业务的用户可能会感到开心：）

PSS: 对用量极少的大部分人来说，两者都差不多都是免费的。

## 简单对比

两者的大部分基础功能都是重合的，此处列举一些我认为值得对比的东西。

|                      | NuxtHub                                                                              | Vercel                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| 官网模板数量               | 较少（10个）                                                                               | 多                                                                                      |
| 同等较大项目计费             | 低                                                                                    | 高                                                                                      |
| 教程数量                 | 极少                                                                                   | 多                                                                                      |
| 所需账号                 | `Github`+`Cloudflare`                                                                | `Vercel`                                                                               |
| 文档质量                 | 一般                                                                                   | 高                                                                                      |
| 更新频次                 | 高                                                                                    | 高                                                                                      |
| 修改环境变量后              | 会提醒重新构建                                                                              | 无提醒                                                                                    |
| 流量图表                 | 无（可在CF查询）                                                                            | 有                                                                                      |
| GitHub Deployments集成 | 无                                                                                    | 有                                                                                      |
| 流量限制                 | 无限                                                                                   | 免费流出`100 GB /mo`，超出`$0.15/GB`；免费回源`10GB/mo`， `$0.06/mo`                                           |
| 自定义域名网络联通测试          | ![](https://cdn.zyha.cn/blog/20240618010910.png?x-oss-process=style/blog)            | ![](https://cdn.zyha.cn/blog/20240618010749.png?x-oss-process=style/blog)              |
| 默认域名网络联通测试           | ![*.nuxt.dev](https://img.tucang.cc/api/image/show/cb5619c4fcc002aadc22eba15b396f2a) | ![*.vercel.app](https://img.tucang.cc/api/image/show/8435375c13d5731541694b931679b4ca) |

- 此为2024.6.17的情况，随时可能变化，以官网内容为准
- 虽然目前nuxthub的默认域名还能用，但迟早被滥用，还是会步入`*.page.dev`和`*vercel.app`的后尘，还是建议绑定自定义域名进行使用

## 上传文件至R2存储

- server/api/upload.post.ts

```ts
export default eventHandler(async (event) => {
  // Make sure the user is authenticated to upload
  const { user } = await requireUserSession(event)

  // Read the form data
  const form = await readFormData(event)
  const drawing = form.get('drawing') as File

  // Ensure the file is a jpeg image and is not larger than 1MB
  ensureBlob(drawing, {
    maxSize: '1MB',
    types: ['image/jpeg'],
  })

  // Upload the file to the Cloudflare R2 bucket
  return hubBlob().put(`${Date.now()}.jpg`, drawing, {
    addRandomSuffix: true,
    customMetadata: {
      userProvider: user.provider,
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      userUrl: user.url,
    },
  })
})
```

## `hubAI()`

```ts
export default defineEventHandler(async (event) => {
  return await hubAI().run('@cf/meta/llama-3.1-8b-instruct', {
    prompt: 'Who is the author of Nuxt?'
  })
})
```

## 总之

`NuxtHub`的总体表现不及`Vercel`，主要原因之一是目前项目还太新了（2024.6.3发布beta），但站在`Cloudflare`的肩膀上，很多功能会有更多的免费额度，算是未来可期吧。

`NuxtHub`目前还处于`beta`阶段，部分功能可能还不完善，但对于海外的个人开发者来说，应该是个不错的选择。

## 相关

- [nuxthub's changelog](https://hub.nuxt.com/changelog)
- [Introducing NuxtHub Beta](https://hub.nuxt.com/blog/beta)
- [Learn more about Cloudflare pricing](https://www.cloudflare.com/plans/developer-platform/)
- [Vercel Pricing](https://vercel.com/pricing)
