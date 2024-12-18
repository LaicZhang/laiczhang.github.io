---
title: 【简单测评】华为云Flexus
copyright: true
comment: false
mathjax: false
date: 2024-10-19 15:29:03
updated: 2024-10-19 15:29:03
tags:
  - huawei
  - flexus
  - 新加坡
  - vps
categories: vps
keywords: vps, huawei, Flexus, 新加坡, 简单测评
permalink: huawei-singapore-flexus-simple-evaluation/
description: 华为云Flexus新加坡服务器简单测评，配置低，价格便宜，性价比高。
---
既然没花钱，那么配置低也是可以接受的了。

<!-- more -->
## bench.sh

```bash
wget -qO- bench.sh | bash
```

```txt
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : General Purpose Processor
 CPU Cores          : 2 @ 2600.000 MHz
 CPU Cache          : 43008 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 19.6 GB (2.7 GB Used)
 Total Mem          : 456.9 MB (122.7 MB Used)
 System uptime      : 0 days, 0 hour 17 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-22-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS136907 HUAWEI CLOUDS
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 125 MB/s
 I/O Speed(2nd run) : 119 MB/s
 I/O Speed(3rd run) : 121 MB/s
 I/O Speed(average) : 121.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    37.06 Mbps        45.49 Mbps          1.53 ms     
 Amsterdam, NL    40.28 Mbps        49.77 Mbps          158.38 ms   
 Chongqing, CN    0.24 Mbps         0.26 Mbps           102.93 ms   
 Hongkong, CN     44.30 Mbps        57.44 Mbps          35.05 ms    
 Mumbai, IN       53.26 Mbps        51.01 Mbps          60.27 ms    
----------------------------------------------------------------------
 Finished in        : 3 min 28 sec
 Timestamp          : 2024-10-19 15:35:54 CST
----------------------------------------------------------------------
```

## ip质量检测

```bash
bash <(curl -sL IP.Check.Place)
```

```txt
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS136907
组织：                  HUAWEI CLOUDS
坐标：                  103°51′1″E, 1°17′12″N
地图：                  https://check.place/1.2868,103.8503,15,cn
城市：                  N/A, 淡馬錫, 17
使用地：                [SG]新加坡, [AS]亚洲
注册地：                [SG]新加坡
时区：                  Asia/Singapore
IP类型：                 原生IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        机房        机房        机房        机房    
公司类型：     机房        机房        机房    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：  1|低风险
ipapi：                                    4.54%|高风险
AbuseIPDB：    0|低风险
IPQS：                        75|可疑IP
DB-IP：         |低风险
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]
代理：     否      否      否      是      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      是      否      是      否      无      否      否 
服务器：   是      是      是      无      否      否      是      是 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     解锁     屏蔽    仅自制    解锁     解锁     解锁    仅网页  
地区：     [SG]              [SG]     [SG]     [SG]     [SG]     [SG]   
方式：     原生              原生     原生     原生     原生     原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 295   已标记 144   黑名单 0
========================================================================
今日IP检测量：457；总检测量：144539。感谢使用xy系列脚本！ 
报告链接：https://Report.Check.Place/IP/3NTBFOZ2E.svg
```

## 线路测试

线路测试包括去程和回程，去程是针对的上传数据，回程一般是指下载数据也就是 vps 回传数据。因此一个 IP 的路由好坏，看回程才有参考价值，去程反而不是那么重要了。下面就讲讲回程路由：

### 回程测试

回程多地区测试脚本：

```bash
wget -qO- git.io/besttrace | bash
```

