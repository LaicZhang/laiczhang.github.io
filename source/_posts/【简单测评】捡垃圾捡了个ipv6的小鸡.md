---
title: 【简单测评】捡垃圾捡了个ipv6的小鸡
copyright: true
comment: false
mathjax: false
date: 2025-01-10 18:31:58
updated: 2025-01-10 18:31:58
tags:
  - cf
  - vps
  - 评测
categories: vps
keywords: cf,vps,ipv6,ip6,ipv6-only,ipv6-only-vps
permalink: a-ipv6-only-vps/
description:
---
本地还是没有ipv6，所以需要折腾一下。

但是年付39.9的2c3g的vps，就还是能接受的了。由于这车看起来有点灵，所以此处不给出了购买地址了。跑个测试，大家看个热闹就好。
<!--more-->

## 配置出站ipv4

连上手机热点，使得本地有个ipv6地址。

然后运行

```bash
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh [option] [lisence/url/token]
```

选第一个，然后一路回车即可。

参考之前的那篇[通过Cloudflare-Warp为IPv6-Only的VPS添加IPv4](./add-ipv4-to-ipv6-only-vps-with-cloudflare-warp/)

## 测评

- nws.sh

```txt
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2025.01.05
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2683 v4 @ 2.10GHz
 CPU Cores          : 2 @ 2099.998 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 9.7 GB (978.4 MB Used)
 Total RAM          : 3.0 GB (27.3 MB Used)
 Total Swap         : 512.0 MB (4.0 KB Used)
 System uptime      : 0 days, 0 hour 36 min
 Load average       : 0.00, 0.05, 0.05
 OS                 : CentOS Linux release 7.9.2009 (Core)
 Arch               : x86_64 (64 Bit)
 Kernel             : 3.10.0-1160.119.1.vz7.224.4
 Virtualization     : OPENVZ
 TCP Control        : 
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : FranTech Solutions
 ASN                : AS53667 FranTech Solutions
 ASN (IPv4)         : AS13335 Cloudflare, Inc.
 Host               : FranTech Solutions
 Location           : Las Vegas, Nevada-NV, United States
 Location (IPv4)    : Wichita, Kansas, US
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Cloudflare Warp 

 Nearest          FAILED                                                        

 Kochi, IN        256.56 ms   0.0%    700.39 Mbps    241.04 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    272.96 ms   0.0%    803.53 Mbps    234.33 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      252.40 ms   0.0%    664.24 Mbps    292.09 Mbps    Jio - Chennai 
 Mumbai, IN       280.83 ms   0.0%    815.50 Mbps    198.06 Mbps    Tata Teleservices Ltd - Mumbai 
 Delhi, IN        FAILED                                                        

 Seattle, US      68.80 ms    N/A     917.28 Mbps    604.84 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  46.68 ms    0.0%    1074.15 Mbps   632.47 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       69.78 ms    0.0%    1055.22 Mbps   600.30 Mbps    i3D.net - Dallas, TX 
 Miami, US        42.24 ms    N/A     166.74 Mbps    384.20 Mbps    Dish Wireless - Miami, FL 
 New York, US     FAILED                                                        
 Toronto, CA      101.64 ms   0.0%    1056.02 Mbps   578.64 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  84.62 ms    N/A     1140.92 Mbps   793.40 Mbps    INFINITUM - Ciudad de México 

 London, UK       162.55 ms   0.0%    553.46 Mbps    395.59 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    128.69 ms   0.0%    185.67 Mbps    367.01 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        117.10 ms   N/A     167.45 Mbps    393.38 Mbps    Axione - Paris 
 Frankfurt, DE    173.23 ms   0.0%    889.15 Mbps    372.99 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       184.53 ms   0.0%    601.38 Mbps    348.12 Mbps    Play - Warszawa 
 Bucharest, RO    158.65 ms   0.0%    196.52 Mbps    348.04 Mbps    Vodafone Romania Fixed – Bucharest - Bucharest 
 Moscow, RU       171.95 ms   0.0%    183.52 Mbps    370.32 Mbps    RETN - Moscow 

 Jeddah, SA       230.90 ms   0.0%    470.40 Mbps    386.73 Mbps    Saudi Telecom Company 
 Dubai, AE        270.45 ms   N/A     175.30 Mbps    50.35 Mbps     e& UAE - Dubai 
 Istanbul, TR     226.06 ms   0.0%    714.50 Mbps    26.84 Mbps     Turkcell - Istanbul 
 Tehran, IR       FAILED                                                        
 Cairo, EG        168.85 ms   N/A     152.45 Mbps    377.84 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        144.14 ms   1.7%    637.24 Mbps    355.26 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Nanjing, CT-CN   FAILED                                                        
 Hong Kong, CN    244.75 ms   N/A     577.22 Mbps    186.28 Mbps    Misaka Network, Inc. - Hong Kong 
 Singapore, SG    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 604.27 Mbps
 Avg UL Speed       : 371.22 Mbps

 Total DL Data      : 20.67 GB
 Total UL Data      : 14.02 GB
 Total Data         : 34.68 GB
---------------------------------------------------------------------------
 Duration           : 13 min 50 sec
 System Time        : 10/01/2025 - 02:42:40 PST
 Total Script Runs  : 95116
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1736505629_9HJB85_GLOBAL.txt
---------------------------------------------------------------------------
```
