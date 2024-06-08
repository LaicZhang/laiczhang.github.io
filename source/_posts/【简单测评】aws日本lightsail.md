---
title: 【简单测评】aws日本lightsail
copyright: true
comment: true
mathjax: false
date: 2022-07-23 19:10:45
updated: 2022-07-23 19:10:45
tags:
  - aws
  - lightsail
  - 日本
  - vps
categories: vps
keywords: vps, aws, lightsail, 日本
permalink: aws-japan-lightsail-simple-evaluation/
description: Because they are all from aws, the test situation in Singapore is similar, so this test mainly depends on the network situation.
---
也是5$/月的那款小🐔。

因为都是aws的，所以和新加坡的测试情况是差不多的，所以本次测试主要看网络情况。
<!--more-->

## bench.sh

```txt
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz
 CPU Cores          : 1 @ 2400.113 MHz
 CPU Cache          : 30720 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Disabled
 Total Disk         : 38.7 GB (1.3 GB Used)
 Total Mem          : 978.6 MB (161.6 MB Used)
 System uptime      : 0 days, 0 hour 6 min
 Load average       : 0.41, 0.43, 0.21
 OS                 : Ubuntu 20.04 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-1018-aws
 TCP CC             : cubic
 Virtualization     : Xen-DomU
 Organization       : AS16509 Amazon.com, Inc.
 Location           : Tokyo / JP
 Region             : Tokyo
----------------------------------------------------------------------
 I/O Speed(1st run) : 55.4 MB/s
 I/O Speed(2nd run) : 53.1 MB/s
 I/O Speed(3rd run) : 54.2 MB/s
 I/O Speed(average) : 54.2 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    476.91 Mbps       69.74 Mbps          Osaka Electro-Communication
 Montreal, CA     163.02 Mbps       517.60 Mbps         67.79 ms    
 Paris, FR        286.43 Mbps       714.98 Mbps         3.94 ms     
----------------------------------------------------------------------
 Finished in        : 4 min 18 sec
 Timestamp          : 2022-07-23 11:25:51 UTC
----------------------------------------------------------------------
```

## 线路测试

### 回程测试

