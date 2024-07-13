---
title: 将域名迁移至Google-domains
copyright: true
comment: false
mathjax: false
date: 2022-06-19 14:30:51
updated: 2022-07-02 14:30:51
tags:
  - domain
  - google
categories: 网站
keywords: google, domains, 域名, 迁移, 优惠, 土区
permalink: transfer-domain-to-google-domains/
description: The main reason for the migration is because Google Domain is currently very cheap to renew com. This article is completed after the transfer is successful, so the intermediate details may not be mentioned, only the general process is recorded.
---
迁移的主要原因还是因为Google Domain目前续费com很便宜。

- 按照目前的价格，75try约为29元，比dnspod等网站便宜一半，感觉还行。🤪
- 2022.7.1更新 7.29号土区com域名涨价提醒（75try->195try）
- 2024.7.1更新 domain业务已经被出售给Squarespace
<!--more-->

```txt
Squarespace is the registrar of record for your domain. However, Google will manage your domain during a transition period, and Google's Privacy Policy and Terms of Service will apply during that period. Your customer and billing information, if applicable, will subsequently be transferred to Squarespace. Upon transfer, your data will be governed by Squarespace's Privacy Policy and Squarespace's Terms of Service will apply. More information can be found here.

To learn more about Squarespace Domains and Squarespace's plans, visit the Squarespace Domains page.
```

![20220619143406](https://cdn.zyha.cn/public/upload/20220619143406.png)

本文完成于转移成功之后，所以中间细节可能未提及，仅记录大概过程。

## 准备

- 土区ip
- 外币卡（非银联卡）

## 注册Google Domain

- 使用土区ip在[Google Domain](https://domains.google.com/)的网站上登录账号

## 转移域名

- 在需要转移的域名的原注册商网站，如我原本托管的dnspod，先看域名是否处于`locked`状态，如果是，则先解锁`unlock`，才可以开始转移。
- 回到Google domain控制台，选择`Transfer`，准备转移
- 支付一年的续费（目前（2022/6/19）土区续费价格为75try）
- 等待转移，大概7-10天即可转移完成

注意：转移之前记得先备份域名解析的记录，以免转移后记录丢失。

## 转移成功

转移成功之后会收到邮件，
![20220619162339](https://cdn.zyha.cn/public/upload/20220619162339.png)
并可以在控制台看到如上status为`success`状态。
![20220619150304](https://cdn.zyha.cn/public/upload/20220619150304.png)

此处`Email`为我将此域名作为我的workspace的域名后缀，如果没有设置，会显示为`None`。

## 注意

自 2022 年 7 月 29 日起，续订 .COM 域名的价格将增加到 195 土耳其里拉/年。要延长 75 土耳其里拉/年的费率，请增加年限。

![20220702160810](https://cdn.zyha.cn/blog/20220702160810.png?x-oss-process=style/blog)
