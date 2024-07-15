---
title: 【简单测评】oracle韩国e2
copyright: true
comment: false
mathjax: false
date: 2024-06-15 16:21:29
updated: 2024-07-07 16:21:29
tags:
  - oracle
  - vps
categories: vps
keywords: vps, oracle, e2, 云服务器, free, shell, test, speed, speedtest
permalink: oracle-e2-simple-evaluation/
description:
---
丢包极为严重，测完就后悔开韩国春川区域了。。。

- 2024.7.7更新，添加保活脚本避免因为闲置被回收

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

## 保活脚本

### oracle 规定

- [Always Free Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)

闲置的Always Free计算实例可能会被Oracle回收。Oracle将虚拟机和裸机计算实例视为闲置，如果在7天期限内满足以下条件：

- CPU使用率的95百分位数小于20%
- 网络使用率小于20%
- 内存使用率小于20%（仅适用于A1形状）

有大佬已经写好了一键脚本，拿来用即可。

- [spirit lhl / Oracle Server Keep Alive Script · GitLab](https://gitlab.com/spiritysdx/Oracle-server-keep-alive-script)

```bash
bash <(wget -qO- --no-check-certificate https://gitlab.com/spiritysdx/Oracle-server-keep-alive-script/-/raw/main/oalive.sh)
```

### 运行实况

```bash
root@instance-20240615-1725:/home/ubuntu# bash <(wget -qO- --no-check-certificate https://gitlab.com/spiritysdx/Oracle-server-keep-alive-script/-/raw/main/oalive.sh)
Locale set to C.utf8
当前脚本更新时间(请注意比对仓库说明)： 2023.09.24.08.37
仓库：https://github.com/spiritLHLS/Oracle-server-keep-alive-script
cpu-limit.service 未设置
memory-limit.service 未设置
bandwidth_occupier.service 未设置
选择你的选项:
1. 安装保活服务
2. 卸载保活服务
3. 一键更新脚本
4. 退出程序
你的选择：1
是否需要更新软件包管理器？y/[n]：y
Updating package management sources
CDN available, using CDN
选择你需要占用CPU时使用的程序:
1. 本机DD模拟占用(20%~25%) [推荐]
2. BOINC-docker服务(20%)(https://github.com/BOINC/boinc) [不推荐]
3. 不限制
你的选择：1
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2638  100  2638    0     0   2729      0 --:--:-- --:--:-- --:--:--  2728
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   281  100   281    0     0    688      0 --:--:-- --:--:-- --:--:--   688
Created symlink /etc/systemd/system/multi-user.target.wants/cpu-limit.service → /etc/systemd/system/cpu-limit.service.
CPU限制安装成功 脚本路径: /usr/local/bin/cpu-limit.sh
The CPU limit script has been installed at /usr/local/bin/cpu-limit.sh
需要限制内存吗? ([y]/n): y
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1483  100  1483    0     0   1427      0  0:00:01  0:00:01 --:--:--  1428
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   255  100   255    0     0    534      0 --:--:-- --:--:-- --:--:--   533
Created symlink /etc/systemd/system/multi-user.target.wants/memory-limit.service → /etc/systemd/system/memory-limit.service.
内存限制安装成功 脚本路径: /usr/local/bin/memory-limit.sh
The memory limit script has been installed at /usr/local/bin/memory-limit.sh
需要限制带宽吗? ([y]/n): y
(1) 使用speedtest-go消耗带宽(无法实时限制流量，消耗时占满机器带宽，但所有机器都能保证有占用)
(2) 使用wget下载测速文件消耗带宽(可实时限制流量，消耗时按百分比占用带宽，但可能在某些机器上执行失败无法占用)
请输入选择的选项(默认回车为选项2): 2
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  3846  100  3846    0     0   3556      0  0:00:01  0:00:01 --:--:--  3557
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   144  100   144    0     0    277      0 --:--:-- --:--:-- --:--:--   276
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   256  100   256    0     0    517      0 --:--:-- --:--:-- --:--:--   518
需要自定义带宽占用的设置吗? (y/[n]) 

使用默认配置，45分钟间隔，请求6分钟，请求速率为最大速度的30%
speedtest-cli not found, installing...
Installing speedtest-cli
Updating package management sources
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages were automatically installed and are no longer required:
  adwaita-icon-theme at-spi2-core dconf-gsettings-backend dconf-service fontconfig gsettings-desktop-schemas
  gtk-update-icon-cache gyp hicolor-icon-theme humanity-icon-theme javascript-common libatk-bridge2.0-0 libatk1.0-0
  libatk1.0-data libatspi2.0-0 libauthen-sasl-perl libavahi-client3 libavahi-common-data libavahi-common3 libc-ares2
  libcairo-gobject2 libcairo2 libclone-perl libcolord2 libcups2 libdata-dump-perl libdatrie1 libdconf1
  libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libencode-locale-perl libepoxy0 libfile-basedir-perl
  libfile-desktopentry-perl libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libfontenc1 libgl1
  libgl1-amber-dri libgl1-mesa-dri libglapi-mesa libglvnd0 libglx-mesa0 libglx0 libgraphite2-3 libgtk-3-0
  libgtk-3-bin libgtk-3-common libgtkd-3-0 libharfbuzz0b libhtml-form-perl libhtml-format-perl libhtml-parser-perl
  libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl libhttp-daemon-perl libhttp-date-perl
  libhttp-message-perl libhttp-negotiate-perl libice6 libio-html-perl libio-socket-ssl-perl libio-stringy-perl
  libipc-system-simple-perl libjs-events libjs-highlight.js libjs-inherits libjs-is-typedarray libjs-psl
  libjs-source-map libjs-sprintf-js libjs-typedarray-to-buffer liblcms2-2 libllvm11 libllvm15 liblwp-mediatypes-perl
  liblwp-protocol-https-perl libmailtools-perl libnet-dbus-perl libnet-http-perl libnet-smtp-ssl-perl
  libnet-ssleay-perl libnode-dev libnode72 libpango-1.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 libpciaccess0
  libphobos2-ldc-shared98 libpixman-1-0 librsvg2-2 librsvg2-common libsensors-config libsensors5 libsm6 libssl-dev
  libthai-data libthai0 libtie-ixhash-perl libtimedate-perl libtry-tiny-perl liburi-perl libuv1-dev libvte-2.91-0
  libvte-2.91-common libvted-3-0 libwayland-client0 libwayland-cursor0 libwayland-egl1 libwww-perl
  libwww-robotrules-perl libx11-protocol-perl libx11-xcb1 libxaw7 libxcb-dri2-0 libxcb-dri3-0 libxcb-glx0
  libxcb-present0 libxcb-randr0 libxcb-render0 libxcb-shape0 libxcb-shm0 libxcb-sync1 libxcb-xfixes0 libxcomposite1
  libxcursor1 libxdamage1 libxfixes3 libxft2 libxi6 libxinerama1 libxkbcommon0 libxkbfile1 libxml-parser-perl
  libxml-twig-perl libxml-xpathengine-perl libxmu6 libxrandr2 libxrender1 libxshmfence1 libxt6 libxtst6 libxv1
  libxxf86dga1 libxxf86vm1 node-abbrev node-ansi-regex node-ansi-styles node-ansistyles node-are-we-there-yet
  node-arrify node-asap node-asynckit node-balanced-match node-brace-expansion node-chownr node-clean-yaml-object
  node-color-convert node-color-name node-commander node-core-util-is node-decompress-response node-delayed-stream
  node-delegates node-depd node-diff node-encoding node-end-of-stream node-err-code node-escape-string-regexp
  node-fancy-log node-foreground-child node-fs.realpath node-function-bind node-get-stream node-glob node-growl
  node-has-flag node-has-unicode node-hosted-git-info node-iconv-lite node-iferr node-imurmurhash node-indent-string
  node-inflight node-inherits node-ini node-ip node-ip-regex node-is-buffer node-is-plain-obj node-is-typedarray
  node-isarray node-isexe node-json-parse-better-errors node-jsonparse node-kind-of node-lodash-packages
  node-lowercase-keys node-lru-cache node-mimic-response node-minimatch node-minimist node-minipass node-mute-stream
  node-negotiator node-npm-bundled node-once node-osenv node-p-cancelable node-p-map node-path-is-absolute
  node-process-nextick-args node-promise-inflight node-promise-retry node-promzard node-pump node-quick-lru
  node-read node-readable-stream node-resolve node-retry node-safe-buffer node-set-blocking node-signal-exit
  node-slash node-slice-ansi node-source-map node-spdx-correct node-spdx-exceptions node-spdx-expression-parse
  node-spdx-license-ids node-sprintf-js node-stealthy-require node-string-decoder node-supports-color
  node-text-table node-time-stamp node-tmatch node-typedarray-to-buffer node-universalify node-util-deprecate
  node-validate-npm-package-license node-webidl-conversions node-whatwg-fetch node-wrappy node-yallist nodejs-doc
  perl-openssl-defaults session-migration tilix tilix-common ubuntu-mono x11-common x11-utils x11-xserver-utils
  xdg-utils
Use 'apt autoremove' to remove them.
The following NEW packages will be installed:
  speedtest-cli
0 upgraded, 1 newly installed, 0 to remove and 4 not upgraded.
Need to get 24.1 kB of archives.
After this operation, 106 kB of additional disk space will be used.
Get:1 http://ap-chuncheon-1-ad-1.clouds.archive.ubuntu.com/ubuntu jammy/universe amd64 speedtest-cli all 2.1.3-2 [24.1 kB]
Fetched 24.1 kB in 1s (35.2 kB/s)        
Selecting previously unselected package speedtest-cli.
(Reading database ... 136708 files and directories currently installed.)
Preparing to unpack .../speedtest-cli_2.1.3-2_all.deb ...
Unpacking speedtest-cli (2.1.3-2) ...
Setting up speedtest-cli (2.1.3-2) ...
Processing triggers for man-db (2.10.2-1) ...
Scanning processes...                                                                                                 
Scanning candidates...                                                                                                
Scanning linux images...                                                                                              

Restarting services...
Service restarts being deferred:
 /etc/needrestart/restart.d/dbus.service
 systemctl restart getty@tty1.service
 systemctl restart networkd-dispatcher.service
 systemctl restart systemd-logind.service
 systemctl restart unattended-upgrades.service

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
Created symlink /etc/systemd/system/timers.target.wants/bandwidth_occupier.timer → /etc/systemd/system/bandwidth_occupier.timer.
带宽限制安装成功 脚本路径: /usr/local/bin/bandwidth_occupier.sh
The bandwidth limit script has been installed at /usr/local/bin/bandwidth_occupier.sh
```

## 写在最后

oracle 封机完全随缘的，这个脚本就当给自己点心里安慰。。。
