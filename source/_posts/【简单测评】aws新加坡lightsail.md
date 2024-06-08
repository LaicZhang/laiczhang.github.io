---
title: 【简单测评】aws新加坡lightsail
copyright: true
comment: true
mathjax: false
date: 2022-07-09 20:49:22
updated: 2023-07-1 10:00:22
tags:
  - aws
  - lightsail
  - 新加坡
  - vps
categories: vps
keywords: vps, aws, lightsail, 新加坡, 简单测评
permalink: aws-singapore-lightsail-simple-evaluation/
description: Simply run a few scripts and see the effect casually of the instance.
---
简单跑几个脚本，随便看看效果。

小🐔是5$/月的那款。

2023.7.1更新: AWS lightsail最低配（3.5usd/月）已经由`1C 0.5GB`升级为`2C 0.5GB`，真正意义上的加量不加价

<!--more-->
## bench.sh

```bash
wget -qO- bench.sh | bash
```

运行结果如下：

```bash
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz
 CPU Cores          : 1 @ 2400.074 MHz
 CPU Cache          : 30720 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Disabled
 Total Disk         : 40.0 GB (8.3 GB Used)
 Total Mem          : 989.4 MB (709.6 MB Used)
 Total Swap         : 1.0 GB (977.6 MB Used)
 System uptime      : 604 days, 11 hour 19 min
 Load average       : 0.24, 0.17, 0.13
 OS                 : CentOS Linux release 7.6.1810 (Core) 
 Arch               : x86_64 (64 Bit)
 Kernel             : 3.10.0-957.1.3.el7.x86_64
 TCP CC             : cubic
 Virtualization     : Xen-DomU
 Organization       : AS16509 Amazon.com, Inc.
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 56.9 MB/s
 I/O Speed(2nd run) : 64.2 MB/s
 I/O Speed(3rd run) : 64.2 MB/s
 I/O Speed(average) : 61.8 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    944.73 Mbps       969.13 Mbps         1.32 ms     
 Los Angeles, US  151.86 Mbps       345.69 Mbps         178.89 ms   
 Dallas, US       165.40 Mbps       366.70 Mbps         203.98 ms   
 Montreal, CA     125.70 Mbps       931.04 Mbps         253.93 ms   
 Paris, FR        190.31 Mbps       353.70 Mbps         147.38 ms   
 Amsterdam, NL    121.07 Mbps       261.78 Mbps         269.34 ms   
 Shanghai, CN     189.68 Mbps       730.57 Mbps         72.67 ms    
 Nanjing, CN      194.83 Mbps       563.20 Mbps         67.59 ms    
 Guangzhou, CN    48.28 Mbps        303.87 Mbps         69.06 ms    
 Seoul, KR        184.04 Mbps       825.58 Mbps         74.11 ms    
 Singapore, SG    963.99 Mbps       808.11 Mbps         1.59 ms     
 Tokyo, JP        216.60 Mbps       588.12 Mbps         67.20 ms    
----------------------------------------------------------------------
 Finished in        : 6 min 44 sec
 Timestamp          : 2022-07-10 08:45:51 CST
----------------------------------------------------------------------
```

## 综合测试