```txt
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  10.22.135.65  9.09 ms  *  局域网
 2  11.22.25.18  7.90 ms  AS749  美国, defense.gov
 3  11.22.80.156  8.02 ms  AS749  美国, defense.gov
 4  11.22.80.139  55.82 ms  AS749  美国, defense.gov
 5  11.22.97.33  7.64 ms  AS749  美国, defense.gov
 6  *
 7  *
 8  *
 9  *
10  11.22.97.55  1.86 ms  AS749  美国, defense.gov
11  *
12  *
13  172.16.12.185  38.02 ms  *  局域网
14  121.59.100.249  35.66 ms  AS23764  中国, 香港, chinatelecom.com.cn, 电信
15  203.22.177.149  39.07 ms  *  中国, 香港, chinatelecom.com.cn, 电信
16  CTCN2.CN.HKG.CTGNet (203.22.178.102)  74.17 ms  *  中国, 香港, chinatelecom.com.cn, 电信
17  59.43.182.41  76.83 ms  *  中国, 北京, chinatelecom.com.cn, 电信
18  59.43.19.93  92.03 ms  *  中国, 北京, chinatelecom.com.cn, 电信
19  *
20  *
21  6.254.120.106.static.bjtelecom.net (106.120.254.6)  95.66 ms  AS4847  中国, 北京, chinatelecom.com.cn, 电信
22  bj141-147-210.bjtelecom.net (219.141.147.210)  85.82 ms  AS4847  中国, 北京, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  10.22.135.97  7.61 ms  *  局域网
 2  11.22.25.20  6.74 ms  AS749  美国, defense.gov
 3  11.22.80.144  5.87 ms  AS749  美国, defense.gov
 4  11.22.80.18  55.95 ms  AS749  美国, defense.gov
 5  *
 6  *
 7  *
 8  *
 9  *
10  11.22.97.59  1.48 ms  AS749  美国, defense.gov
11  *
12  *
13  172.16.12.153  38.64 ms  *  局域网
14  121.59.100.49  36.71 ms  AS23764  中国, 香港, chinatelecom.com.cn, 电信
15  CN.HKG.CTGNet (69.194.166.61)  36.12 ms  *  中国, 香港, chinatelecom.com.cn, 电信
16  CTCN2.CN.SHA.CTGNet (203.22.178.86)  64.01 ms  *  中国, 上海, chinatelecom.com.cn, 电信
17  59.43.39.201  58.43 ms  *  中国, 上海, chinatelecom.com.cn, 电信
18  *
19  101.95.88.46  61.88 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信
20  124.74.229.234  61.44 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信
21  ns-pd.online.sh.cn (202.96.209.133)  66.32 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  10.22.135.97  2.89 ms  *  局域网
 2  11.22.25.22  7.11 ms  AS749  美国, defense.gov
 3  11.22.80.152  7.25 ms  AS749  美国, defense.gov
 4  11.22.80.22  44.74 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  *
11  *
12  *
13  172.16.12.185  39.39 ms  http: 403  http: 403
14  121.59.100.249  36.93 ms  http: 403  http: 403
15  CN.HKG.CTGNet (69.194.169.25)  41.57 ms  http: 403  http: 403
16  *
17  *
18  59.43.22.42  53.87 ms  http: 403  http: 403
19  59.43.132.138  51.16 ms  http: 403  http: 403
20  118.104.38.59.broad.fs.gd.dynamic.163data.com.cn (59.38.104.118)  46.15 ms  http: 403  http: 403
21  *
22  58.60.188.222  47.18 ms  http: 403  http: 403

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  10.22.135.97  15.72 ms  http: 403  http: 403
 2  11.22.25.20  5.69 ms  http: 403  http: 403
 3  11.22.80.148  7.56 ms  http: 403  http: 403
 4  11.22.80.137  46.70 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  *
11  *
12  *
13  172.16.12.46  41.60 ms  http: 403  http: 403
14  61.14.203.125  41.54 ms  http: 403  http: 403
15  103.239.176.1  38.04 ms  http: 403  http: 403
16  162.245.124.254  36.66 ms  http: 403  http: 403
17  43.252.86.129  42.21 ms  http: 403  http: 403
18  219.158.20.97  46.47 ms  http: 403  http: 403
19  219.158.3.161  45.51 ms  http: 403  http: 403
20  *
21  *
22  *
23  202.106.50.1  75.05 ms  http: 403  http: 403

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  10.22.135.65  7.51 ms  http: 403  http: 403
 2  11.22.25.16  13.21 ms  http: 403  http: 403
 3  11.22.80.144  6.40 ms  http: 403  http: 403
 4  11.22.80.18  55.25 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  11.22.97.55  1.63 ms  http: 403  http: 403
11  *
12  *
13  *
14  202.77.18.177  44.41 ms  http: 403  http: 403
15  61.14.201.77  40.44 ms  http: 403  http: 403
16  61.14.201.197  37.58 ms  http: 403  http: 403
17  202.77.23.25  37.47 ms  http: 403  http: 403
18  219.158.6.61  48.09 ms  http: 403  http: 403
19  219.158.98.93  49.31 ms  http: 403  http: 403
20  219.158.19.65  43.54 ms  http: 403  http: 403
21  *
22  *
23  112.64.250.202  72.84 ms  http: 403  http: 403
24  210.22.97.1  72.39 ms  http: 403  http: 403

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  10.22.135.97  6.38 ms  http: 403  http: 403
 2  11.22.25.20  5.35 ms  http: 403  http: 403
 3  11.22.80.150  8.72 ms  http: 403  http: 403
 4  11.22.80.143  55.64 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  11.22.97.55  2.18 ms  http: 403  http: 403
11  *
12  *
13  *
14  202.77.18.177  43.50 ms  http: 403  http: 403
15  61.14.201.77  39.36 ms  http: 403  http: 403
16  61.14.201.197  40.17 ms  http: 403  http: 403
17  43.252.86.129  43.15 ms  http: 403  http: 403
18  219.158.6.105  40.05 ms  http: 403  http: 403
19  219.158.4.37  40.85 ms  http: 403  http: 403
20  219.158.3.97  44.22 ms  http: 403  http: 403
21  120.82.0.162  47.46 ms  http: 403  http: 403
22  120.80.144.34  54.96 ms  http: 403  http: 403
23  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  48.03 ms  http: 403  http: 403

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  10.22.135.97  7.60 ms  http: 403  http: 403
 2  11.22.25.20  5.60 ms  http: 403  http: 403
 3  *
 4  *
 5  *
 6  *
 7  *
 8  *
 9  *
10  11.22.97.61  1.92 ms  http: 403  http: 403
11  *
12  *
13  172.16.12.42  35.90 ms  http: 403  http: 403
14  223.119.19.221  36.05 ms  http: 403  http: 403
15  223.120.22.138  78.16 ms  http: 403  http: 403
16  221.183.55.102  73.36 ms  http: 403  http: 403
17  221.183.46.250  75.08 ms  http: 403  http: 403
18  *
19  221.183.46.174  78.52 ms  http: 403  http: 403
20  *
21  cachedns03.bj.chinamobile.com (221.179.155.161)  85.73 ms  http: 403  http: 403

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  10.22.135.97  12.63 ms  http: 403  http: 403
 2  11.22.25.20  5.88 ms  http: 403  http: 403
 3  11.22.80.146  6.92 ms  http: 403  http: 403
 4  11.22.80.20  56.68 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  11.22.97.55  1.64 ms  http: 403  http: 403
11  *
12  *
13  *
14  223.119.19.217  39.46 ms  http: 403  http: 403
15  223.120.3.89  41.50 ms  http: 403  http: 403
16  223.120.22.114  65.55 ms  http: 403  http: 403
17  221.183.89.178  62.31 ms  http: 403  http: 403
18  221.183.89.33  64.44 ms  http: 403  http: 403
19  221.183.89.14  65.44 ms  http: 403  http: 403
20  *
21  *
22  211.136.112.252  71.83 ms  http: 403  http: 403
23  211.136.112.200  71.59 ms  http: 403  http: 403

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  10.22.135.97  16.60 ms  http: 403  http: 403
 2  11.22.25.20  6.14 ms  http: 403  http: 403
 3  11.22.80.144  6.37 ms  http: 403  http: 403
 4  11.22.80.22  55.43 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  *
11  *
12  *
13  172.16.12.46  42.02 ms  http: 403  http: 403
14  223.119.19.221  40.08 ms  http: 403  http: 403
15  223.120.2.2  48.62 ms  http: 403  http: 403
16  221.183.55.58  47.71 ms  http: 403  http: 403
17  221.183.92.21  73.44 ms  http: 403  http: 403
18  *
19  221.183.71.78  76.00 ms  http: 403  http: 403
20  221.183.110.166  71.42 ms  http: 403  http: 403
21  ns6.gd.cnmobile.net (120.196.165.24)  72.76 ms  http: 403  http: 403

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  10.22.135.65  11.24 ms  http: 403  http: 403
 2  11.22.25.16  6.66 ms  http: 403  http: 403
 3  11.22.80.146  6.17 ms  http: 403  http: 403
 4  11.22.80.20  57.94 ms  http: 403  http: 403
 5  *
 6  *
 7  *
 8  *
 9  *
10  11.22.97.61  1.84 ms  http: 403  http: 403
11  *
12  *
13  172.16.12.189  41.23 ms  http: 403  http: 403
14  121.59.100.249  39.24 ms  http: 403  http: 403
15  CN.HKG.CTGNet (69.194.166.153)  40.72 ms  http: 403  http: 403
16  *
17  59.43.39.229  66.31 ms  http: 403  http: 403
18  59.43.159.97  63.57 ms  http: 403  http: 403
19  *
20  202.97.13.94  80.28 ms  http: 403  http: 403
21  *
22  *
23  101.4.117.125  75.16 ms  http: 403  http: 403
24  101.4.118.213  69.58 ms  http: 403  http: 403
25  101.4.112.29  90.37 ms  http: 403  http: 403
26  101.4.117.53  96.00 ms  http: 403  http: 403
27  101.4.116.242  101.08 ms  http: 403  http: 403
28  *
29  *
30  *

----------------------------------------------------------------------
```

