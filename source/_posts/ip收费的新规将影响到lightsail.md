---
title: ip收费的新规将影响到lightsail
copyright: true
comment: true
mathjax: false
date: 2023-07-30 00:23:43
updated: 2023-07-30 00:23:43
tags:
  - aws
  - lightsail
  - vps
categories: vps
keywords: vps, aws, lightsail, ip
permalink: aws-ip-charge/
description: 
---
`AWS`[新规](https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/)，将在2024年收取每个公网ip每月3.5usd左右的费用。
<!--more-->
这篇文章里没有明确写lightsail，但是lightsail的ip也是公网ip，所以也会受到影响。

下面是我提问后官方人员给出的[答复](https://repost.aws/questions/QUT9M2DAKiQTSkOXZnaYYR0g/does-lightsail-charge-extra-ip-fees)：
![](https://cdn.zyha.cn/blog/20230730000356.png?x-oss-process=style/blog)

是的，公共IPv4地址的收费变更将应用于Lightsail。新的指控将于2024年2月1日生效。

以下是更改的细节：

所有公共IPv4地址，无论是否连接到服务，每个IP每小时将收取0.005美元的费用。在更改生效后的头12个月，每月前750小时的公共IPv4地址使用将是免费的。您拥有并使用Amazon BYOIP带到AWS的IP地址不会被收取费用。