```bash
LemonBench Server Test Tookit 20201005 Intl BetaVersion (C)iLemonrain. All Rights Reserved.
==========================================================================================
 
 [Info] Bench Start Time: 2022-07-10 08:51:45
 [Info] Test Mode: Fast Mode
 

 -> System Information

 OS Release:            CentOS Linux 7.6.1810 (x86_64)
 CPU Model:             Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz  2.40 GHz
 CPU Cache Size:        30720 KB
 CPU Number:            1 vCPU
 Virt Type:             Xen Hypervisor
 Memory Usage:          604.33 MB / 989.45 MB
 Swap Usage:            1.00 GB / 1.00 GB
 Boot Device:           /dev/xvda1
 Disk Usage:            8.51 GB / 41.93 GB
 CPU Usage:             6.7% used, 0.0% iowait, 0.0% steal
 Load (1/5/15min):      3.04 1.92 0.97 
 Uptime:                604 Days, 11 Hours, 31 Minutes, 41 Seconds
 Kernel Version:        3.10.0-957.1.3.el7.x86_64
 Network CC Method:     cubic + pfifo_fast

 -> Network Infomation

 
 -> Media Unlock Test 
 
 HBO Now:                               No
 Bahamut Anime:                         No
 Abema.TV:                              No
 Princess Connect Re:Dive Japan:        No
 BBC:                                   No
 BiliBili China Mainland Only:          No
 BiliBili Hongkong/Macau/Taiwan:        No
 Bilibili Taiwan Only:                  No

 -> CPU Performance Test (Fast Mode, 1-Pass @ 5sec)

 1 Thread Test:                 725 Scores

 -> Memory Performance Test (Fast Mode, 1-Pass @ 5sec)

 1 Thread - Read Test :         15972.99 MB/s
 1 Thread - Write Test:         11719.67 MB/s

 -> Disk Speed Test (4K Block/1M Block, Direct Mode)

 Test Name              Write Speed                             Read Speed
 100MB-4K Block         5.0 MB/s (1215 IOPS, 21.07s)            7.1 MB/s (1729 IOPS, 14.80s)
 1GB-1M Block           68.1 MB/s (64 IOPS, 15.40s)             66.6 MB/s (63 IOPS, 15.76s)

 -> Speedtest.net Network Speed Test

 Node Name                      Upload Speed    Download Speed  Ping Latency    Server Name
 Speedtest Default              114.61 MB/s     107.99 MB/s     0.98 ms         Campana (Singapore Singapore)
 China, Beijing CU              Fail: Timeout Exceeded after 60 seconds
 China, Shanghai CT             23.24 MB/s      41.07 MB/s      65.86 ms        China Telecom (China Shanghai)
 China, Hangzhou CM             Fail: Timeout Exceeded after 60 seconds

==========================================================================================
 
 [Info] Bench Finish Time: 2022-07-10 08:54:38
 [Info] Time Elapsed: 173 seconds
  
[Info] Please wait, collecting results ...
[Info] Generating Report ...
[Info] Saving local Report ...
[Info] Generating Report URL ...
[Success] Report Generate Success！Please save the follwing link:
[Info] Report URL: https://paste.ubuntu.com/p/czDxVQZ5tb/
 ```

## 线路测试

线路测试包括去程和回程，去程是针对的上传数据，回程一般是指下载数据也就是 vps 回传数据。因此一个 IP 的路由好坏，看回程才有参考价值，去程反而不是那么重要了。下面就讲讲回程路由：

### 回程测试

回程多地区测试脚本：

```bash
wget -qO- git.io/besttrace | bash
```

运行结果如下：

