---
title: 【简单测评】oracle韩国e2
copyright: true
comment: true
mathjax: false
date: 2024-06-15 16:21:29
updated: 2024-06-15 16:21:29
tags:
  - oracle
  - vps
categories: vps
keywords: vps, oracle, e2, 云服务器, free
permalink:
description:
---
丢包极为严重，测完就后悔开韩国区域了。。。

<!-- more -->
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
 CPU Model          : AMD EPYC 7551 32-Core Processor
 CPU Cores          : 2 @ 1996.245 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ❌ Disabled
 Total Disk         : 45.1 GB (2.1 GB Used)
 Total RAM          : 947.5 MB (208.3 MB Used)
 System uptime      : 0 days, 0 hour 39 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Ubuntu 22.04.4 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.5.0-1020-oracle
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Oracle Corporation
 ASN                : AS31898 Oracle Corporation
 Host               : Oracle Cloud Infrastructure (ap-chuncheon-1)
 Location           : Chuncheon, Gangwon-do-42, South Korea
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Oracle Cloud 

 Nearest          69.91 ms    N/A     50.25 Mbps     5.83 Mbps      ChinaUnicom-5G - TianJin 

 Kochi, IN        124.49 ms   0.0%    50.89 Mbps     48.68 Mbps     Asianet Broadband - Cochin 
 Bangalore, IN    113.04 ms   0.0%    49.86 Mbps     47.84 Mbps     Bharti Airtel Ltd - Bangalore 
 Chennai, IN      99.80 ms    N/A     51.48 Mbps     50.42 Mbps     Jio - Chennai 
 Mumbai, IN       125.04 ms   0.0%    50.44 Mbps     48.83 Mbps     i3D.net - Mumbai 
 Delhi, IN        145.54 ms   0.0%    49.06 Mbps     48.55 Mbps     Tata Play Fiber - New Delhi 

 Seattle, US      206.40 ms   N/A     50.64 Mbps     46.43 Mbps     Comcast - Seattle, WA 
 Los Angeles, US  133.68 ms   0.0%    48.06 Mbps     31.72 Mbps     ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       165.32 ms   0.0%    49.36 Mbps     47.57 Mbps     i3D.net - Dallas, TX 
 Miami, US        210.18 ms   N/A     51.30 Mbps     48.97 Mbps     Dish Wireless - Miami, FL 
 New York, US     189.08 ms   N/A     51.01 Mbps     50.14 Mbps     fdcservers.net - New York, NY 
 Toronto, CA      176.48 ms   0.0%    51.18 Mbps     49.84 Mbps     Rogers - Toronto, ON 
 Mexico City, MX  199.31 ms   N/A     50.59 Mbps     49.13 Mbps     INFINITUM - Mexico City 

 London, UK       296.58 ms   0.0%    55.01 Mbps     48.93 Mbps     VeloxServ Communications - London 
 Amsterdam, NL    318.54 ms   0.0%    56.56 Mbps     49.40 Mbps     31173 Services AB - Amsterdam 
 Paris, FR        FAILED                                                        
 Frankfurt, DE    354.74 ms   0.0%    50.73 Mbps     49.15 Mbps     Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       330.64 ms   0.0%    52.67 Mbps     48.89 Mbps     Play - Warszawa 
 Bucharest, RO    309.85 ms   0.0%    51.75 Mbps     49.63 Mbps     Vodafone Romania Fixed – Bucharest - Bucharest 
 Moscow, RU       193.46 ms   0.0%    50.32 Mbps     50.47 Mbps     Rostelecom - Moscow 

 Jeddah, SA       328.54 ms   0.0%    55.16 Mbps     49.59 Mbps     Saudi Telecom Company 
 Dubai, AE        FAILED                                                        
 Fujairah, AE     150.81 ms   0.0%    53.57 Mbps     47.30 Mbps     ETISALAT-UAE - Fujairah 
 Istanbul, TR     360.63 ms   0.0%    51.46 Mbps     49.71 Mbps     Turkcell - Istanbul 
 Tehran, IR       773.85 ms   0.0%    53.08 Mbps     49.14 Mbps     Asiatech - Tehran 

 Tokyo, JP        35.64 ms    0.0%    49.05 Mbps     49.34 Mbps     IPA CyberLab 400G - Tokyo 
 Shanghai, CU-CN  63.97 ms    1.1%    50.41 Mbps     7.03 Mbps      China Unicom 5G - Shanghai 
 Nanjing, CT-CN   129.51 ms   36.2%   49.10 Mbps     0.32 Mbps      China Telecom JiangSu 5G - Nanjing 
 Hong Kong, CN    39.47 ms    N/A     49.66 Mbps     49.00 Mbps     STC - Hong Kong 
 Singapore, SG    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 51.21 Mbps
 Avg UL Speed       : 43.40 Mbps

 Total DL Data      : 1.89 GB
 Total UL Data      : 1.89 GB
 Total Data         : 3.78 GB
---------------------------------------------------------------------------
 Duration           : 14 min 7 sec
 System Time        : 15/06/2024 - 08:43:51 UTC
 Total Script Runs  : 47892
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1718440081_HB8VVW_GLOBAL.txt
---------------------------------------------------------------------------
```

## 流媒体平台及游戏区域限制测试

```bash
 [流媒体平台及游戏区域限制测试]

项目地址 https://github.com/lmc999/RegionRestrictionCheck 
BUG 反馈或使用交流可加TG群组 https://t.me/gameaccelerate 

 ** 测试时间: Sat Jun 15 08:51:33 UTC 2024
 ** 版本: 1.0.0


 ** 正在测试 IPv4 解锁情况
--------------------------------
 ** 您的网络为: Oracle Cloud (138.2.*.*)


