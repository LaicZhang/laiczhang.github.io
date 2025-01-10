---
title: 【简单测评】do纽约droplets
copyright: true
comment: false
mathjax: false
date: 2022-08-16 20:17:05
updated: 2022-08-16 20:17:05
tags:
  - do
  - vps
  - 纽约
  - 评测
categories: vps
keywords: vps, do, 测评, 简单测评, test
permalink: do-new-york-droplets-simple-evaluation/
description:
---
测试下来好像比新加坡的网络还好，就很奇怪。

<!-- more -->
## bench.sh

```bash
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : DO-Premium-Intel
 CPU Cores          : 2 @ 1999.999 MHz
 CPU Cache          : 4096 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 77.5 GB (1.5 GB Used)
 Total Mem          : 3.8 GB (169.9 MB Used)
 System uptime      : 0 days, 0 hour 4 min
 Load average       : 0.07, 0.23, 0.13
 OS                 : Ubuntu 20.04.4 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-122-generic
 TCP CC             : cubic
 Virtualization     : KVM
 Organization       : AS14061 DigitalOcean, LLC
 Location           : North Bergen / US
 Region             : New Jersey
----------------------------------------------------------------------
 I/O Speed(1st run) : 443 MB/s
 I/O Speed(2nd run) : 1.1 GB/s
 I/O Speed(3rd run) : 1.1 GB/s
 I/O Speed(average) : 898.6 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    1994.45 Mbps      7637.26 Mbps        1.06 ms     
 Los Angeles, US  1397.78 Mbps      9191.40 Mbps        64.30 ms    
 Dallas, US       1958.27 Mbps      9188.60 Mbps        36.35 ms    
 Montreal, CA     415.51 Mbps       815.34 Mbps         9.27 ms     
 Paris, FR        1301.83 Mbps      7303.31 Mbps        82.20 ms    
 Amsterdam, NL    647.26 Mbps       5559.27 Mbps        134.60 ms   
 Shanghai, CN     55.69 Mbps        2739.02 Mbps        237.87 ms   
 Nanjing, CN      299.77 Mbps       3399.19 Mbps        206.86 ms   
 Seoul, KR        447.75 Mbps       700.19 Mbps         183.90 ms   
 Singapore, SG    389.66 Mbps       85.70 Mbps          224.92 ms   
 Tokyo, JP        350.11 Mbps       4894.35 Mbps        163.58 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 29 sec
 Timestamp          : 2022-08-16 12:25:15 UTC
----------------------------------------------------------------------
```

## 综合测试

```bash
LemonBench Server Test Tookit 20201005 Intl BetaVersion (C)iLemonrain. All Rights Reserved.
==========================================================================================
 
 [Info] Bench Start Time: 2022-08-16 12:42:09
 [Info] Test Mode: Fast Mode
 

 -> System Information

 OS Release:            Ubuntu 20.04.4 LTS (Focal Fossa)  (x86_64)
 CPU Model:             DO-Premium-Intel  2.00 GHz
 CPU Cache Size:        4096 KB
 CPU Number:            2 vCPU
 VirtReady:             Yes (Nested Virtualization)
 Virt Type:             KVM
 Memory Usage:          254.08 MB / 3.84 GB
 Swap Usage:            [ No Swapfile/Swap Partition ]
 Boot Device:           /dev/vda1
 Disk Usage:            1.70 GB / 81.11 GB
 CPU Usage:             0.0% used, 0.0% iowait, 0.0% steal
 Load (1/5/15min):      0.28 0.10 0.10 
 Uptime:                0 Days, 0 Hours, 27 Minutes, 5 Seconds
 Kernel Version:        5.4.0-122-generic
 Network CC Method:     cubic + fq_codel

 -> Network Infomation

 
 -> Media Unlock Test 
 
 HBO Now:                               Yes
 Bahamut Anime:                         Failed (due to parse fail)
 Abema.TV:                              No
 Princess Connect Re:Dive Japan:        No
 BBC:                                   No
 BiliBili China Mainland Only:          No
 BiliBili Hongkong/Macau/Taiwan:        No
 Bilibili Taiwan Only:                  No

 -> CPU Performance Test (Fast Mode, 1-Pass @ 5sec)

 1 Thread Test:                 2056 Scores
 2 Threads Test:                4101 Scores

 -> Memory Performance Test (Fast Mode, 1-Pass @ 5sec)

 1 Thread - Read Test :         17635.67 MB/s
 1 Thread - Write Test:         12333.82 MB/s

 -> Disk Speed Test (4K Block/1M Block, Direct Mode)

 Test Name              Write Speed                             Read Speed
 100MB-4K Block         22.7 MB/s (5530 IOPS, 4.63s)            44.0 MB/s (10733 IOPS, 2.39s)
 1GB-1M Block           334 MB/s (318 IOPS, 3.14s)              1.8 GB/s (1705 IOPS, 0.59s)

 -> Speedtest.net Network Speed Test

 Node Name                      Upload Speed    Download Speed  Ping Latency    Server Name
 Speedtest Default              237.61 MB/s     1092.92 MB/s    1.71 ms         new york mega (United States New York, NY)
 China, Beijing CU              Fail: Timeout Exceeded after 60 seconds
 China, Shanghai CT             0.13 MB/s       30.04 MB/s      201.30 ms       China Telecom (China Shanghai)
 China, Hangzhou CM             Fail: Timeout Exceeded after 60 seconds

==========================================================================================
 
 [Info] Bench Finish Time: 2022-08-16 12:43:46
 [Info] Time Elapsed: 97 seconds
 
[Info] Please wait, collecting results ...
[Info] Generating Report ...
[Info] Saving local Report ...
[Info] Generating Report URL ...
[Success] Report Generate Success！Please save the follwing link:
[Info] Report URL: https://paste.ubuntu.com/p/CPFKpcJhSW/
```

