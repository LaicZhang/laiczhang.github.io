---
title: 【简单测评】腾讯云孟买lighthouse
copyright: true
comment: false
mathjax: false
date: 2022-07-13 11:41:12
updated: 2022-07-13 11:41:12
tags:
  - vps
  - 腾讯云
  - 孟买
  - 评测
categories: 简单测评
keywords: 腾讯云,孟买,lighthouse,简单测评,vps
permalink: tencentcloud-mumbai-lighthouse-simple-evaluation/
description: With Hong Kong already sold out for 32 months, let‘s see how this machine is still on sale at half price.
---
在香港已经32一个月都已经卖空的情况下，看看这个还在半价促销的机器如何。

- [腾讯云最新活动-老用户专属 最低1.5折续费折扣券抽奖](https://curl.qcloud.com/fWo0w3FO)
<!--more-->

## Bench.sh

```bash
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-26xx v4
 CPU Cores          : 2 @ 2394.454 MHz
 CPU Cache          : 4096 KB
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-26xx v4
 CPU Cores          : 2 @ 2394.454 MHz
 CPU Cache          : 4096 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Disabled
 Total Disk         : 29.4 GB (4.1 GB Used)
 Total Mem          : 2.0 GB (236.5 MB Used)
 Total Swap         : 1.0 GB (0 Used)
 System uptime      : 0 days, 0 hour 36 min
 Load average       : 0.04, 0.05, 0.05
 OS                 : CentOS Linux release 7.9.2009 (Core)
 Arch               : x86_64 (64 Bit)
 Kernel             : 3.10.0-1160.66.1.el7.x86_64
 TCP CC             : cubic
 Virtualization     : KVM
 Organization       : AS132203 Tencent Building, Kejizhongyi Avenue
 Location           : Mumbai / IN
 Region             : Maharashtra
----------------------------------------------------------------------

 I/O Speed(1st run) : 299 MB/s
 I/O Speed(2nd run) : 282 MB/s
 I/O Speed(3rd run) : 283 MB/s
 I/O Speed(average) : 288.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    30.57 Mbps        100.69 Mbps         0.71 ms     
 Los Angeles, US  24.68 Mbps        103.68 Mbps         235.88 ms   
 Dallas, US       30.69 Mbps        109.22 Mbps         297.60 ms   
 Montreal, CA     29.01 Mbps        98.33 Mbps          305.29 ms   
 Paris, FR        34.42 Mbps        110.62 Mbps         166.00 ms   
 Amsterdam, NL    32.67 Mbps        107.52 Mbps         175.62 ms   
 Shanghai, CN     30.93 Mbps        120.36 Mbps         120.47 ms   
 Nanjing, CN      32.17 Mbps        110.61 Mbps         299.44 ms   
 Hongkong, CN     31.14 Mbps        115.06 Mbps         85.17 ms    
 Seoul, KR        31.43 Mbps        111.23 Mbps         132.73 ms   
 Singapore, SG    31.81 Mbps        108.60 Mbps         220.17 ms   
 Tokyo, JP        33.56 Mbps        98.93 Mbps          120.08 ms   
----------------------------------------------------------------------
 Finished in        : 6 min 28 sec
 Timestamp          : 2022-07-13 11:58:59 CST
----------------------------------------------------------------------
```

## 回程测试

```bash
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  11.38.140.130  5.68 ms  AS749  美国, defense.gov
 2  11.38.188.228  7.08 ms  AS749  美国, defense.gov
 3  10.196.56.5  6.12 ms  *  局域网
 4  10.196.93.57  25.73 ms  *  局域网
 5  10.162.8.37  5.05 ms  *  局域网
 6  115.114.89.213.static-Mumbai.vsnl.net.in (115.114.89.213)  1.01 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-4-2.tcore2.cxr-chennai.as6453.net (180.87.37.1)  25.05 ms  AS6453  印度, 泰米尔纳德邦, 金奈, tatacommunications.com
 9  *
10  if-ae-44-3.tcore1.tv2-tokyo.as6453.net (180.87.181.244)  227.69 ms  AS6453  日本, 东京都, 东京, tatacommunications.com
11  if-ae-2-2.tcore1.tv2-tokyo.as6453.net (180.87.180.1)  224.52 ms  AS6453  日本, 东京都, 东京, tatacommunications.com
12  *
13  if-ae-6-2.tcore1.sv1-santaclara.as6453.net (63.243.250.56)  227.82 ms  AS6453  美国, 加利福尼亚州, 圣克拉拉, tatacommunications.com
14  *
15  if-ae-18-2.tcore1.sqn-sanjose.as6453.net (63.243.205.72)  226.87 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
16  if-ae-1-2.tcore2.sqn-sanjose.as6453.net (63.243.205.2)  223.92 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
17  218.30.54.244  225.81 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
18  *
19  *
20  *
21  *
22  *
23  *
24  bj141-147-210.bjtelecom.net (219.141.147.210)  286.82 ms  AS4847  中国, 北京, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  11.38.140.130  11.06 ms  AS749  美国, defense.gov
 2  11.38.188.230  6.15 ms  AS749  美国, defense.gov
 3  10.196.55.245  5.38 ms  *  局域网
 4  10.196.6.73  1.37 ms  *  局域网
 5  10.162.5.159  1.00 ms  *  局域网
 6  115.114.89.165.static-Mumbai.vsnl.net.in (115.114.89.165)  1.57 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-4-2.tcore2.cxr-chennai.as6453.net (180.87.37.1)  21.89 ms  AS6453  印度, 泰米尔纳德邦, 金奈, tatacommunications.com
 9  *
10  if-ae-44-3.tcore1.tv2-tokyo.as6453.net (180.87.181.244)  230.98 ms  AS6453  日本, 东京都, 东京, tatacommunications.com
11  if-ae-2-2.tcore1.tv2-tokyo.as6453.net (180.87.180.1)  231.49 ms  AS6453  日本, 东京都, 东京, tatacommunications.com
12  *
13  if-ae-5-3.tcore2.sv1-santaclara.as6453.net (209.58.86.68)  226.90 ms  AS6453  美国, 加利福尼亚州, 圣克拉拉, tatacommunications.com
14  *
15  if-ae-1-2.tcore2.sqn-sanjose.as6453.net (63.243.205.2)  227.50 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
16  218.30.54.244  234.93 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
17  202.97.27.209  272.07 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
18  *
19  *
20  61.152.26.49  277.53 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信
21  180.169.255.122  254.99 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信
22  *
23  ns-pd.online.sh.cn (202.96.209.133)  342.85 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  11.38.140.129  5.76 ms  AS749  美国, defense.gov
 2  11.38.188.130  8.43 ms  AS749  美国, defense.gov
 3  10.196.55.241  7.94 ms  *  局域网
 4  10.196.93.53  1.71 ms  *  局域网
 5  10.162.8.37  1.37 ms  *  局域网
 6  115.114.89.213.static-Mumbai.vsnl.net.in (115.114.89.213)  1.04 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-4-2.tcore2.cxr-chennai.as6453.net (180.87.37.1)  17.16 ms  AS6453  印度, 泰米尔纳德邦, 金奈, tatacommunications.com
 9  *
10  if-ae-44-2.tcore1.tv2-tokyo.as6453.net (180.87.181.242)  219.93 ms  AS6453  日本, 东京都, 东京, tatacommunications.com
11  if-ae-2-2.tcore1.tv2-tokyo.as6453.net (180.87.180.1)  218.55 ms  AS6453  日本, 东京都, 东京, tatacommunications.com
12  if-et-23-2.hcore1.kv8-chiba.as6453.net (180.87.180.13)  119.49 ms  AS6453  日本, 千叶县, 千叶市, tatacommunications.com
13  if-ae-5-3.tcore2.sv1-santaclara.as6453.net (209.58.86.68)  224.41 ms  AS6453  美国, 加利福尼亚州, 圣克拉拉, tatacommunications.com
14  *
15  if-ae-1-2.tcore2.sqn-sanjose.as6453.net (63.243.205.2)  225.94 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
16  218.30.54.244  230.27 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
17  *
18  *
19  *
20  202.105.158.41  289.98 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
21  *
22  *
23  *
24  *
25  58.60.188.222  293.08 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  11.38.140.130  5.02 ms  AS749  美国, defense.gov
 2  11.38.189.164  9.66 ms  AS749  美国, defense.gov
 3  10.196.56.13  5.55 ms  *  局域网
 4  10.196.6.81  5.20 ms  *  局域网
 5  10.162.5.159  1.16 ms  *  局域网
 6  115.114.89.165.static-Mumbai.vsnl.net.in (115.114.89.165)  1.63 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-20-632.tcore1.svq-singapore.as6453.net (120.29.215.76)  57.84 ms  AS6453  新加坡, tatacommunications.com
 9  120.29.215.31  56.07 ms  AS6453  新加坡, tatacommunications.com
10  219.158.17.185  102.65 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
11  219.158.115.157  131.23 ms  AS4837  中国, 北京, chinaunicom.com, 联通
12  219.158.9.226  128.63 ms  AS4837  中国, 北京, chinaunicom.com, 联通
13  *
14  125.33.186.42  131.78 ms  AS4808  中国, 北京, chinaunicom.com, 联通
15  202.106.50.1  137.26 ms  AS4808  中国, 北京, chinaunicom.com, 联通

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  11.38.140.129  3.64 ms  AS749  美国, defense.gov
 2  11.38.188.130  5.55 ms  AS749  美国, defense.gov
 3  10.196.55.241  4.81 ms  *  局域网
 4  10.196.6.73  1.36 ms  *  局域网
 5  10.162.5.159  0.86 ms  *  局域网
 6  115.114.89.165.static-Mumbai.vsnl.net.in (115.114.89.165)  1.53 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-20-632.tcore1.svq-singapore.as6453.net (120.29.215.76)  60.22 ms  AS6453  新加坡, tatacommunications.com
 9  *
10  219.158.17.185  101.97 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
11  219.158.115.125  127.46 ms  AS4837  中国, 上海, chinaunicom.com, 联通
12  219.158.6.185  128.92 ms  AS4837  中国, 上海, chinaunicom.com, 联通
13  219.158.7.125  126.22 ms  AS4837  中国, 上海, chinaunicom.com, 联通
14  *
15  139.226.201.146  126.10 ms  AS17621  中国, 上海, chinaunicom.com, 联通
16  210.22.97.1  125.93 ms  AS17621  中国, 上海, chinaunicom.com, 联通

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  11.38.140.129  3.81 ms  AS749  美国, defense.gov
 2  11.38.188.128  6.50 ms  AS749  美国, defense.gov
 3  10.196.56.1  5.82 ms  *  局域网
 4  10.196.6.81  1.37 ms  *  局域网
 5  10.162.5.159  1.03 ms  *  局域网
 6  115.114.89.165.static-Mumbai.vsnl.net.in (115.114.89.165)  1.61 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-20-632.tcore1.svq-singapore.as6453.net (120.29.215.76)  57.84 ms  AS6453  新加坡, tatacommunications.com
 9  219.158.24.245  57.94 ms  AS4837  中国, chinaunicom.com, 联通
10  219.158.100.29  95.41 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
11  219.158.103.33  100.01 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
12  *
13  *
14  120.80.147.254  104.96 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
15  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  106.78 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  11.38.140.130  5.44 ms  AS749  美国, defense.gov
 2  11.38.188.134  8.22 ms  AS749  美国, defense.gov
 3  10.196.55.241  3.79 ms  *  局域网
 4  10.196.6.73  5.64 ms  *  局域网
 5  10.162.5.159  0.87 ms  *  局域网
 6  dsl-tn-dynamic-165.210.22.125.airtelbroadband.in (125.22.210.165)  1.48 ms  AS9498  印度, 马哈拉施特拉邦, 孟买, airtel.com
 7  116.119.109.122  120.45 ms  AS9498  印度, airtel.com
 8  ldn-b7-link.ip.twelve99.net (62.115.175.230)  239.37 ms  AS1299  英国, 伦敦, telia.com
 9  ldn-bb1-link.ip.twelve99.net (62.115.138.168)  248.93 ms  AS1299  英国, 伦敦, telia.com
10  nyk-bb2-link.ip.twelve99.net (62.115.113.20)  259.90 ms  AS1299  美国, 纽约州, 纽约, telia.com
11  sjo-b23-link.ip.twelve99.net (62.115.119.229)  242.36 ms  AS1299  美国, 加利福尼亚州, 圣何塞, telia.com
12  chinamobile-ic-342121-sjo-b21c.telia.net (62.115.171.215)  249.84 ms  AS1299  美国, 加利福尼亚州, 圣何塞, telia.com
13  223.120.6.69  265.56 ms  AS58453  美国, 加利福尼亚州, 圣何塞, chinamobile.com, 移动
14  223.120.13.146  326.70 ms  AS58453  中国, 北京, chinamobile.com, 移动
15  221.183.55.114  329.84 ms  AS9808  中国, 北京, chinamobile.com, 移动
16  221.183.25.201  344.92 ms  AS9808  中国, 北京, chinamobile.com, 移动
17  221.183.89.118  312.68 ms  AS9808  中国, 北京, chinamobile.com, 移动
18  *
19  *
20  cachedns03.bj.chinamobile.com (221.179.155.161)  293.75 ms  AS56048  中国, 北京, chinamobile.com, 移动

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  11.38.140.130  3.88 ms  AS749  美国, defense.gov
 2  11.38.189.164  4.45 ms  AS749  美国, defense.gov
 3  10.196.55.253  2.23 ms  *  局域网
 4  10.196.6.73  1.17 ms  *  局域网
 5  10.162.5.159  0.92 ms  *  局域网
 6  dsl-tn-dynamic-165.210.22.125.airtelbroadband.in (125.22.210.165)  1.36 ms  AS9498  印度, 马哈拉施特拉邦, 孟买, airtel.com
 7  182.79.134.112  99.51 ms  AS9498  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, airtel.com
 8  *
 9  compagnie_ibm_france.equinix-ix.fr (195.42.145.161)  197.76 ms  AS9009  法国, 法兰西岛大区, 巴黎, equinix.com
10  223.120.10.29  206.33 ms  AS58453  英国, 伦敦, chinamobile.com, 移动
11  223.120.15.26  271.85 ms  AS58453  中国, 上海, chinamobile.com, 移动
12  221.183.55.34  260.97 ms  AS9808  中国, 上海, chinamobile.com, 移动
13  221.183.25.193  265.34 ms  AS9808  中国, 上海, chinamobile.com, 移动
14  221.176.22.33  291.64 ms  AS9808  中国, 上海, chinamobile.com, 移动
15  111.24.4.81  252.17 ms  AS9808  中国, 上海, chinamobile.com, 移动
16  *
17  221.181.125.101  248.60 ms  AS24400  中国, 上海, chinamobile.com, 移动
18  211.136.190.234  254.28 ms  AS24400  中国, 上海, chinamobile.com, 移动
19  211.136.112.252  298.71 ms  AS24400  中国, 上海, chinamobile.com, 移动
20  211.136.112.200  255.26 ms  AS24400  中国, 上海, chinamobile.com, 移动

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  11.38.140.129  6.75 ms  AS749  美国, defense.gov
 2  11.38.189.64  7.24 ms  AS749  美国, defense.gov
 3  10.196.55.249  5.05 ms  *  局域网
 4  10.196.6.73  1.66 ms  *  局域网
 5  10.162.5.159  0.96 ms  *  局域网
 6  dsl-tn-dynamic-165.210.22.125.airtelbroadband.in (125.22.210.165)  2.47 ms  AS9498  印度, 马哈拉施特拉邦, 孟买, airtel.com
 7  116.119.109.122  121.46 ms  AS9498  印度, airtel.com
 8  ldn-b3-link.telia.net (62.115.187.116)  256.39 ms  AS1299  英国, 伦敦, telia.com
 9  ldn-bb1-link.ip.twelve99.net (62.115.120.74)  240.39 ms  AS1299  英国, 伦敦, telia.com
10  ldn-b1-link.ip.twelve99.net (62.115.121.27)  239.05 ms  AS1299  英国, 伦敦, telia.com
11  chinamobile-ic311724-ldn-b1.ip.twelve99-cust.net (62.115.12.242)  255.93 ms  AS1299  英国, 伦敦, telia.com
12  223.120.15.58  247.84 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
13  221.183.55.66  207.11 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
14  221.176.24.57  209.58 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
15  221.176.24.101  208.86 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
16  111.24.5.1  261.31 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
17  221.183.71.74  254.83 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
18  *
19  ns6.gd.cnmobile.net (120.196.165.24)  266.25 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  11.38.140.129  3.82 ms  AS749  美国, defense.gov
 2  11.38.189.160  5.80 ms  AS749  美国, defense.gov
 3  10.196.55.253  2.14 ms  *  局域网
 4  10.196.6.73  2.19 ms  *  局域网
 5  10.162.5.159  23.99 ms  *  局域网
 6  115.114.89.165.static-Mumbai.vsnl.net.in (115.114.89.165)  1.81 ms  AS4755  印度, 马哈拉施特拉邦, 孟买, tatacommunications.com
 7  *
 8  ix-ae-4-2.tcore1.cxr-chennai.as6453.net (180.87.36.9)  21.88 ms  AS6453  印度, 泰米尔纳德邦, 金奈, tatacommunications.com
 9  *
10  63.217.24.61  57.47 ms  AS3491,AS31713  新加坡, pccw.com
11  Hu-0-0-0-11.clbr02.hkg04.pccwbtn.net (63.218.114.82)  93.20 ms  AS3491,AS31713  中国, 香港, pccw.com
12  tsingHua.hu0-0-0-9.clbr02.hkg04.pccwbtn.net (63.218.115.14)  89.70 ms  AS3491,AS31713  中国, 香港, pccw.com
13  101.4.114.181  127.81 ms  AS4538  中国, 北京, edu.cn, 教育网
14  *
15  101.4.118.213  126.40 ms  AS4538  中国, 北京, edu.cn, 教育网
16  101.4.112.14  142.65 ms  AS4538  中国, 陕西, 西安, edu.cn, 教育网
17  101.4.112.18  152.12 ms  AS4538  中国, 四川, 成都, edu.cn, 教育网
18  101.4.116.158  154.19 ms  AS4538  中国, 四川, 成都, edu.cn, 教育网
19  *
20  *
21  *
22  *
23  202.112.14.151  151.84 ms  AS24355  中国, 四川, 成都, edu.cn, 教育网

----------------------------------------------------------------------
```

## 回程线路

```bash
正在测试,请稍等...
——————————————————————————————

目标:北京电信[219.141.136.12]   回程线路:电信163

目标:北京联通[202.106.50.1]     回程线路:联通169

目标:北京移动[221.179.155.161]  回程线路:移动CMI

目标:上海电信[202.96.209.133]   回程线路:电信163

目标:上海联通[210.22.97.1]      回程线路:联通169

目标:上海移动[211.136.112.200]  回程线路:移动CMI

目标:深圳电信[58.60.188.222]    回程线路:电信163

目标:深圳联通[210.21.196.6]     回程线路:联通AS4837

目标:深圳移动[120.196.165.24]   回程线路:移动cmi


——————————————————————————————
本脚本测试结果为TCP回程路由,非ICMP回程路由 仅供参考 谢谢
```

## ping测试

### 全球ping测试

![2022-07-25 23:36:29](https://pic.rmb.bdstatic.com/bjh/805d90a68173179cf349493e64a4a31e.png)

### 国内ping测试

![2022-07-25 23:24:10](https://pic.rmb.bdstatic.com/bjh/a26a114fd190517e1437fa0031a9f2b1.png)

## 流媒体解锁
  
```bash
 ** 测试时间: Wed Jul 13 12:08:16 CST 2022

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Tencent cloud computing (101.32.*.*) 


============[ Multination ]============
 Dazn:                                  No
 HotStar:                               Yes (Region: IN)
 Disney+:                               ->
 Disney+:                               Available For [Disney+ IN] Soon
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: IN)
 Amazon Prime Video:                    Yes (Region: IN)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 Viu.com:                               No
 YouTube CDN:                           Mumbai (Bombay) 
 Netflix Preferred CDN:                 Associated with [Airtel] in [Mumbai (Bombay) ]
 Spotify Registration:                  No
 Steam Currency:                        INR
=======================================
==============[ Taiwan ]===============
 KKTV:                                  No
 LiTV:                                  No
 MyVideo:                               No
 4GTV.TV:                               No
 LineTV.TW:                             No
 Hami Video:                            No
 CatchPlay+:                            No
 HBO GO Asia:                           No
 Bahamut Anime:                         No
 Eleven Sports TW:                      No
 Bilibili Taiwan Only:                  No
=======================================
=============[ Hong Kong ]=============
 Now E:                                 No
 Viu.TV:                                No
 MyTVSuper:                             No
 HBO GO Asia:                           No
 BiliBili Hongkong/Macau/Taiwan:        No
=======================================
===============[ Japan ]===============
 DMM:                                   No
 Abema.TV:                              No
 Niconico:                              No
 music.jp:                              No
 Telasa:                                Yes
 Paravi:                                No
 U-NEXT:                                No
 Hulu Japan:                            Yes
 TVer:                                  Yes
 GYAO!:                                 No
 WOWOW:                                 No
 VideoMarket:                           No
 FOD(Fuji TV):                          No
 Radiko:                                No
 Karaoke@DAM:                           No
 J:com On Demand:                       No
 ---Game---
 Kancolle Japan:                        No
 Pretty Derby Japan:                    Failed (Network Connection)
 Konosuba Fantastic Days:               No
 Princess Connect Re:Dive Japan:        Failed (Network Connection)
 World Flipper Japan:                   Failed (Network Connection)
 Project Sekai: Colorful Stage:         No
=======================================
===========[ North America ]===========
 FOX:                                   No
 Hulu:                                  Failed
 ESPN+:[Sponsored by Jam]               No
 Epix:                                  No
 Starz:                                 No
 HBO Now:                               No
 HBO Max:                               No
 BritBox:                               Yes
 NBA TV:                                Yes
 Fubo TV:                               Failed (Network Connection)
 Sling TV:                              No
 Pluto TV:                              Yes
 Acorn TV:                              No
 SHOWTIME:                              Yes
 AT&T NOW:                              No
 encoreTVB:                             No
 CineMax Go:                            No
 Funimation:                            No
 Discovery+:                            No
 Paramount+:                            No
 Peacock TV:                            No
 ---CA---
 CBC Gem:                               No
 Crave:                                 No
=======================================
===========[ South America ]===========
 Star+:                                 No
 HBO Max:                               No
 DirecTV Go:                            Yes (Region: REGISTRARSE)
 Funimation:                            No
=======================================
===============[ Europe ]==============
 Rakuten TV:                            Yes
 Funimation:                            No
 HBO Nordic:                            Failed (Network Connection)
 HBO GO Europe:                         Failed (Network Connection)
 ---GB---
 Sky Go:                                Yes
 BritBox:                               Yes
 ITV Hub:                               No
 Channel 4:                             No
 Channel 5:                             No
 BBC iPLAYER:                           No
 Discovery+ UK:                         No
 ---FR---
 Salto:                                 No
 Canal+:                                No
 Molotov:                               No
 ---DE---
 Joyn:                                  No
 Sky:                                   No
 ZDF:                                   No
 ---NL---
 NLZIET:                                No
 videoland:                             No
 NPO Start Plus:                        No
 ---ES---
 HBO Spain:                             Failed (Network Connection)
 PANTAYA:                               No
 ---IT---
 Rai Play:                              No
 ---RU---
 Amediateka:                            Yes
 ---PT---
 HBO Portugal:                          Failed (Network Connection)
=======================================
==============[ Oceania ]==============
 NBA TV:                                Yes
 Acorn TV:                              No
 SHOWTIME:                              Yes
 BritBox:                               Yes
 Funimation:                            No
 Paramount+:                            No
 ---AU---
 Stan:                                  Yes
 Binge:                                 No
 Docplay:                               No
 Channel 7:                             ->curl: no URL specified!
curl: try 'curl --help' or 'curl --manual' for more information
 Channel 7:                             Failed (Network Connection)
 Channel 9:                             No
 Channel 10:                            No
 ABC iView:                             No
 Kayo Sports:                           No
 Optus Sports:                          No
 SBS on Demand:                         No
 ---NZ---
 Neon TV:                               No
 SkyGo NZ:                              No
 ThreeNow:                              No
 Maori TV:                              No
=======================================
```

## 总结

性能都还行，但是网络属实一般，fq就别想了，建站也只建议面向南亚用户建站，面向其他地区用户建议套cdn。
