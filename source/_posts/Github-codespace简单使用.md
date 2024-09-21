---
title: Github-codespace简单使用
copyright: true
comment: false
mathjax: false
date: 2022-08-31 21:08:16
updated: 2022-08-31 21:08:16
tags:
  - github
  - vps
categories: github
keywords: github, vps, code, coding, cloud, serverless, codespace,space,spaces
permalink: GitHub-codespace/
description: 简单介绍Github-codespace的使用方法
---
很早就有资格了，今天忽然想起来，就跑一跑。

[GitHub Codespaces文档](https://docs.github.com/en/codespaces/getting-started/quickstart)

<!--more-->

## 创建

1. 在repo的code界面，点击`code`,如果是在`main`分支进行创建，则可以直接点击`Create codespace on main`,否则需要自行选择`Configure and create codespace`![20220831212506](https://cdn.zyha.cn/blog/20220831212506.png?x-oss-process=style/blog)
2. 等待初始化完成即可在浏览器中使用
3. 如需在本地vscode中使用，可以安装`vscode desktop`拓展

## Bench

```txt
/workspaces/HealthClockW (master) $ curl -sL yabs.sh | bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2022-08-20                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Wed 31 Aug 2022 12:59:30 PM UTC

Basic System Information:
---------------------------------
Uptime     : 0 days, 4 hours, 39 minutes
Processor  : Intel(R) Xeon(R) Platinum 8168 CPU @ 2.70GHz
CPU cores  : 4 @ 2693.809 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 0.0 KiB
Disk       : 91.5 GiB
Distro     : Ubuntu 20.04.4 LTS
Kernel     : 5.4.0-1086-azure

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 16.62 MB/s    (4.1k) | 153.32 MB/s   (2.3k)
Write      | 16.64 MB/s    (4.1k) | 154.13 MB/s   (2.4k)
Total      | 33.26 MB/s    (8.3k) | 307.45 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 306.46 MB/s    (598) | 290.51 MB/s    (283)
Write      | 322.74 MB/s    (630) | 309.86 MB/s    (302)
Total      | 629.20 MB/s   (1.2k) | 600.38 MB/s    (585)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed     
                |                           |                 |                
Clouvider       | London, UK (10G)          | 874 Mbits/sec   | 1.15 Gbits/sec 
Online.net      | Paris, FR (10G)           | busy            | 1.22 Gbits/sec 
Hybula          | The Netherlands (40G)     | 1.10 Gbits/sec  | 1.13 Gbits/sec 
Uztelecom       | Tashkent, UZ (10G)        | 43.7 Mbits/sec  | 659 Mbits/sec  
Clouvider       | NYC, NY, US (10G)         | 553 Mbits/sec   | 746 Mbits/sec  
Clouvider       | Dallas, TX, US (10G)      | 762 Mbits/sec   | 881 Mbits/sec  
Clouvider       | Los Angeles, CA, US (10G) | 879 Mbits/sec   | 1.07 Gbits/sec 

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 861                           
Multi Core      | 1954                          
Full Test       | https://browser.geekbench.com/v5/cpu/16985264
```

## 总结

免费的`4H8G`，在这个各个大厂都开始取消免费云资源的年代，我软可真是一股清流。