### 回程测试

```bash
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.156  0.87 ms  *  LAN Address
 3  138.197.248.88  1.37 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.110  0.55 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  ae1.3505.edge9.SanJose1.level3.net (4.69.219.61)  68.85 ms  AS3356  United States, California, San Jose, level3.com
 7  4.15.125.54  70.53 ms  AS3356  United States, California, San Jose, level3.com
 8  *
 9  *
10  *
11  *
12  *
13  2.254.120.106.static.bjtelecom.net (106.120.254.2)  214.99 ms  AS4847  China, Beijing, ChinaTelecom
14  bj141-147-210.bjtelecom.net (219.141.147.210)  219.83 ms  AS4847  China, Beijing, ChinaTelecom

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.156  0.57 ms  *  LAN Address
 3  138.197.248.76  1.30 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.104  0.45 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  ae1.3505.edge9.SanJose1.level3.net (4.69.219.61)  68.16 ms  AS3356  United States, California, San Jose, level3.com
 7  4.15.125.54  70.89 ms  AS3356  United States, California, San Jose, level3.com
 8  *
 9  202.97.12.193  236.00 ms  AS4134  China, Shanghai, ChinaTelecom
10  202.97.49.33  212.57 ms  AS4134  China, Shanghai, ChinaTelecom
11  101.95.88.97  221.40 ms  AS4812  China, Shanghai, ChinaTelecom
12  124.74.229.234  210.49 ms  AS4812  China, Shanghai, ChinaTelecom
13  ns-pd.online.sh.cn (202.96.209.133)  213.56 ms  AS4812  China, Shanghai, ChinaTelecom

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.166  0.60 ms  *  LAN Address
 3  138.197.248.86  0.82 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.108  0.86 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  ae1.3505.edge9.SanJose1.level3.net (4.69.219.61)  68.26 ms  AS3356  United States, California, San Jose, level3.com
 7  4.15.125.54  69.79 ms  AS3356  United States, California, San Jose, level3.com
 8  202.97.27.241  218.07 ms  AS4134  China, Guangdong, Guangzhou, ChinaTelecom
 9  *
10  *
11  14.147.127.6  232.41 ms  AS134774  China, Guangdong, Shenzhen, ChinaTelecom
12  *
13  58.60.188.222  223.47 ms  AS4134  China, Guangdong, Shenzhen, ChinaTelecom

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.154  0.47 ms  *  LAN Address
 3  138.197.248.78  0.90 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.112  0.43 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  *
 7  CHINA-UNICO.ear1.LosAngeles6.Level3.net (4.26.2.118)  73.91 ms  AS3356  United States, California, Los Angeles, level3.com
 8  219.158.103.1  282.06 ms  AS4837  China, Beijing, ChinaUnicom
 9  219.158.3.114  246.47 ms  AS4837  China, Beijing, ChinaUnicom
10  219.158.9.218  249.57 ms  AS4837  China, Beijing, ChinaUnicom
11  *
12  124.65.194.26  251.90 ms  AS4808  China, Beijing, ChinaUnicom
13  202.106.50.1  247.29 ms  AS4808  China, Beijing, ChinaUnicom

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.166  1.17 ms  *  LAN Address
 3  138.197.248.82  0.92 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.106  0.50 ms  *  United States, New York, New York City, digitalocean.com
 5  lag-103.ear4.Newark1.Level3.net (4.14.218.29)  1.72 ms  AS3356  United States, New Jersey, Newark, level3.com
 6  4.69.209.165  68.43 ms  AS3356  United States, California, San Jose, level3.com
 7  CHINA-UNICO.edge1.SanJose3.Level3.net (4.53.209.78)  224.88 ms  AS3356  United States, California, San Jose, level3.com
 8  219.158.116.253  265.41 ms  AS4837  China, Shanghai, ChinaUnicom
 9  219.158.113.138  279.37 ms  AS4837  China, Shanghai, ChinaUnicom
10  219.158.113.101  235.80 ms  AS4837  China, Shanghai, ChinaUnicom
11  *
12  139.226.201.146  237.81 ms  AS17621  China, Shanghai, ChinaUnicom
13  210.22.97.1  248.50 ms  AS17621  China, Shanghai, ChinaUnicom

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.156  0.40 ms  *  LAN Address
 3  138.197.248.84  1.32 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.116  0.50 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  ae4.31.edge1.LosAngeles6.level3.net (4.69.153.129)  64.78 ms  AS3356  United States, California, Los Angeles, level3.com
 7  CHINA-NETCO.edge1.LosAngeles6.Level3.net (4.26.0.66)  109.47 ms  AS3356  United States, California, Los Angeles, level3.com
 8  219.158.97.209  272.08 ms  AS4837  China, Guangdong, Guangzhou, ChinaUnicom
 9  219.158.97.26  274.42 ms  AS4837  China, Guangdong, Guangzhou, ChinaUnicom
10  *
11  221.4.0.126  267.47 ms  AS17816  China, Guangdong, Shenzhen, ChinaUnicom
12  120.80.144.34  261.54 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom
13  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  269.99 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.154  0.46 ms  *  LAN Address
 3  138.197.248.86  0.94 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.116  0.69 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  4.69.219.210  93.94 ms  AS3356  United States, Washington, Seattle, level3.com
 7  ChinaMobile-level3-Seattle1.Level3.net (4.68.39.222)  73.42 ms  AS3356  United States, Washington, Seattle, level3.com
 8  223.120.6.53  74.11 ms  AS58453  United States, Washington, Seattle, ChinaMobile
 9  223.120.22.17  248.36 ms  AS58453  China, Beijing, ChinaMobile
10  221.183.55.102  248.63 ms  AS9808  China, Beijing, ChinaMobile
11  221.183.46.254  249.15 ms  AS9808  China, Beijing, ChinaMobile
12  221.183.89.98  258.87 ms  AS9808  China, Beijing, ChinaMobile
13  *
14  *
15  cachedns03.bj.chinamobile.com (221.179.155.161)  262.22 ms  AS56048  China, Beijing, ChinaMobile

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.162  1.02 ms  *  LAN Address
 3  138.197.248.78  0.97 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.112  0.41 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  4.69.219.210  73.04 ms  AS3356  United States, Washington, Seattle, level3.com
 7  ChinaMobile-level3-Seattle1.Level3.net (4.68.39.222)  73.72 ms  AS3356  United States, Washington, Seattle, level3.com
 8  223.120.6.53  73.00 ms  AS58453  United States, Washington, Seattle, ChinaMobile
 9  223.120.22.58  257.78 ms  AS58453  China, Shanghai, ChinaMobile
10  221.183.55.30  257.83 ms  AS9808  China, Shanghai, ChinaMobile
11  221.183.25.189  248.04 ms  AS9808  China, Shanghai, ChinaMobile
12  221.176.22.9  248.08 ms  AS9808  China, Shanghai, ChinaMobile
13  111.24.4.77  246.61 ms  AS9808  China, Shanghai, ChinaMobile
14  111.24.4.106  248.77 ms  AS9808  China, Shanghai, ChinaMobile
15  221.181.125.85  246.32 ms  AS24400  China, Shanghai, ChinaMobile
16  211.136.190.234  246.79 ms  AS24400  China, Shanghai, ChinaMobile
17  211.136.112.252  245.65 ms  AS24400  China, Shanghai, ChinaMobile
18  211.136.112.200  246.83 ms  AS24400  China, Shanghai, ChinaMobile

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.166  0.59 ms  *  LAN Address
 3  138.197.248.86  1.01 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.116  1.32 ms  *  United States, New York, New York City, digitalocean.com
 5  *
 6  4.69.219.210  73.22 ms  AS3356  United States, Washington, Seattle, level3.com
 7  ChinaMobile-level3-Seattle1.Level3.net (4.68.39.222)  73.42 ms  AS3356  United States, Washington, Seattle, level3.com
 8  223.120.6.53  73.29 ms  AS58453  United States, Washington, Seattle, ChinaMobile
 9  223.120.13.202  221.70 ms  AS58453  China, Guangdong, Guangzhou, ChinaMobile
10  221.183.55.82  223.70 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
11  221.183.25.122  223.56 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
12  221.176.24.5  229.81 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
13  111.24.5.173  227.30 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
14  221.183.71.74  250.37 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
15  *
16  ns6.gd.cnmobile.net (120.196.165.24)  256.18 ms  AS56040  China, Guangdong, Shenzhen, ChinaMobile

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  *
 2  10.71.5.160  0.61 ms  *  LAN Address
 3  138.197.248.80  0.93 ms  *  United States, New York, New York City, digitalocean.com
 4  138.197.251.106  0.75 ms  *  United States, New York, New York City, digitalocean.com
 5  138.197.244.3  2.38 ms  *  United States, New York, New York City, digitalocean.com
 6  *
 7  100ge13-1.core1.nyc4.he.net (184.105.64.177)  1.96 ms  AS6939  United States, New York, New York City, he.net
 8  100ge16-1.core1.ash1.he.net (184.105.223.165)  8.65 ms  AS6939  United States, Virginia, Ashburn, he.net
 9  *
10  100ge14-1.core1.lax2.he.net (72.52.92.122)  62.78 ms  AS6939  United States, California, Los Angeles, he.net
11  216.218.244.106  66.13 ms  AS6939  United States, California, Los Angeles, he.net
12  101.4.117.185  70.92 ms  AS4538  United States, California, Los Angeles, CHINAEDU
13  101.4.117.213  236.47 ms  AS4538  China, Beijing, CHINAEDU
14  *
15  101.4.118.213  233.80 ms  AS4538  China, Beijing, CHINAEDU
16  101.4.112.14  249.75 ms  AS4538  China, Shaanxi, Xi'an, CHINAEDU
17  101.4.112.18  260.57 ms  AS4538  China, Sichuan, Chengdu, CHINAEDU
18  *
19  *
20  *
21  *
22  202.112.14.151  261.37 ms  AS24355  China, Sichuan, Chengdu, CHINAEDU

----------------------------------------------------------------------
```

