---
title: 【简单测评】xTom日本年付30欧元
copyright: true
comment: false
mathjax: false
date: 2022-08-29 22:07:16
updated: 2024-06-15 12:56:16
tags:
  - xtom
  - jp
  - vps
categories: 简单测评
keywords: xtom, jp, vps, 简单测评, eur, 29,500g,1c,e5,1g,ipv4,ipv6,japan,cloud,speedtest,network
permalink: xtom-japan-vps-simple-evaluation/
description:
---
本次为预售且仅500台，三周之后才能用，使用时间顺延三周。

- 2024.6.15更新测试结果
<!--more-->

## 放在前面

个人主观感受：网络较好，但性能处于中下水平。

### 官方测速网站

```txt
NRT - Tokyo, Japan
  Test IPv4: 103.201.131.131
  Test IPv6: 2a12:a301:1::1f4
  Test file: https://nrt.lg.v.ps/100MB.test
  Looking glass: https://nrt.lg.v.ps/
  Speedtest: https://nrt.speedtest.v.ps/
```

### 相关解释

- 优质的网络线路质量（日本软银）。
- 多家供应商的上游，老板肉身在外，受zz管控导致跑路几率较小。
- 便宜（按照今天的汇率算，实付207.64元，月均17.25元，流量用得少的话，比已经缺货且线路恶化的腾讯云香港还有性价比
- 支持支付宝
- 套餐详情如下

  ```txt
  Tokyo Mini KVM vps Pre-order
  NRT1-MINI-1C1G
  - 1GB RAM
  - 1x vCPU  Xeon E5
  - 15GB SSD space
  - 500GB transfer
  - 500Mbps uplink
  - 1x IPv4
  - 1x IPv6
  - KVM/Proxmox
  - €29.95/year
  ```