```txt
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  ec2-54-150-128-95.ap-northeast-1.compute.amazonaws.com (54.150.128.95)  8.80 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.14  0.39 ms  *  Reserved
 6  240.1.52.2  0.36 ms  *  Reserved
 7  240.1.52.20  5.04 ms  *  Reserved
 8  240.1.52.4  0.38 ms  *  Reserved
 9  242.3.90.17  0.51 ms  *  Reserved
10  15.230.129.69  7.54 ms  *  Japan, Tokyo, amazon.com
11  15.230.129.12  3.26 ms  *  Japan, Tokyo, amazon.com
12  15.230.160.28  2.85 ms  *  Japan, Tokyo, amazon.com
13  100.91.149.194  2.86 ms  *  Shared Address
14  150.222.240.103  3.37 ms  *  United States, amazon.com
15  100.91.135.197  3.66 ms  *  Shared Address
16  240.0.188.12  11.93 ms  *  Reserved
17  242.4.212.131  10.50 ms  *  Reserved
18  52.93.66.89  2.57 ms  *  Japan, Tokyo, amazon.com
19  203.215.236.33  2.61 ms  AS4134  Japan, Tokyo, ChinaTelecom
20  *
21  *
22  *
23  *
24  *
25  2.254.120.106.static.bjtelecom.net (106.120.254.2)  56.82 ms  AS4847  China, Beijing, ChinaTelecom
26  bj141-147-210.bjtelecom.net (219.141.147.210)  57.67 ms  AS4847  China, Beijing, ChinaTelecom

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  ec2-54-150-128-21.ap-northeast-1.compute.amazonaws.com (54.150.128.21)  19.25 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.5  0.39 ms  *  Reserved
 6  240.1.52.1  0.36 ms  *  Reserved
 7  240.1.52.17  0.46 ms  *  Reserved
 8  240.1.52.7  0.36 ms  *  Reserved
 9  242.3.91.177  0.33 ms  *  Reserved
10  15.230.161.207  1.41 ms  *  Japan, Tokyo, amazon.com
11  15.230.161.192  0.92 ms  *  Japan, Tokyo, amazon.com
12  15.230.161.30  1.12 ms  *  Japan, Tokyo, amazon.com
13  100.91.137.210  10.32 ms  *  Shared Address
14  150.222.246.179  1.90 ms  *  United States, amazon.com
15  100.91.135.39  2.16 ms  *  Shared Address
16  250.254.128.2  8.03 ms  *  Reserved
17  242.4.212.1  19.53 ms  *  Reserved
18  52.93.66.89  3.67 ms  *  Japan, Tokyo, amazon.com
19  203.215.236.33  1.58 ms  AS4134  Japan, Tokyo, ChinaTelecom
20  *
21  *
22  202.97.57.146  48.79 ms  AS4134  China, Shanghai, ChinaTelecom
23  61.152.25.37  54.11 ms  AS4812  China, Shanghai, ChinaTelecom
24  *
25  180.169.255.122  72.42 ms  AS4812  China, Shanghai, ChinaTelecom
26  ns-pd.online.sh.cn (202.96.209.133)  48.42 ms  AS4812  China, Shanghai, ChinaTelecom

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  ec2-54-150-128-27.ap-northeast-1.compute.amazonaws.com (54.150.128.27)  4.62 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.1  1.18 ms  *  Reserved
 6  240.1.52.1  1.17 ms  *  Reserved
 7  240.1.52.23  1.21 ms  *  Reserved
 8  240.1.52.7  1.17 ms  *  Reserved
 9  242.3.91.169  5.54 ms  *  Reserved
10  15.230.154.158  2.65 ms  *  Japan, Tokyo, amazon.com
11  52.95.31.125  3.73 ms  AS16509  Japan, Tokyo, amazon.com
12  52.95.31.44  2.70 ms  AS16509  Japan, Tokyo, amazon.com
13  100.91.149.84  4.12 ms  *  Shared Address
14  150.222.247.133  2.59 ms  *  United States, amazon.com
15  100.91.135.51  3.49 ms  *  Shared Address
16  250.254.128.2  124.59 ms  *  Reserved
17  242.4.212.129  9.84 ms  *  Reserved
18  150.222.77.150  4.19 ms  *  Japan, Tokyo, amazon.com
19  *
20  be3080.ccr71.tyo01.atlas.cogentco.com (154.54.87.253)  111.53 ms  AS174  Japan, Tokyo, cogentco.com
21  be2894.ccr41.lax04.atlas.cogentco.com (154.54.1.21)  111.60 ms  AS174  United States, California, Los Angeles, cogentco.com
22  be3271.ccr41.lax01.atlas.cogentco.com (154.54.42.101)  113.07 ms  AS174  United States, California, Los Angeles, cogentco.com
23  be3176.ccr21.sjc01.atlas.cogentco.com (154.54.31.190)  111.46 ms  AS174  United States, California, San Jose, cogentco.com
24  be3142.ccr41.sjc03.atlas.cogentco.com (154.54.1.194)  112.35 ms  AS174  United States, California, San Jose, cogentco.com
25  38.104.138.106  117.70 ms  AS174  United States, California, San Jose, cogentco.com
26  202.97.43.117  158.62 ms  AS4134  China, Guangdong, Guangzhou, ChinaTelecom
27  202.97.12.18  157.39 ms  AS4134  China, Guangdong, Guangzhou, ChinaTelecom
28  202.97.94.133  158.52 ms  AS4134  China, Guangdong, Guangzhou, ChinaTelecom
29  202.105.158.33  174.18 ms  AS4134  China, Guangdong, Shenzhen, ChinaTelecom
30  *

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  ec2-54-150-128-95.ap-northeast-1.compute.amazonaws.com (54.150.128.95)  0.93 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.4  0.34 ms  *  Reserved
 6  240.1.52.0  0.36 ms  *  Reserved
 7  240.1.52.27  0.32 ms  *  Reserved
 8  240.1.52.7  0.38 ms  *  Reserved
 9  242.3.91.153  0.39 ms  *  Reserved
10  52.95.30.221  3.18 ms  AS16509  Japan, Tokyo, amazon.com
11  52.95.31.127  3.22 ms  AS16509  Japan, Tokyo, amazon.com
12  52.95.31.30  2.49 ms  AS16509  Japan, Tokyo, amazon.com
13  100.91.149.34  4.29 ms  *  Shared Address
14  100.91.3.145  4.10 ms  AS56402  Shared Address
15  100.91.135.39  3.42 ms  *  Shared Address
16  250.254.128.2  9.20 ms  *  Reserved
17  242.4.212.5  12.60 ms  *  Reserved
18  150.222.77.248  2.41 ms  *  Japan, Tokyo, amazon.com
19  52.95.218.181  2.53 ms  *  Japan, Tokyo, amazon.com
20  219.158.24.57  34.22 ms  AS4837  China, Sichuan, Chengdu, ChinaUnicom
21  219.158.19.74  36.99 ms  AS4837  China, Shanghai, ChinaUnicom
22  *
23  219.158.16.85  58.51 ms  AS4837  China, Beijing, ChinaUnicom
24  at613.bta.net.cn (202.96.12.122)  56.96 ms  AS4808  China, Beijing, ChinaUnicom
25  202.106.50.1  62.01 ms  AS4808  China, Beijing, ChinaUnicom

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  ec2-54-150-128-85.ap-northeast-1.compute.amazonaws.com (54.150.128.85)  3.54 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.12  0.36 ms  *  Reserved
 6  240.1.52.0  0.40 ms  *  Reserved
 7  240.1.52.18  0.59 ms  *  Reserved
 8  240.1.52.7  0.44 ms  *  Reserved
 9  242.3.91.177  0.60 ms  *  Reserved
10  15.230.154.184  1.46 ms  *  Japan, Tokyo, amazon.com
11  52.93.72.163  1.75 ms  *  Japan, Tokyo, amazon.com
12  52.93.72.114  0.57 ms  *  Japan, Tokyo, amazon.com
13  100.91.137.100  3.00 ms  *  Shared Address
14  54.239.44.191  2.79 ms  *  Japan, Tokyo, amazon.com
15  100.91.135.161  1.21 ms  *  Shared Address
16  240.0.188.12  8.58 ms  *  Reserved
17  242.4.212.7  9.42 ms  *  Reserved
18  150.222.77.246  2.45 ms  *  Japan, Tokyo, amazon.com
19  52.95.218.181  1.54 ms  *  Japan, Tokyo, amazon.com
20  219.158.16.253  36.44 ms  AS4837  China, Shanghai, ChinaUnicom
21  219.158.113.118  33.40 ms  AS4837  China, Shanghai, ChinaUnicom
22  219.158.113.101  33.08 ms  AS4837  China, Shanghai, ChinaUnicom
23  *
24  139.226.201.146  35.38 ms  AS17621  China, Shanghai, ChinaUnicom
25  210.22.97.1  33.61 ms  AS17621  China, Shanghai, ChinaUnicom

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  ec2-54-150-128-83.ap-northeast-1.compute.amazonaws.com (54.150.128.83)  2.18 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.15  0.34 ms  *  Reserved
 6  240.1.52.3  0.38 ms  *  Reserved
 7  240.1.52.21  0.40 ms  *  Reserved
 8  240.1.52.4  0.34 ms  *  Reserved
 9  242.3.90.33  0.35 ms  *  Reserved
10  15.230.154.156  2.88 ms  *  Japan, Tokyo, amazon.com
11  52.95.31.125  3.73 ms  AS16509  Japan, Tokyo, amazon.com
12  15.230.160.20  3.21 ms  *  Japan, Tokyo, amazon.com
13  100.91.149.130  2.71 ms  *  Shared Address
14  150.222.240.65  10.74 ms  *  United States, amazon.com
15  100.91.135.133  3.74 ms  *  Shared Address
16  240.0.188.14  9.07 ms  *  Reserved
17  242.4.212.3  9.86 ms  *  Reserved
18  150.222.77.254  2.43 ms  *  Japan, Tokyo, amazon.com
19  52.95.218.181  2.74 ms  *  Japan, Tokyo, amazon.com
20  219.158.13.193  33.52 ms  AS4837  China, Shanghai, ChinaUnicom
21  219.158.113.118  32.59 ms  AS4837  China, Shanghai, ChinaUnicom
22  *
23  *
24  120.86.0.58  64.81 ms  AS17816  China, Guangdong, Shenzhen, ChinaUnicom
25  120.80.147.254  66.88 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom
26  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  64.20 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  ec2-54-150-128-89.ap-northeast-1.compute.amazonaws.com (54.150.128.89)  1.27 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.5  1.10 ms  *  Reserved
 6  240.1.52.1  0.34 ms  *  Reserved
 7  240.1.52.31  0.34 ms  *  Reserved
 8  240.1.52.6  0.35 ms  *  Reserved
 9  242.3.91.57  0.66 ms  *  Reserved
10  15.230.154.162  2.63 ms  *  Japan, Tokyo, amazon.com
11  52.95.31.125  2.97 ms  AS16509  Japan, Tokyo, amazon.com
12  15.230.160.52  2.76 ms  *  Japan, Tokyo, amazon.com
13  100.91.149.150  3.66 ms  *  Shared Address
14  150.222.244.38  2.41 ms  *  United States, amazon.com
15  100.91.147.19  4.41 ms  *  Shared Address
16  52.95.30.35  7.94 ms  AS16509  Japan, Tokyo, amazon.com
17  150.222.90.112  4.20 ms  *  Japan, Tokyo, amazon.com
18  99.83.91.179  3.85 ms  *  United States, Virginia, Ashburn, amazon.com
19  223.120.2.245  13.39 ms  AS58453  Japan, Tokyo, ChinaMobile
20  223.120.2.198  93.08 ms  AS58453  China, Beijing, ChinaMobile
21  221.183.55.106  90.52 ms  AS9808  China, Beijing, ChinaMobile
22  221.183.46.254  92.41 ms  AS9808  China, Beijing, ChinaMobile
23  221.183.89.102  75.88 ms  AS9808  China, Beijing, ChinaMobile
24  221.183.46.178  75.13 ms  AS9808  China, Beijing, ChinaMobile
25  *
26  cachedns03.bj.chinamobile.com (221.179.155.161)  77.26 ms  AS56048  China, Beijing, ChinaMobile

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  ec2-54-150-128-17.ap-northeast-1.compute.amazonaws.com (54.150.128.17)  2.14 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.3  0.34 ms  *  Reserved
 6  240.1.52.3  0.36 ms  *  Reserved
 7  240.1.52.24  0.33 ms  *  Reserved
 8  240.1.52.7  0.42 ms  *  Reserved
 9  242.3.91.153  0.34 ms  *  Reserved
10  52.95.30.221  7.66 ms  AS16509  Japan, Tokyo, amazon.com
11  52.95.31.123  3.17 ms  AS16509  Japan, Tokyo, amazon.com
12  52.95.31.10  2.66 ms  AS16509  Japan, Tokyo, amazon.com
13  100.91.149.32  3.80 ms  *  Shared Address
14  100.91.3.197  2.98 ms  AS56402  Shared Address
15  100.91.147.39  3.79 ms  *  Shared Address
16  52.95.30.67  4.04 ms  AS16509  Japan, Tokyo, amazon.com
17  150.222.90.112  3.97 ms  *  Japan, Tokyo, amazon.com
18  99.83.91.179  3.83 ms  *  United States, Virginia, Ashburn, amazon.com
19  223.120.2.245  3.15 ms  AS58453  Japan, Tokyo, ChinaMobile
20  223.120.3.146  32.92 ms  AS58453  China, Shanghai, ChinaMobile
21  221.183.55.42  33.66 ms  AS9808  China, Shanghai, ChinaMobile
22  221.176.22.205  33.87 ms  AS9808  China, Shanghai, ChinaMobile
23  221.176.22.33  35.76 ms  AS9808  China, Shanghai, ChinaMobile
24  111.24.3.93  34.51 ms  AS9808  China, Shanghai, ChinaMobile
25  *
26  221.181.125.113  35.89 ms  AS24400  China, Shanghai, ChinaMobile
27  211.136.190.234  36.45 ms  AS24400  China, Shanghai, ChinaMobile
28  211.136.112.252  36.41 ms  AS24400  China, Shanghai, ChinaMobile
29  211.136.112.200  35.20 ms  AS24400  China, Shanghai, ChinaMobile

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  ec2-54-150-128-21.ap-northeast-1.compute.amazonaws.com (54.150.128.21)  16.44 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.13  0.39 ms  *  Reserved
 6  240.1.52.1  0.38 ms  *  Reserved
 7  240.1.52.18  0.37 ms  *  Reserved
 8  240.1.52.5  0.35 ms  *  Reserved
 9  242.3.90.129  0.54 ms  *  Reserved
10  15.230.161.195  4.05 ms  *  Japan, Tokyo, amazon.com
11  15.230.161.186  1.11 ms  *  Japan, Tokyo, amazon.com
12  52.93.72.104  3.73 ms  *  Japan, Tokyo, amazon.com
13  100.91.137.114  2.44 ms  *  Shared Address
14  150.222.244.84  2.61 ms  *  United States, amazon.com
15  100.91.147.115  2.54 ms  *  Shared Address
16  52.95.30.27  3.43 ms  AS16509  Japan, Tokyo, amazon.com
17  150.222.90.104  3.35 ms  *  Japan, Tokyo, amazon.com
18  99.83.91.179  2.72 ms  *  United States, Virginia, Ashburn, amazon.com
19  223.120.2.189  2.58 ms  AS58453  Japan, Tokyo, ChinaMobile
20  223.120.3.169  58.66 ms  AS58453  China, Hong Kong, ChinaMobile
21  223.120.2.10  61.11 ms  AS58453  China, Guangdong, Guangzhou, ChinaMobile
22  221.183.55.58  63.02 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
23  221.183.25.122  61.05 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
24  221.176.22.157  63.74 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
25  111.24.5.193  64.28 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
26  221.183.71.74  66.66 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
27  *
28  ns6.gd.cnmobile.net (120.196.165.24)  71.15 ms  AS56040  China, Guangdong, Shenzhen, ChinaMobile

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  ec2-54-150-128-85.ap-northeast-1.compute.amazonaws.com (54.150.128.85)  2.25 ms  AS16509  Japan, Tokyo, amazon.com
 2  *
 3  *
 4  *
 5  241.0.8.3  0.33 ms  *  Reserved
 6  240.1.52.3  0.37 ms  *  Reserved
 7  240.1.52.26  0.50 ms  *  Reserved
 8  240.1.52.7  0.49 ms  *  Reserved
 9  242.3.91.177  1.51 ms  *  Reserved
10  15.230.154.176  3.20 ms  *  Japan, Tokyo, amazon.com
11  15.230.129.24  3.16 ms  *  Japan, Tokyo, amazon.com
12  15.230.160.8  4.00 ms  *  Japan, Tokyo, amazon.com
13  100.91.149.224  3.81 ms  *  Shared Address
14  150.222.244.44  7.81 ms  *  United States, amazon.com
15  100.91.147.99  3.75 ms  *  Shared Address
16  *
17  52.93.250.138  3.84 ms  *  Japan, Tokyo, amazon.com
18  BE80.br05.tok02.pccwbtn.net (63.218.251.181)  3.82 ms  AS3491,AS31713  Japan, Tokyo, pccw.com
19  *
20  tsingHua.hu0-0-0-9.clbr02.hkg04.pccwbtn.net (63.218.115.14)  81.04 ms  AS3491,AS31713  China, Hong Kong, pccw.com
21  101.4.114.181  123.15 ms  AS4538  China, Beijing, CHINAEDU
22  *
23  101.4.118.213  111.72 ms  AS4538  China, Beijing, CHINAEDU
24  101.4.112.14  127.85 ms  AS4538  China, Shaanxi, Xi'an, CHINAEDU
25  *
26  101.4.116.158  139.95 ms  AS4538  China, Sichuan, Chengdu, CHINAEDU
27  *
28  *
29  *
30  *

----------------------------------------------------------------------
```

