---
title: 使用cloudflare-r2作为免费图床
copyright: true
comment: true
mathjax: false
date: 2022-10-09 11:45:54
updated: 2022-10-09 11:45:54
tags:
  - cf
  - 图床
categories: cf
keywords: 图床, cf, cloudflare, cloudflare-r2, 免费图床,free image bed
permalink: free-image-bed-with-cloudflare-r2/
description:
---
r2是cloudflare的一个产品，可以免费提供一个域名，可以用来做图床。

<!-- more -->
其实官方已经给出了[教程](https://developers.cloudflare.com/r2/data-access/public-buckets/)，不过是英文的，我这里结合我个人操作来翻译一下。

## 测试图片

![测试图片](https://cdn.fv.ci/5112246.jpg)

## 概述

公共存储桶是一项允许用户将其 R2 存储桶的内容直接公开到互联网的功能。默认情况下，存储桶永远不会公开访问，并且始终需要明确的用户权限才能启用。

公共存储桶可以通过两种方式设置：

第一个将您的存储桶公开为您控制下的自定义域。
第二个将您的存储桶公开为`*.r2.dev` 托管子域。
您可以选择执行一个或两个选项来测试公共存储桶。

## 设置自定义域

通过自定义域访问域允许您使用访问管理、缓存和机器人管理等功能。

要将自定义域连接到您的存储桶：

1. 转到R2并选择您的存储桶。
2. 转到设置。
3. 转到域访问。
4. 选择连接域。
5. 输入您要连接的域名，然后选择Continue。
6. 查看将添加到 DNS 表的新记录并选择Connect Domain。

您的域现已连接。状态从`Initializing`变为`Active`需要几分钟时间。刷新以查看状态更新。如果状态未更改，请选择存储桶旁边的`…`并选择`Retry connection`。

要查看添加的 DNS 记录，请选择已连接域旁边的…并选择Manage DNS。

```txt
使用自定义域访问 R2 存储桶时有一些限制：

使用的域必须与 R2 存储桶属于同一帐户。
不支持使用启用了 CNAME flattening的域 - 您需要在启用域访问之前禁用CNAME flattening。
对象访问只能通过 HTTPS 获得；不支持纯文本 HTTP。
```

## 为您的存储桶启用托管公共访问

为您的存储桶启用托管公共访问将使您的存储桶的内容通过`r2.dev` 子域在 `Internet` 上可用。要为您的存储桶启用公共访问权限：

1. 登录Cloudflare 仪表板> 选择您的帐户 > R2。
2. 选择您要为其启用公共访问的存储桶。
3. 转到设置。
4. 在“设置”中，转到“存储桶访问”。
5. 在存储桶访问下，选择允许访问。
6. 系统将提示您确认您的选择。在确认对话框中，输入“允许”进行确认，然后选择允许。
7. 您现在可以使用公共存储桶 URL 访问存储桶及其对象。
8. 您可以通过转到您的存储桶并检查`Public URL Access`状态是否为`Allowed`来查看您的存储桶是否可公开访问。

## R2存储桶设置

![R2存储桶设置](https://cdn.zyha.cn/blog/20221009133554.png?x-oss-process=style/blog)

注意：即便开启了公共访问，存储桶的默认给出的`xxxxx.r2.cloudflarestorage.com`域名仍然是`InvalidArgument`，无法访问的。建议通过设置中允许公共访问后生成的`xxxx.r2.dev`域名或自定义域名访问。

## 简单的计费规则

- 存储费用：每个月`10GB`免费额度，超出后每个月每 `GB` 收取 `$0.015` 的存储费用
- `A` 类操作费用：每个月一百万次免费额度，超出后每百万次收取 `$4.50` 的操作费用
- `B` 类操作费用：每个月一千万次免费额度，超出后每百万次收取 `$0.36` 的操作费用

`A` 类操作包括`ListBuckets、PutBucket、ListObjects、PutObject、CopyObject、CompleteMultipartUpload、CreateMultipartUpload、UploadPart、UploadPartCopy`

`B` 类操作包括`HeadBucket、HeadObject和GetObject`

免费操作包括`DeleteObject、DeleteBucket、DeleteMultipartUpload`