```txt
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  ec2-18-141-171-43.ap-southeast-1.compute.amazonaws.com (18.141.171.43)  5.04 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.8.1  0.95 ms  *  共享地址
 8  150.222.3.193  3.94 ms  *  新加坡, amazon.com
 9  150.222.3.212  0.82 ms  *  新加坡, amazon.com
10  52.93.8.145  0.66 ms  *  新加坡, amazon.com
11  183.91.56.81  1.73 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
12  202.97.93.157  63.03 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
13  202.97.12.185  64.76 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
14  202.97.24.145  73.66 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
15  202.97.97.221  89.93 ms  AS4134  中国, 北京, chinatelecom.com.cn, 电信
16  *
17  2.254.120.106.static.bjtelecom.net (106.120.254.2)  91.00 ms  AS4847  中国, 北京, chinatelecom.com.cn, 电信
18  bj141-147-210.bjtelecom.net (219.141.147.210)  90.31 ms  AS4847  中国, 北京, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  ec2-175-41-128-167.ap-southeast-1.compute.amazonaws.com (175.41.128.167)  1.05 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.8.193  0.81 ms  *  共享地址
 8  150.222.3.197  1.09 ms  *  新加坡, amazon.com
 9  150.222.3.212  1.58 ms  *  新加坡, amazon.com
10  52.93.8.145  0.66 ms  *  新加坡, amazon.com
11  183.91.56.81  1.68 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
12  202.97.93.157  63.02 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
13  202.97.12.181  66.31 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
14  202.97.94.238  67.62 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
15  61.152.24.85  70.12 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信
16  180.169.255.118  70.11 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信
17  ns-pd.online.sh.cn (202.96.209.133)  70.41 ms  AS4812  中国, 上海, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  ec2-18-141-171-39.ap-southeast-1.compute.amazonaws.com (18.141.171.39)  2.09 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.11.129  0.52 ms  *  共享地址
 8  150.222.108.145  2.07 ms  *  新加坡, amazon.com
 9  150.222.108.156  1.80 ms  *  新加坡, amazon.com
10  52.93.9.59  1.14 ms  *  新加坡, amazon.com
11  203.215.233.21  1.52 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
12  202.97.43.229  43.51 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
13  202.97.94.117  43.45 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
14  202.97.94.137  44.14 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
15  202.105.158.45  45.19 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
16  *
17  121.15.179.93  48.11 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
18  58.60.188.222  44.54 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  ec2-18-141-171-47.ap-southeast-1.compute.amazonaws.com (18.141.171.47)  5.58 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.8.225  0.66 ms  *  共享地址
 8  150.222.3.199  1.53 ms  *  新加坡, amazon.com
 9  150.222.3.210  1.85 ms  *  新加坡, amazon.com
10  52.93.10.137  1.10 ms  *  新加坡, amazon.com
11  52.95.218.183  1.77 ms  *  新加坡, amazon.com
12  219.158.23.241  45.70 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
13  219.158.111.213  90.71 ms  AS4837  中国, 北京, chinaunicom.com, 联通
14  219.158.9.226  78.09 ms  AS4837  中国, 北京, chinaunicom.com, 联通
15  *
16  *
17  202.106.50.1  76.55 ms  AS4808  中国, 北京, chinaunicom.com, 联通

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  ec2-175-41-128-169.ap-southeast-1.compute.amazonaws.com (175.41.128.169)  2.51 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.10.97  7.11 ms  *  共享地址
 8  203.83.223.197  7.90 ms  AS16509  新加坡, amazon.com
 9  52.93.8.48  1.44 ms  *  新加坡, amazon.com
10  52.93.10.129  0.67 ms  *  新加坡, amazon.com
11  52.95.218.183  1.93 ms  *  新加坡, amazon.com
12  219.158.17.165  45.38 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
13  219.158.111.137  71.57 ms  AS4837  中国, 上海, chinaunicom.com, 联通
14  219.158.113.134  70.53 ms  AS4837  中国, 上海, chinaunicom.com, 联通
15  219.158.113.105  71.26 ms  AS4837  中国, 上海, chinaunicom.com, 联通
16  *
17  139.226.201.146  68.06 ms  AS17621  中国, 上海, chinaunicom.com, 联通
18  210.22.97.1  72.58 ms  AS17621  中国, 上海, chinaunicom.com, 联通

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  ec2-175-41-128-163.ap-southeast-1.compute.amazonaws.com (175.41.128.163)  0.90 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.10.65  0.55 ms  *  共享地址
 8  150.222.3.197  0.81 ms  *  新加坡, amazon.com
 9  150.222.3.206  1.56 ms  *  新加坡, amazon.com
10  52.93.10.133  1.10 ms  *  新加坡, amazon.com
11  52.95.218.183  1.56 ms  *  新加坡, amazon.com
12  219.158.102.137  47.03 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
13  219.158.97.26  41.24 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
14  *
15  *
16  120.80.147.254  43.90 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
17  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  48.95 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  ec2-175-41-128-167.ap-southeast-1.compute.amazonaws.com (175.41.128.167)  8.92 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.9.129  2.12 ms  *  共享地址
 8  203.83.223.191  1.60 ms  AS16509  新加坡, amazon.com
 9  52.93.8.136  1.53 ms  *  新加坡, amazon.com
10  52.93.8.127  0.52 ms  *  新加坡, amazon.com
11  223.119.2.213  9.24 ms  AS58453  新加坡, chinamobile.com, 移动
12  223.120.22.29  65.90 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
13  221.183.55.110  66.37 ms  AS9808  中国, 北京, chinamobile.com, 移动
14  221.183.52.2  67.10 ms  AS9808  中国, 北京, chinamobile.com, 移动
15  221.183.89.122  73.93 ms  AS9808  中国, 北京, chinamobile.com, 移动
16  221.183.46.178  73.76 ms  AS9808  中国, 北京, chinamobile.com, 移动
17  *
18  cachedns03.bj.chinamobile.com (221.179.155.161)  76.90 ms  AS56048  中国, 北京, chinamobile.com, 移动

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  ec2-18-141-171-47.ap-southeast-1.compute.amazonaws.com (18.141.171.47)  8.13 ms  AS16509  新加坡, amazon.com
 2  *
 3  *
 4  *
 5  *
 6  *
 7  100.65.11.33  0.67 ms  *  共享地址
 8  203.83.223.201  1.28 ms  AS16509  新加坡, amazon.com
 9  52.93.9.70  5.34 ms  *  新加坡, amazon.com
10  15.230.29.156  1.81 ms  *  新加坡, amazon.com
11  *
12  223.120.3.153  1.46 ms  AS58453  CHINAMOBILE.COM 骨干网, chinamobile.com, 移动
13  223.120.3.162  31.95 ms  AS58453  中国, 香港, chinamobile.com, 移动
14  223.120.2.6  38.92 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
15  221.183.25.189  64.56 ms  AS9808  中国, 上海, chinamobile.com, 移动
16  221.176.22.9  64.25 ms  AS9808  中国, 上海, chinamobile.com, 移动
17  111.24.17.61  64.43 ms  AS9808  中国, 上海, chinamobile.com, 移动
18  111.24.4.106  65.53 ms  AS9808  中国, 上海, chinamobile.com, 移动
19  221.181.125.81  62.80 ms  AS24400  中国, 上海, chinamobile.com, 移动
20  221.181.125.138  62.50 ms  AS24400  中国, 上海, chinamobile.com, 移动
21  211.136.112.252  62.33 ms  AS24400  中国, 上海, chinamobile.com, 移动
22  211.136.112.200  65.61 ms  AS24400  中国, 上海, chinamobile.com, 移动

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  *
 2  *
 3  *
 4  *
 5  *
 6  100.65.11.193  0.54 ms  *  共享地址
 7  150.222.3.197  5.82 ms  *  新加坡, amazon.com
 8  150.222.3.200  0.95 ms  *  新加坡, amazon.com
 9  52.93.8.15  0.62 ms  *  新加坡, amazon.com
10  223.119.2.209  1.57 ms  AS58453  新加坡, chinamobile.com, 移动
11  223.120.2.86  38.34 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
12  221.183.55.98  38.11 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
13  221.176.24.61  39.63 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
14  221.176.22.125  40.05 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
15  111.24.14.149  40.99 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
16  221.183.71.70  66.74 ms  AS9808  中国, 广东, chinamobile.com, 移动
17  *
18  ns6.gd.cnmobile.net (120.196.165.24)  68.61 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  *
 2  *
 3  *
 4  *
 5  *
 6  100.65.9.161  0.46 ms  *  共享地址
 7  203.83.223.201  1.01 ms  AS16509  新加坡, amazon.com
 8  52.93.9.158  1.56 ms  *  新加坡, amazon.com
 9  15.230.29.146  1.24 ms  *  新加坡, amazon.com
10  snge-b4-link.ip.twelve99.net (62.115.41.178)  1.18 ms  AS1299  新加坡, telia.com
11  *
12  hnk-b4-link.ip.twelve99.net (62.115.143.240)  33.39 ms  AS1299  中国, 香港, telia.com
13  chinatelecom-svc082303-ic372206.ip.twelve99-cust.net (80.239.130.173)  35.42 ms  AS1299  中国, 香港, telia.com
14  101.4.114.181  69.86 ms  AS4538  中国, 北京, edu.cn, 教育网
15  *
16  101.4.118.213  70.01 ms  AS4538  中国, 北京, edu.cn, 教育网
17  101.4.112.14  86.10 ms  AS4538  中国, 陕西, 西安, edu.cn, 教育网
18  101.4.112.18  97.10 ms  AS4538  中国, 四川, 成都, edu.cn, 教育网
19  101.4.116.158  101.28 ms  AS4538  中国, 四川, 成都, edu.cn, 教育网
20  *
21  *
22  *
23  202.112.14.151  97.29 ms  AS24355  中国, 四川, 成都, edu.cn, 教育网

----------------------------------------------------------------------
```