### 回程路由

```shell
curl https://raw.githubusercontent.com/zhucaidan/mtr_trace/main/mtr_trace.sh|bash
```

```txt
正在测试,请稍等...
——————————————————————————————

目标:北京电信[219.141.136.12]   回程线路:电信CN2 GIA

目标:北京联通[202.106.50.1]     回程线路:联通169

目标:北京移动[221.179.155.161]  回程线路:移动CMI

目标:上海电信[202.96.209.133]   回程线路:电信CN2 GIA

目标:上海联通[210.22.97.1]      回程线路:联通169

目标:上海移动[211.136.112.200]  回程线路:移动CMI

目标:深圳电信[58.60.188.222]    回程线路:电信CN2 GIA

目标:深圳联通[210.21.196.6]     回程线路:联通169

目标:深圳移动[120.196.165.24]   回程线路:移动CMI


——————————————————————————————
本脚本测试结果为TCP回程路由,非ICMP回程路由 仅供参考,以最新IP段为准 谢谢
```

## ping测试

- 注意，国内厂商的vps默认禁ping，需要在控制台修改安全组打开端口

### 全球ping

![](https://img1.tucang.cc/api/image/show/fdb3458cc20e9f8620642ce5adf76f3c)

### 国内ping

![](https://img1.tucang.cc/api/image/show/edf8cd44efcc6752e3738cf8b71f5121)

## 流媒体解锁测试

```bash
bash <(curl -L -s check.unlock.media)
```

```txt
 [流媒体平台及游戏区域限制测试]

项目地址 https://github.com/lmc999/RegionRestrictionCheck 
BUG 反馈或使用交流可加 TG 群组 https://t.me/gameaccelerate 

 ** 测试时间: Sat Oct 19 04:25:49 PM CST 2024
 ** 版本: 1.0.0


 ** 正在测试 IPv4 解锁情况
--------------------------------
 ** 您的网络为: Huawei Cloud (49.0.*.*)


============[ Multination ]============
 Dazn:                                  Yes (Region: SG)
 Disney+:                               No (IP Banned By Disney+ 1)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: SG)
 Instagram Licensed Audio:              No
 OneTrust Region:                       SG [Unknown]
 iQyi Oversea Region:                   SG
 Bing Region:                           SG (Risky)
 YouTube CDN:                           Singapore
 Netflix Preferred CDN:                 Singapore
 ChatGPT:                               No (Only Available with Web Browser)
 Google Gemini:                         Yes (Region: SGP)
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        SGD
 ---Forum---
 Reddit:                                No
=======================================
==========[ SouthEastAsia ]============
 Viu.com:                               Yes (Region: SG)
 HotStar:                               Failed (Error: REGION ERROR SG_)
 HBO GO Asia:                           Yes (Region: SG)
 SonyLiv:                               Failed (Network Connection)
 B-Global SouthEastAsia:                Yes
 ---SG---
 MeWatch:                               Yes
 ---TH---
 AIS Play:                              No
 trueID:                                No
 B-Global Thailand Only:                No
 ---ID---
 B-Global Indonesia Only:               No
 ---VN---
 B-Global Việt Nam Only:                No
=======================================

 ** 正在测试 IPv6 解锁情况
当前主机不支持 IPv6，跳过...
本次测试已结束，感谢使用此脚本

检测脚本当天运行次数: 6142; 共计运行次数: 14004421
```

## 总结

作为大厂推出的vps，其稳定性是毫无疑问的，但是配置一般只适合特别用途。
