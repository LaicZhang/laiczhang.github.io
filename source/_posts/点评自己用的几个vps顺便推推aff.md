---
title: 点评自己用的几个vps顺便推推aff
copyright: true
comment: false
mathjax: false
date: 2020-04-04 22:40:34
updated: 2024-06-30 22:40:34
tags:
  - vps
  - 建站
categories: 评测
keywords: 评测,vps,建站
permalink: evaluate-several-vps-I-have-used/
description: 点评自己用的几个vps,顺便推推aff. 都是便宜货，非专业评测，并且并未跑测试脚本，仅仅是个人感觉。不同地区不同运营商的网络环境不同。更多的是科普向，不用期盼能捡个好大的便宜。
---
首先声明，

- 都是便宜货（基本不超过20元/月）
- 非专业评测，并且并未跑测试脚本，仅仅是个人感觉
- 不同地区不同运营商的网络环境不同
- 更多的是科普向，不用期盼能捡个好大的便宜。

如有谬误，还请指出。

- 2024.6.30更新：增加阿里云99/年活动机，oracle免费🐔
- 2022.8.1更新：增加do评测链接
- 2022.7.26更新：增加AWS评测链接
- 2020.10.27更新：增加hostmem使用评价
- 2020.10.2更新：添加hostmem国庆活动链接
- 2020.9.8更新：添加AWS lightsail，hostmem
<!-- more -->

## 1. 阿里云学生机ECS（已弃用）

价格：9.5元/月

配置：1M带宽，40G硬盘

友情提示，如果你想直接买1年的，记得领那张100-20的券，（当时我就傻乎乎的啥也不知道就直接买了114一年，亏死了

点评：我买的第一台vps。机器很一般，不过装个Ubuntu确实适合初学Linux的同学折腾。本来想搭个博客，结果发现国内解析域名到vps需要备案（国外服务器不用备案），申请了两次都没过，而且备案之后别人能直接查到名字，虽说这年头隐私很容易就泄露了，但是还是不爽，就取消申请了。当然，如果你对域名没有要求，只用ip也能接受，那也还是个不错的选择。比如我前段时间搭的自用的在线jupyter notebook，感觉还不错。

反正我的学生机最后是放在那里吃灰了。。。

有阿里云账号可以直接购买，地址（无aff）：<https://promotion.aliyun.com/ntms/act/campus2018.html>

没账号通过这个链接注册，你有好处，也能给我来一波返利：<https://www.aliyun.com/minisite/goods?userCode=ssxle8y1>

PS：最近出来了个高校学生在家实践活动，可以免费一年的vps,而且配置居然比114一年的好，可以看看:<https://developer.aliyun.com/adc/student/>

## 2. vultr日本（已弃用）

价格：2.5美元/月

配置：1 CPU 512MB Memory 500GB Bandwidth

点评：被开始的送100美元的活动吸引过去的，不过只有一个月的有效期（意思是第一个月你可以随便浪），用不完有点可惜。vultr算是大厂，机器性能在同等价位的vps算是最好的。不过因为ip被墙了可以免费换的政策，被开机场的大佬们弄的半残了（我没有开车.jpg

不建议用来富强，可以用来建个小站或者跑跑爬虫啥的。

需要说明的是，需要你先充值`70RMB`激活账户后，才可以获得`100`美元，你购买vps的时候先用`100`美元，

aff：<https://www.vultr.com/?ref=8508301>

## 3. 阿里云香港新手试用（已送人）

价格：0元/年

配置：1M带宽，40G硬盘

点评：我~~现在的另外一个[博客](https://laiczhang.com)就是用的这个~~，与开头的学生机相同的配置，小水管，没啥人看，感觉也还行，不折腾，我看中的就是不用备案

这个机器需要国外ip+非国区PayPal+非大陆电话，加上阿里的风控，开通相当麻烦，不过同学们还是可以试一试滴。~~当然，如果有同学需要的话，60一个，可以发邮件给我<i@laiczhang.com>~~

## 4. aws EC2 日本（已弃用）

价格：15元/月

配置：1H2G （只有8G硬盘，具体带宽官方没有给出

官网定价：<https://aws.amazon.com/cn/lightsail/pricing/>

~~找大佬py交易的，所以才这么便宜（原价10刀/月），当然，想开的同学依然可以找我，我当个中间商，溢价5块出吧。（仅在2020.8之前开机器，过期则不定时翻车）~~

~~2020.6.20，[博客](https://laiczhang.com)已迁移过去，白天速度不错，晚上慢得ssh都略显费劲233333。~~

~~只用两个月，过了就计划迁移到DO或者VU上去了。~~

## 5. hostmem 美国（不推荐）

并发稍微大一点（17ce测试网速）就要么宕机要么直接显示”Attack Internet“，然后给停了。需要发工单说明情况才给解封，同价位能买其他的机器就不要买这个了。

完全不适合建站，尤其是wordpress之类的程序，虽然号称是大陆优化了，但是我优化了很多东西（包括不限于静态文件放国内cdn，图片放国内图床，预加载，缓存等等），结果打开速度依然感人。不过100M带宽，下载国外的东西确实相当快。

总结：买了就只有练练Linux命令，不然建议吃灰。只有硬盘大一点，看情况存点什么不重要的东西还行吧。

价格：20美元/半年

配置：2H2G240G

国人商家，官网<https://www.hostmem.com/>

据说是大陆优化线路，但是个人体验速度相当一般。

目前无货。可以先注册，有货的时候再下单。

~~国庆活动款，打折后比国内学生机还便宜，适合用来上手Linux。~~

~~带aff注册链接：<https://www.hostmem.com/?ref=190502>~~

~~2020国庆活动：经典云77折，折扣码 ”23OFF"，折后10刀一年；动态云6折， 折扣码 “CND-6“~~

## 6. AWS lightsail

- 由于aws新政策，不再提供免费的ipv4地址，所以lightsail不再是极有性价比的选择。

价格：3.5美元/月

配置：1H0.5G20G

用来看好看的东西的，感觉还行。

- [【简单测评】aws新加坡lightsail】](./aws-singapore-lightsail-simple-evaluation/)
- [【简单测评】aws日本lightsail](./aws-japan-lightsail-simple-evaluation/)

## 7. Do Droplets

性能一般，网络一般，在有学生包的前提下可以低配免费用一年。

![基础款定价](https://cdn.zyha.cn/blog/20220809200103.png?x-oss-process=style/blog)

- [【简单测评】do新加坡droplets](./do-singapore-droplets-simple-evaluation/)

## 8. 阿里云99/年活动机

一分钱，一分货。

[【简单测评】ali成都轻量云年付99元](./ali-chengdu-light-year-pay-99/)

## 9. Oracle Cloud Free Tier

oracle号称永久免费的vps，实际上是玄学开号，玄学开机，玄学封号。

[oracle e2简单测评](./oracle-e2-simple-evaluation/)