### 回程路由

```shell
curl https://raw.githubusercontent.com/zhucaidan/mtr_trace/main/mtr_trace.sh|bash
```

运行结果如下：

```shell
正在测试,请稍等...
——————————————————————————————

目标:北京电信[219.141.136.12]   回程线路:电信163

目标:北京联通[202.106.50.1]     回程线路:联通169

目标:北京移动[221.179.155.161]  回程线路:移动CMI

目标:上海电信[202.96.209.133]   回程线路:电信163

目标:上海联通[210.22.97.1]      回程线路:联通AS4837

目标:上海移动[211.136.112.200]  回程线路:移动CMI

目标:深圳电信[58.60.188.222]    回程线路:其他

目标:深圳联通[210.21.196.6]     回程线路:联通169

目标:深圳移动[120.196.165.24]   回程线路:移动cmi


——————————————————————————————
本脚本测试结果为TCP回程路由,非ICMP回程路由 仅供参考 谢谢
```

### 去程测试

上面说完了三网回程，下面讲讲去程，一般来说流量是不对等的，回复流量基本上是请求流量的数倍。

由于它压根就不堵，所以去程没啥参考价值。当然，既然写到了去程这个话题，还是留下测试去程的方法：

打开[traceroute 工具](https://tools.ipip.net/traceroute.php)，左边选择你附近的服务器，然后右边填上 vps IP 就可以查看去程路由了。

## ping测试

### 全球ping

![2022-07-25 23:14:27](https://pic.rmb.bdstatic.com/bjh/50b0c566958e20195200d5b28197d95b.png)

### 国内ping

![2022-07-25 23:14:27](https://pic.rmb.bdstatic.com/bjh/cd7f59b876a68df0a01ba28ffd5ce71c.png)

## 流媒体解锁测试

```bash
bash <(curl -L -s check.unlock.media)
```

运行结果如下：

```bash
 ** 测试时间: Sun Jul 10 09:09:58 CST 2022

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Amazon.com (18.136.*.*) 


============[ Multination ]============
 Dazn:                                  No
 HotStar:                               Yes (Region: SG)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   SG
 Viu.com:                               Yes (Region: SG)
 YouTube CDN:                           Singapore 
 Netflix Preferred CDN:                 London  
 Spotify Registration:                  No
 Steam Currency:                        SGD
=======================================
=============[ Hong Kong ]=============
 Now E:                                 No
 Viu.TV:                                No
 MyTVSuper:                             No
 HBO GO Asia:                           Yes (Region: SG)
 BiliBili Hongkong/Macau/Taiwan:        No
=======================================
```

## 总结

作为大厂推出的vps，其稳定性是毫无疑问的，但是对中国大陆的网络就很一般了。作为一个建站的vps，还是不错的。