## ping测试

![2022-07-23 19:46:54](https://pic.rmb.bdstatic.com/bjh/1b6d6f3bd9414878a05d0cf679b4e086.png)

## 流媒体解锁测试

```txt
 ** 测试时间: Sat Jul 23 11:34:42 UTC 2022

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Amazon.com (3.112.*.*) 


============[ Multination ]============
 Dazn:                                  No
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: JP)
 Amazon Prime Video:                    Yes (Region: JP)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   JP
 Viu.com:                               No
 YouTube CDN:                           Tokyo 
 Netflix Preferred CDN:                 Seattle, WA  
 Spotify Registration:                  No
 Steam Currency:                        JPY
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
 DMM:                                   Yes
 Abema.TV:                              No
 Niconico:                              No
 music.jp:                              No
 Telasa:                                Yes
 Paravi:                                No
 U-NEXT:                                Yes
 Hulu Japan:                            No
 TVer:                                  Yes
 GYAO!:                                 Yes
 WOWOW:                                 No
 VideoMarket:                           Yes
 FOD(Fuji TV):                          Yes
 Radiko:                                Yes (City: TOKYO)
 Karaoke@DAM:                           Yes
 J:com On Demand:                       Yes
 ---Game---
 Kancolle Japan:                        Failed (Unexpected Result: 302)
 Pretty Derby Japan:                    Failed (Network Connection)
 Konosuba Fantastic Days:               Yes
 Princess Connect Re:Dive Japan:        No
 World Flipper Japan:                   No
 Project Sekai: Colorful Stage:         Yes
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
 NBA TV:                                No
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
 NBA TV:                                No
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


 ** 正在测试IPv6解锁情况 
--------------------------------
 ** 您的网络为: Amazon.com (2406:da14:a26:*:*) 


============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: JP)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Tokyo 
 Netflix Preferred CDN:                 Seattle, WA  
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
 WOWOW:                                 No
 VideoMarket:                           IPv6 Not Supported
 FOD(Fuji TV):                          No
 Radiko:                                Unsupported
 Karaoke@DAM:                           Failed (Network Connection)
 J:com On Demand:                       Yes
 ---Game---
 Kancolle Japan:                        Failed (Network Connection)
 Pretty Derby Japan:                    Yes
 Konosuba Fantastic Days:               Failed (Network Connection)
 Princess Connect Re:Dive Japan:        Failed (Network Connection)
 World Flipper Japan:                   No
 Project Sekai: Colorful Stage:         Failed (Network Connection)
=======================================
===========[ North America ]===========
 FOX:                                   No
 Hulu:                                  Failed
 ESPN+:[Sponsored by Jam]               No
 Epix:                                  No
 Starz:                                 Failed (Network Connection)
 HBO Now:                               Failed (Network Connection)

 HBO Max:                               Failed (Network Connection)
 BritBox:                               Yes
 NBA TV:                                No
 Fubo TV:                               Failed (Network Connection)
 Sling TV:                              No
 Pluto TV:                              Yes
 Acorn TV:                              Failed (Network Connection)
 SHOWTIME:                              Failed (Network Connection)
 AT&T NOW:                              No
 encoreTVB:                             Failed (Network Connection)
 CineMax Go:                            Failed (Network Connection)
 Funimation:                            IPv6 Not Support
 Discovery+:                            IPv6 Not Support
 Paramount+:                            No
 Peacock TV:                            No
 ---CA---
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
 NBA TV:                                No
 Acorn TV:                              Failed (Network Connection)
 SHOWTIME:                              Failed (Network Connection)
 BritBox:                               Yes
 Funimation:                            IPv6 Not Support
 Paramount+:                            No
 ---AU---
 Stan:                                  ->curl: (6) Could not resolve host: api.stan.com.au
 Stan:                                  Failed (Network Connection)
 Binge:                                 No
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

在近几个月aws经过了网络的优化，比起以前的情况已经好了很多了。