来自`@Showfom`大佬对此vps的回复
![回复内容](https://cdn.zyha.cn/blog/20220829221420.png?x-oss-process=style/blog)

## nws.sh

```bash
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2024.06.02
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2678 v3 @ 2.50GHz
 CPU Cores          : 1 @ 2499.996 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 14.7 GB (1.6 GB Used)
 Total RAM          : 977.2 MB (302.9 MB Used)
 Total Swap         : 256.0 MB (0 Used)
 System uptime      : 6 days, 13 hour 0 min
 Load average       : 0.27, 0.31, 0.15
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-cloud-amd64
 Virtualization     : KVM
 TCP Control        : bbr
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : xTom Pty Ltd
 ASN                : AS3258 xTom Pty Ltd
 Host               : xTom GmbH
 Location           : Tokyo, Tokyo-13, Japan
---------------------------------------------------------------------------
 Speedtest.net (Region: CHINA | 中華人民共和國)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: xTom 

 Nearest          1.15 ms     76.2%   393.01 Mbps    238.71 Mbps    i3D.net - Tokyo 

 CU - Shanghai    63.59 ms    0.0%    406.38 Mbps    405.78 Mbps    China Unicom 5G - Shanghai 
 CM - Beijing     99.40 ms    18.3%   331.51 Mbps    96.66 Mbps     China Mobile Group Beijing Co.Ltd - Beijing 
 CU - Beijing     53.00 ms    N/A     10.89 Mbps     416.28 Mbps    BJ Unicom - Beijing 
 CT - Nanjing     55.72 ms            51.19 Mbps     FAILED         China Telecom JiangSu 5G - Nanjing 
 CT - Shenzen     FAILED                                                        
 CT - Zhenjiang   58.37 ms    N/A     399.31 Mbps    385.73 Mbps    China Telecom JiangSu 5G - Zhenjiang 
 CU - Shenyang    FAILED                                                        
 CT - Suzhou      67.18 ms    N/A     405.16 Mbps    415.47 Mbps    China Telecom JiangSu 5G - Suzhou 
 CT - Yangzhou    FAILED                                                        
 CM - Hangzhou    FAILED                                                        
 CT - Hangzhou    175.68 ms   N/A     362.14 Mbps    1.33 Mbps      浙江电信 - HangZhou 
 CU - Zhengzhou   FAILED                                                        
 CT - Changsha    FAILED                                                        
 CU - Changsha    FAILED                                                        
 CM - Chengdu     FAILED                                                        
 CU - Wu Xi       35.63 ms    0.0%    401.60 Mbps    415.22 Mbps    China Unicom - Wu Xi 
 CT - Hefei       100.78 ms   3.8%    362.90 Mbps    339.36 Mbps    China Telecom AnHui 5G - Hefei 
 CT - TianJin     FAILED                                                        
 CT - XiNing      FAILED                                                        
 CT - NingBo      104.69 ms   N/A     404.19 Mbps    373.09 Mbps    浙江电信 - NingBo 
 CM - Guangzhou   FAILED                                                        

 CM - Kwai Chung  51.08 ms    0.0%    394.44 Mbps    418.56 Mbps    CMHK Mobile Service - Hong Kong 
 CM - Hong Kong   54.59 ms    2.0%    399.56 Mbps    415.05 Mbps    CMHK Broadband - Hong Kong 
 CU - Hong Kong   FAILED                                                        
 Hong Kong        FAILED                                                        
 Hong Kong        49.26 ms    0.0%    412.44 Mbps    422.68 Mbps    Misaka Network, Inc. - Hong Kong 
---------------------------------------------------------------------------
 Avg DL Speed       : 338.19 Mbps
 Avg UL Speed       : 310.28 Mbps

 Total DL Data      : 5.76 GB
 Total UL Data      : 5.63 GB
 Total Data         : 11.39 GB
---------------------------------------------------------------------------
 Duration           : 6 min 41 sec
 System Time        : 15/06/2024 - 05:51:49 UTC
 Total Script Runs  : 47881
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1718429761_K2UFJK_CHINA.txt
---------------------------------------------------------------------------
```

## Bench.sh

```txt
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2678 v3 @ 2.50GHz
 CPU Cores          : 1 @ 2499.996 MHz
 CPU Cache          : 16384 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 14.7 GB (1.3 GB Used)
 Total Mem          : 969.4 MB (109.9 MB Used)
 Total Swap         : 256.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 5 min
 Load average       : 0.06, 0.07, 0.03
 OS                 : Ubuntu 22.04.1 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-47-generic
 TCP CC             : bbr
 Virtualization     : KVM
 Organization       : AS23959 Owl Limited
 Location           : Osaka / JP
 Region             : Ōsaka
----------------------------------------------------------------------
 I/O Speed(1st run) : 208 MB/s
 I/O Speed(2nd run) : 209 MB/s
 I/O Speed(3rd run) : 208 MB/s
 I/O Speed(average) : 208.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    295.88 Mbps       406.97 Mbps         178.99 ms   
 Los Angeles, US  345.47 Mbps       393.84 Mbps         117.75 ms   
 Dallas, US       308.41 Mbps       398.44 Mbps         154.53 ms   
 Montreal, CA     307.81 Mbps       385.24 Mbps         183.10 ms   
 Paris, FR        347.30 Mbps       401.11 Mbps         254.59 ms   
 Amsterdam, NL    354.88 Mbps       402.56 Mbps         227.01 ms   
 Shanghai, CN     418.54 Mbps       416.25 Mbps         48.83 ms    
 Nanjing, CN      417.37 Mbps       403.76 Mbps         35.73 ms    
 Seoul, KR        414.01 Mbps       397.29 Mbps         39.38 ms    
 Singapore, SG    399.35 Mbps       400.80 Mbps         69.57 ms    
 Tokyo, JP        417.11 Mbps       394.47 Mbps         0.92 ms     
----------------------------------------------------------------------
 Finished in        : 5 min 52 sec
 Timestamp          : 2022-09-11 14:19:49 UTC
----------------------------------------------------------------------
```

## 回程测试

```txt
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  193.32.148.1  11.66 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  8.33 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  0.80 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  15.39 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  softbank221111179214.bbtec.net (221.111.179.214)  30.49 ms  AS17676  China, Shanghai, bbtec.net
 9  202.97.91.25  31.06 ms  AS4134  China, Shanghai, ChinaTelecom
10  202.97.24.197  34.23 ms  AS4134  China, Shanghai, ChinaTelecom
11  202.97.33.97  56.62 ms  AS4134  China, Beijing, ChinaTelecom
12  *
13  *
14  *
15  bj141-147-210.bjtelecom.net (219.141.147.210)  58.21 ms  AS4847  China, Beijing, ChinaTelecom

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  193.32.148.1  11.67 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  5.48 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  18.21 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  0.80 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  *
 9  202.97.74.2  32.02 ms  AS4134  China, Shanghai, ChinaTelecom
10  202.97.57.26  43.69 ms  AS4134  China, Shanghai, ChinaTelecom
11  61.152.26.13  46.72 ms  AS4812  China, Shanghai, ChinaTelecom
12  124.74.229.230  46.04 ms  AS4812  China, Shanghai, ChinaTelecom
13  ns-pd.online.sh.cn (202.96.209.133)  44.41 ms  AS4812  China, Shanghai, ChinaTelecom

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  193.32.148.1  29.31 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  8.71 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  0.36 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  19.70 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  softbank221111202062.bbtec.net (221.111.202.62)  52.93 ms  AS17676  China, Beijing, bbtec.net
 9  202.97.93.222  85.56 ms  AS4134  China, Guangdong, Guangzhou, ChinaTelecom
10  *
11  *
12  14.147.127.94  73.55 ms  AS134774  China, Guangdong, Shenzhen, ChinaTelecom
13  *
14  58.60.188.222  72.77 ms  AS4134  China, Guangdong, Shenzhen, ChinaTelecom

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  193.32.148.1  13.35 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  16.95 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  0.38 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  0.88 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  softbank221111202070.bbtec.net (221.111.202.70)  55.42 ms  AS17676  China, Beijing, bbtec.net
 9  219.158.3.49  49.69 ms  AS4837  China, Beijing, ChinaUnicom
10  *
11  125.33.186.10  48.47 ms  AS4808  China, Beijing, ChinaUnicom
12  202.106.50.1  63.83 ms  AS4808  China, Beijing, ChinaUnicom

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  193.32.148.1  20.14 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  9.18 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  19.54 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  0.84 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  softbank221111202070.bbtec.net (221.111.202.70)  56.90 ms  AS17676  China, Beijing, bbtec.net
 9  219.158.22.142  52.05 ms  AS4837  China, Shanghai, ChinaUnicom
10  219.158.19.74  55.52 ms  AS4837  China, Shanghai, ChinaUnicom
11  219.158.19.81  48.94 ms  AS4837  China, Shanghai, ChinaUnicom
12  *
13  139.226.201.146  55.18 ms  AS17621  China, Shanghai, ChinaUnicom
14  210.22.97.1  49.91 ms  AS17621  China, Shanghai, ChinaUnicom

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  193.32.148.1  15.21 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  18.44 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  0.40 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  1.24 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  softbank221111202070.bbtec.net (221.111.202.70)  50.29 ms  AS17676  China, Beijing, bbtec.net
 9  219.158.22.142  53.24 ms  AS4837  China, Shanghai, ChinaUnicom
10  219.158.6.209  53.89 ms  AS4837  China, Shanghai, ChinaUnicom
11  *
12  *
13  *
14  120.80.144.38  82.39 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom
15  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  78.37 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  193.32.148.1  107.07 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  7.06 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  0.45 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  0.89 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  softbank221111202238.bbtec.net (221.111.202.238)  1.92 ms  AS17676  Japan, Tokyo, bbtec.net
 8  223.120.2.198  93.16 ms  AS58453  China, Beijing, ChinaMobile
 9  221.183.55.106  122.00 ms  AS9808  China, Beijing, ChinaMobile
10  221.183.46.254  118.36 ms  AS9808  China, Beijing, ChinaMobile
11  221.183.89.98  100.13 ms  AS9808  China, Beijing, ChinaMobile
12  221.183.46.174  97.92 ms  AS9808  China, Beijing, ChinaMobile
13  *
14  *
15  cachedns03.bj.chinamobile.com (221.179.155.161)  96.86 ms  AS56048  China, Beijing, ChinaMobile

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  193.32.148.1  15.16 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  7.84 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  0.35 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  1.17 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  softbank221111202238.bbtec.net (221.111.202.238)  2.28 ms  AS17676  Japan, Tokyo, bbtec.net
 8  223.120.22.53  54.97 ms  AS58453  China, Shanghai, ChinaMobile
 9  221.183.89.174  56.36 ms  AS9808  China, Shanghai, ChinaMobile
10  221.183.92.173  56.64 ms  AS9808  China, Shanghai, ChinaMobile
11  221.183.89.46  57.83 ms  AS9808  China, Shanghai, ChinaMobile
12  *
13  221.181.125.138  59.56 ms  AS24400  China, Shanghai, ChinaMobile
14  211.136.112.252  57.35 ms  AS24400  China, Shanghai, ChinaMobile
15  211.136.112.200  57.51 ms  AS24400  China, Shanghai, ChinaMobile

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  193.32.148.1  124.82 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  2.11 ms  AS23959  Japan, Tokyo, xtom.com
 3  211.15.32.122  20.01 ms  AS17676  Japan, Tokyo, bbtec.net
 4  211.15.32.121  0.82 ms  AS17676  Japan, Tokyo, bbtec.net
 5  *
 6  *
 7  *
 8  softbank221110131138.bbtec.net (221.110.131.138)  55.24 ms  AS17676  Japan, Tokyo, bbtec.net
 9  223.120.2.117  54.42 ms  AS58453  China, Hong Kong, ChinaMobile
10  223.120.2.86  54.84 ms  AS58453  China, Guangdong, Guangzhou, ChinaMobile
11  221.183.55.86  55.38 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
12  221.176.24.149  54.34 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
13  221.176.24.9  117.69 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
14  111.24.5.1  69.15 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
15  221.183.71.74  81.85 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
16  221.183.110.170  89.15 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
17  ns6.gd.cnmobile.net (120.196.165.24)  84.57 ms  AS56040  China, Guangdong, Shenzhen, ChinaMobile

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  193.32.148.1  4.38 ms  AS23959  Japan, Tokyo, xtom.com
 2  91.200.240.42  6.24 ms  AS23959  Japan, Tokyo, xtom.com
 3  101.203.89.164  0.31 ms  *  Japan, bbix.net
 4  *
 5  100ge6-2.core1.tyo1.he.net (184.104.197.209)  5.28 ms  AS6939  Japan, Tokyo, he.net
 6  100ge16-1.core1.lax2.he.net (184.104.195.1)  111.32 ms  AS6939  United States, California, Los Angeles, he.net
 7  216.218.244.106  111.11 ms  AS6939  United States, California, Los Angeles, he.net
 8  101.4.117.185  111.71 ms  AS4538  United States, California, Los Angeles, CHINAEDU
 9  101.4.117.213  166.26 ms  AS4538  China, Beijing, CHINAEDU
10  *
11  101.4.118.213  173.20 ms  AS4538  China, Beijing, CHINAEDU
12  101.4.112.14  185.45 ms  AS4538  China, Shaanxi, Xi'an, CHINAEDU
13  101.4.112.18  196.97 ms  AS4538  China, Sichuan, Chengdu, CHINAEDU
14  101.4.116.158  201.19 ms  AS4538  China, Sichuan, Chengdu, CHINAEDU
15  *
16  *
17  *
18  202.112.14.151  193.45 ms  AS24355  China, Sichuan, Chengdu, CHINAEDU

----------------------------------------------------------------------
```

## 回程线路

```txt
——————————————————————————————

目标:北京电信[219.141.136.12]   回程线路:电信163

目标:北京联通[202.106.50.1]     回程线路:联通169

目标:北京移动[221.179.155.161]  回程线路:移动cmi

目标:上海电信[202.96.209.133]   回程线路:电信163

目标:上海联通[210.22.97.1]      回程线路:联通169

目标:上海移动[211.136.112.200]  回程线路:移动CMI

目标:深圳电信[58.60.188.222]    回程线路:电信163

目标:深圳联通[210.21.196.6]     回程线路:联通169

目标:深圳移动[120.196.165.24]   回程线路:移动CMI


——————————————————————————————
本脚本测试结果为TCP回程路由,非ICMP回程路由 仅供参考 谢谢
```

## ping测试

### 国际ping测试

![20220911222730](https://cdn.zyha.cn/blog/20220911222730.png?x-oss-process=style/blog)

### 国内ping测试

![](https://img.tucang.cc/api/image/show/34efc3853227ee1b8586636053f526e6)

## 流媒体解锁

```txt
============[ Multination ]============
 Dazn:                                  No
 HotStar:                               No
 Disney+:                               Yes (Region: JP)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Yes (Region: JP)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   JP
 Viu.com:                               No
 YouTube CDN:                           Tokyo 
 Netflix Preferred CDN:                 Tokyo  
 Spotify Registration:                  No
 Steam Currency:                        EUR
=======================================
===============[ Japan ]===============
 DMM:                                   Yes
 Abema.TV:                              No
 Niconico:                              No
 music.jp:                              No
 Telasa:                                No
 Paravi:                                No
 U-NEXT:                                No
 Hulu Japan:                            No
 TVer:                                  Yes
 GYAO!:                                 Yes
 WOWOW:                                 Failed
 VideoMarket:                           Yes
 FOD(Fuji TV):                          Yes
 Radiko:                                Yes (City: TOKYO)
 Karaoke@DAM:                           Yes
 J:com On Demand:                       No
 ---Game---
 Kancolle Japan:                        Yes
 Pretty Derby Japan:                    Yes
 Konosuba Fantastic Days:               No
 Princess Connect Re:Dive Japan:        Yes
 World Flipper Japan:                   Yes
 Project Sekai: Colorful Stage:         No
=======================================
```

## 补充

```txt
V.PS 中文社区, [2022/9/12 10:14]
自己dd系统的，被发现了会删机器哦

V.PS 中文社区, [2022/9/12 10:15]
我们有提供 netboot.xyz.iso 可以自己装系统

V.PS 中文社区, [2022/9/12 10:15]
dd 这种操作会影响别的邻居，请不要进行这种行为

V.PS 中文社区, [2022/9/12 21:46]
mini 的是欧洲的 IP 广播在日本的

V.PS 中文社区, [2022/9/14 15:10]
Nvme 限制 1000MB/s

V.PS 中文社区, [2022/9/15 11:52]
关于带宽问题做统一回复，所有截止 2022/9/15 12:00 UTC+9 之前开通的 mini 服务已全部调整为 62.5MB/s 即 500Mbps。
之后开通的配置保持为 50MB/s，以此数值为准。
```

## 总结

线路不错，老板说硬盘也是全新的三星企业盘，不过是计算双向流量且只有500G，流量用完直接停机，次月再次开机，~~~仅建议流量用的少或建站的可以考虑~~~性能较差，不建议用于搭建动态站点。