============[ Multination ]============
 Dazn:                                  Yes (Region: KR)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: KR)
 Amazon Prime Video:                    Yes (Region: KR)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: KR)
 Instagram Licensed Audio:              No
 OneTrust Region:                       KR [Gangwon-do]
 iQyi Oversea Region:                   KR
 Bing Region:                           KR
 YouTube CDN:                           Tokyo
 Netflix Preferred CDN:                 [SK Broadband] in [Seoul, Korea]
 ChatGPT:                               No (Only Available with Web Browser)
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        KRW
 ---Forum---
 Reddit:                                No
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
 SonyLiv:                               No
 Bilibili Taiwan Only:                  No
=======================================
=============[ Hong Kong ]=============
 Now E:                                 No
 Viu.com:                               No
 Viu.TV:                                No
 MyTVSuper:                             No
 HBO GO Asia:                           No
 SonyLiv:                               No
 BiliBili Hongkong/Macau/Taiwan:        No
 Bahamut Anime:                         No
=======================================
===============[ Japan ]===============
 DMM:                                   No
 DMM TV:                                No
 Abema.TV:                              No
 Niconico:                              Failed (Error: PAGE ERROR)
 Telasa:                                No
 U-NEXT:                                No
 Hulu Japan:                            No
 TVer:                                  Failed (Network Connection)
 Lemino:                                No
 WOWOW:                                 No
 VideoMarket:                           No
 D Anime Store:                         No
 FOD(Fuji TV):                          No
 Radiko:                                No
 Karaoke@DAM:                           No
 J:com On Demand:                       No
 WATCHA:                                Yes
 Rakuten TV JP:                         No
 ---Game---
 Kancolle Japan:                        No
 Pretty Derby Japan:                    Failed (Network Connection)
 Konosuba Fantastic Days:               No
 Princess Connect Re:Dive Japan:        No
 Project Sekai: Colorful Stage:         No
 ---Music---
 Mora:                                  No
 music.jp:                              No
 ---Forum---
 EroGameSpace:                          Failed (Network Connection)
=======================================
===========[ North America ]===========
 Paramount+:                            No
 Discovery+:                            No (Not Yet Available in Asia Pacific)
 Acorn TV:                              No
 BritBox:                               No
 SonyLiv:                               No
 NBA TV:                                Yes
 TLC GO:                                No
 Shudder:                               No
 Fubo TV:                               No
 Tubi TV:                               No
 Pluto TV:                              No
 KOCOWA:                                No
 AMC+:                                  No
 MathsSpot Roblox:                      No
 ---US---
 FOX:                                   No
 Hulu:                                  No
 NFL+:                                  No
 ESPN+:[Sponsored by Jam]               No
 MGM+:                                  No
 Starz:                                 No
 Philo:                                 No
 FXNOW:                                 No
 HBO Max:                               No
 Crackle:                               No
 CW TV:                                 No
 A&E TV:                                No
 NBC TV:                                No
 Sling TV:                              No
 encoreTVB:                             No
 Peacock TV:                            No
 Popcornflix:                           Yes
 Crunchyroll:                           No
 Directv Stream:                        No
 Meta AI:                               No
 ---CA---
 HotStar:                               No
 CBC Gem:                               No
 Crave:                                 No
=======================================
===========[ South America ]===========
 HBO Max:                               No
 DirecTV Go:                            Failed (Error: 404)
 Paramount+:                            No
=======================================
===============[ Europe ]==============
 Rakuten TV:                            No
 SkyShowTime:                           No
 HBO Max:                               No
 Discovery+:                            No (Not Yet Available in Asia Pacific)
 Setanta Sports:                        No
 SonyLiv:                               No
 Paramount+:                            No
 ---GB---
 HotStar:                               No
 Sky Go:                                Yes
 BritBox:                               No
 ITV Hub:                               No
 Channel 4:                             No
 Channel 5:                             No
 BBC iPLAYER:                           No
 Acorn TV:                              No
 Shudder:                               No
 ---FR---
 Canal+:                                No
 Molotov:                               No
 ---DE---
 Joyn:                                  No
 SKY DE:                                No
 ZDF:                                   No
 ---NL---
 NLZIET:                                Failed (Error: PAGE ERROR)
 videoland:                             No
 NPO Start Plus:                        No
 ---ES---
 Movistar+:                             No
 ---IT---
 Rai Play:                              No
 ---CH---
 SKY CH:                                No
 ---RU---
 Amediateka:                            No
=======================================
==============[ Oceania ]==============
 NBA TV:                                Yes
 Acorn TV:                              No
 BritBox:                               No
 Paramount+:                            No
 AMC+:                                  No
 SonyLiv:                               No
 ---AU---
 Binge:                                 No
 Docplay:                               No
 7plus:                                 No
 ABC iView:                             No
 Channel 9:                             No
 Channel 10:                            No
 Optus Sports:                          No
 SBS on Demand:                         No
 Kayo Sports:                           No
 ---NZ---
 Neon TV:                               No
 SkyGo NZ:                              Failed (Error: 401)
 ThreeNow:                              No
 Maori TV:                              No
=======================================
==============[ Korean ]===============
 Wavve:                                 No
 Tving:                                 Yes
 WATCHA:                                Yes
 Coupang Play:                          Yes
 Naver TV:                              Yes
 SPOTV NOW:                             Yes
 Afreeca TV:                            Yes
 KBS Domestic:                          Yes
=======================================


 ** 正在测试 IPv6 解锁情况 
当前主机不支持 IPv6，跳过...
本次测试已结束，感谢使用此脚本

检测脚本当天运行次数: 6320; 共计运行次数: 11803997
```