### 回程路由

```bash

正在测试,请稍等...
——————————————————————————————

目标:北京电信[219.141.136.12]   回程线路:电信163

目标:北京联通[202.106.50.1]     回程线路:联通169

目标:北京移动[221.179.155.161]  回程线路:移动CMI

目标:上海电信[202.96.209.133]   回程线路:电信163

目标:上海联通[210.22.97.1]      回程线路:联通AS4837

目标:上海移动[211.136.112.200]  回程线路:移动CMI

目标:深圳电信[58.60.188.222]    回程线路:电信163

目标:深圳联通[210.21.196.6]     回程线路:联通169

目标:深圳移动[120.196.165.24]   回程线路:移动CMI


——————————————————————————————
本脚本测试结果为TCP回程路由,非ICMP回程路由 仅供参考 谢谢
```

## ping测试

### 全球ping

![2022-08-16 20:30:19](https://pic.rmb.bdstatic.com/bjh/953848a275acd4705924c729d79ce366.png)

### 国内ping

![2022-08-16 20:31:38](https://pic.rmb.bdstatic.com/bjh/c39e627148a0cb1caab634dfe3139ea9.png)

## 流媒体解锁测试

```bash
 ** 测试时间: Tue Aug 16 12:26:57 UTC 2022

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Digital Ocean (68.183.*.*) 


============[ Multination ]============
 Dazn:                                  No
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           New York, NY 
 Netflix Preferred CDN:                 Newark, NJ  
 Spotify Registration:                  No
 Steam Currency:                        USD
=======================================
==============[ Taiwan ]===============
 KKTV:                                  No
 LiTV:                                  No
 MyVideo:                               No
 4GTV.TV:                               No
 LineTV.TW:                             Failed (Unexpected Result: )
 Hami Video:                            No
 CatchPlay+:                            No
 HBO GO Asia:                           No
 Bahamut Anime:                         Failed (Network Connection)
 Eleven Sports TW:                      Failed (Network Connection)
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
 WOWOW:                                 Failed
 VideoMarket:                           No
 FOD(Fuji TV):                          No
 Radiko:                                No
 Karaoke@DAM:                           No
 J:com On Demand:                       No
 ---Game---
 Kancolle Japan:                        No
 Pretty Derby Japan:                    No
 Konosuba Fantastic Days:               No
 Princess Connect Re:Dive Japan:        No
 World Flipper Japan:                   No
 Project Sekai: Colorful Stage:         No
=======================================
===========[ North America ]===========
 FOX:                                   Yes
 Hulu:                                  Failed
 ESPN+:[Sponsored by Jam]               No
 Epix:                                  No
 Starz:                                 No
 HBO Now:                               Yes
 HBO Max:                               Yes
 BritBox:                               Yes
 NBA TV:                                Yes
 Fubo TV:                               Yes
 Sling TV:                              Yes
 Pluto TV:                              Yes
 Acorn TV:                              Yes
 SHOWTIME:                              Yes
 encoreTVB:                             Yes
 CineMax Go:                            Yes
 Funimation:                            Yes (Region: US)
 Discovery+:                            Yes
 Paramount+:                            Yes
 Peacock TV:                            Yes
 Directv Stream:                        Yes
 ---CA---
 CBC Gem:                               No
 Crave:                                 No
=======================================
===========[ South America ]===========
 Star+:                                 No
 HBO Max:                               Yes
 DirecTV Go:                            No
 Funimation:                            Yes (Region: US)
=======================================
===============[ Europe ]==============
 Rakuten TV:                            Yes
 Funimation:                            Yes (Region: US)
 HBO Nordic:                            Failed (Network Connection)
 HBO GO Europe:                         Failed (Network Connection)
 ---GB---
 Sky Go:                                No
 BritBox:                               Yes
 ITV Hub:                               No
 Channel 4:                             Failed (Network Connection)
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
 Acorn TV:                              Yes
 SHOWTIME:                              Yes
 BritBox:                               Yes
 Funimation:                            Yes (Region: US)
 Paramount+:                            Yes
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


 ** 正在测试IPv6解锁情况 
--------------------------------
 ** 您的网络为: Digital Ocean (2604:a880:400:*:*) 


============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               Yes (Region: US)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           New York, NY 
 Netflix Preferred CDN:                 New York, NY  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
=======================================
==============[ Taiwan ]===============
 KKTV:                                  No
 LiTV:                                  Failed (Network Connection)
 MyVideo:                               Yes
 4GTV.TV:                               Failed (Network Connection)
 LineTV.TW:                             Failed (Unexpected Result: )
 Hami Video:                            Failed (Network Connection)
 CatchPlay+:                            Failed
 HBO GO Asia:                           Failed (Network Connection)
 Bahamut Anime:                         Failed (Network Connection)
 Eleven Sports TW:                      Failed (Network Connection)
 Bilibili Taiwan Only:                  Failed (Network Connection)
=======================================
=============[ Hong Kong ]=============
 Now E:                                 Failed (Unexpected Result: )
 Viu.TV:                                Failed (Network Connection)
 MyTVSuper:                             No
 HBO GO Asia:                           Failed (Network Connection)
 BiliBili Hongkong/Macau/Taiwan:        Failed (Network Connection)
=======================================
===============[ Japan ]===============
 DMM:                                   Unsupported
 Abema.TV:                              Failed (Network Connection)
 Niconico:                              Failed (Network Connection)
 music.jp:                              No
 Telasa:                                Failed (Network Connection)
 Paravi:                                Failed (Network Connection)
 U-NEXT:                                Failed (Network Connection)
 Hulu Japan:                            Yes
 TVer:                                  Failed (Network Connection)
 GYAO!:                                 IPv6 Not Supported
 WOWOW:                                 Failed (Network Connection)
 VideoMarket:                           IPv6 Not Supported
 FOD(Fuji TV):                          No
 Radiko:                                Unsupported
 Karaoke@DAM:                           Failed (Network Connection)
 J:com On Demand:                       No
 ---Game---
 Kancolle Japan:                        No
 Pretty Derby Japan:                    No
 Konosuba Fantastic Days:               Failed (Network Connection)
 Princess Connect Re:Dive Japan:        Failed (Network Connection)
 World Flipper Japan:                   No
 Project Sekai: Colorful Stage:         Failed (Network Connection)
=======================================
===========[ North America ]===========
 FOX:                                   Yes
 Hulu:                                  Failed
 ESPN+:[Sponsored by Jam]               No
 Epix:                                  No
 Starz:                                 Failed (Network Connection)
 HBO Now:                               Failed (Network Connection)

 HBO Max:                               Failed (Network Connection)
 BritBox:                               Yes
 NBA TV:                                Yes
 Fubo TV:                               Failed (Network Connection)
 Sling TV:                              Yes
 Pluto TV:                              Yes
 Acorn TV:                              Failed (Network Connection)
 SHOWTIME:                              Failed (Network Connection)
 encoreTVB:                             Failed (Network Connection)
 CineMax Go:                            Failed (Network Connection)
 Funimation:                            IPv6 Not Support
 Discovery+:                            IPv6 Not Support
 Paramount+:                            Yes
 Peacock TV:                            Yes
 Directv Stream:                        -> ---CA---
 CBC Gem:                               Failed (Network Connection)
 Crave:                                 Failed (Network Connection)
=======================================
===========[ South America ]===========
 Star+:                                 No
 HBO Max:                               Failed (Network Connection)
 DirecTV Go:                            Failed (Network Connection)
 Funimation:                            IPv6 Not Support
=======================================
===============[ Europe ]==============
 Rakuten TV:                            Failed (Network Connection)
 Funimation:                            IPv6 Not Support
 HBO Nordic:                            Failed (Network Connection)
 HBO GO Europe:                         Failed (Network Connection)
 ---GB---
 Sky Go:                                Failed (Network Connection)
 BritBox:                               Yes
 ITV Hub:                               Failed (Network Connection)
 Channel 4:                             Failed (Network Connection)
 Channel 5:                             IPv6 Not Support
 BBC iPLAYER:                           Failed
 Discovery+ UK:                         IPv6 Not Support
 ---FR---
 Salto:                                 No
 Canal+:                                Failed (Network Connection)
 Molotov:                               No
 ---DE---
 Joyn:                                  Failed (Network Connection)
 Sky:                                   Failed (Network Connection)
 ZDF:                                   Failed (Network Connection)
 ---NL---
 NLZIET:                                Failed
 videoland:                             No
 NPO Start Plus:                        Failed (Network Connection)
 ---ES---
 HBO Spain:                             Failed (Network Connection)
 PANTAYA:                               Failed (Network Connection)
 ---IT---
 Rai Play:                              Failed (Network Connection)
 ---RU---
 Amediateka:                            Failed (Network Connection)
 ---PT---
 HBO Portugal:                          Failed (Network Connection)
=======================================
==============[ Oceania ]==============
 NBA TV:                                Yes
 Acorn TV:                              Failed (Network Connection)
 SHOWTIME:                              Failed (Network Connection)
 BritBox:                               Yes
 Funimation:                            IPv6 Not Support
 Paramount+:                            Yes
 ---AU---
 Stan:                                  ->curl: (6) Could not resolve host: api.stan.com.au
 Stan:                                  Failed (Network Connection)
 Binge:                                 Failed (Unexpected Result: 302)
 Docplay:                               ->curl: (6) Could not resolve host: www.docplay.com
 Docplay:                               Yes
 Channel 7:                             ->curl: no URL specified!
curl: try 'curl --help' or 'curl --manual' for more information
 Channel 7:                             IPv6 Not Support
 Channel 9:                             No
 Channel 10:                            Failed (Network Connection)
 ABC iView:                             ->curl: (6) Could not resolve host: api.iview.abc.net.au
 ABC iView:                             Failed (Network Connection)
 Kayo Sports:                           Yes
 Optus Sports:                          No
 SBS on Demand:                         Failed (Network Connection)
 ---NZ---
 Neon TV:                               ->curl: (6) Could not resolve host: api.neontv.co.nz
 Neon TV:                               Failed (Network Connection)
 SkyGo NZ:                              Failed (Network Connection)
 ThreeNow:                              Failed (Network Connection)
 Maori TV:                              Failed (Network Connection)
=======================================
本次测试已结束，感谢使用此脚本
```

## 总结

ping出来的结果看起来比do新加坡的网络还要好点，就很奇怪。
