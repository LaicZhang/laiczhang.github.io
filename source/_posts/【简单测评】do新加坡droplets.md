---
title: 【简单测评】do新加坡droplets
copyright: true
comment: true
mathjax: false
date: 2022-07-18 00:57:23
updated: 2024-06-02 00:57:23
tags:
  - 新加坡
  - do
  - vps
categories: vps
keywords: vps, do, 测评, 简单测评,cloud,sg,singapore
permalink: do-singapore-droplets-simple-evaluation/
description: I heard that the machine and network of do are quite general, let‘s see if it is true today.
---
听说do的机器和网络都挺一般的，今天来看看是不是真的。

- 2022.7.19更新 解决ubuntu无法安装fail2ban的问题
- 2024.6.2更新 更新【VPS融合怪测试】测试结果
<!--more-->
## VPS融合怪测试

```txt
版本：2024.05.24
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : DO-Regular
 CPU 核心数        : 4
 CPU 频率          : 2294.608 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 16.00 MB / L3: 0.00 KB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 553.64 MiB / 7.76 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 3.54 GiB / 154.88 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 12 hour 48 min
 负载              : 0.25, 0.08, 0.03
 系统              : Ubuntu 22.04.4 LTS (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-67-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS14061 DigitalOcean, LLC
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS14061 Digital Ocean
 IPV6 位置         : Singapore / Singapore
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:   870 Scores
 4 线程测试(多核)得分:   2349 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:  12478.28 MB/s
 单线程写测试:  12404.94 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作  写速度     读速度
 100MB-4K Block  18.4 MB/s (4503 IOPS, 5.69s)  9.4 MB/s (2283 IOPS, 11.21s)
 1GB-1M Block  337 MB/s (322 IOPS, 3.11s)  585 MB/s (557 IOPS, 1.79s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 81.13 MB/s   (20.2k) | 305.12 MB/s   (4.7k)
Write      | 81.34 MB/s   (20.3k) | 306.73 MB/s   (4.7k)
Total      | 162.47 MB/s  (40.6k) | 611.86 MB/s   (9.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 285.87 MB/s    (558) | 318.06 MB/s    (310)
Write      | 301.06 MB/s    (588) | 339.24 MB/s    (331)
Total      | 586.94 MB/s   (1.1k) | 657.31 MB/s    (641)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN10S14)
Youtube识别地域: 新加坡(SG)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN10S14)
Youtube识别地域: 新加坡(SG)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：SG 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：SG 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:     Yes (Region: SG)
 Disney+:    No
 Netflix:    Originals Only
 YouTube Premium:   Yes (Region: SG)
 Amazon Prime Video:   Yes (Region: SG)
 TVBAnywhere+:    Yes
 iQyi Oversea Region:   SG
 YouTube CDN:    Singapore 
 Netflix Preferred CDN:   Singapore  
 Spotify Registration:   Yes (Region: SG)
 Steam Currency:   SGD
 ChatGPT:    Only Available with Web Browser
 Bing Region:    SG
 Wikipedia Editability:   No
 Instagram Licensed Audio:  ->
 Instagram Licensed Audio:  No
 ---Forum---
 Reddit:    No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:     Failed (Network Connection)
 Disney+:    No
 Netflix:    Originals Only
 YouTube Premium:   Yes (Region: SG)
 Amazon Prime Video:   Unsupported
 TVBAnywhere+:    Failed (Network Connection)
 iQyi Oversea Region:   Failed
 YouTube CDN:    Singapore 
 Netflix Preferred CDN:   Singapore  
 Spotify Registration:   Yes (Region: SG)
 Steam Currency:   Failed (Network Connection)
 ChatGPT:    No
 Bing Region:    SG
 Wikipedia Editability:   No
 Instagram Licensed Audio:  ->
 Instagram Licensed Audio:  No
 ---Forum---
 Reddit:    Failed (Network Connection)
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:  【SG】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8]
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 37 [1] 93 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0076 (Low) [A] 
公司滥用得分(越低越好): 0.0176 (Elevated) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [0 7 9 A] business [8]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: No [8] Yes [0 1 5 6 A]
是否移动设备: No [5 A] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B D] Yes [E]
是否VPN: Yes [0 A E] No [1 6 7 C D]
是否Tor: No [0 1 3 6 7 8 A B D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E]
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: Yes [A E] No [7 8 D]
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 9(Blacklisted) 19(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 43 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0076 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: hosting [A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A]
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: SG 城市: Singapore 服务商: AS14061 DigitalOcean, LLC
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
35.11 ms  *  局域网
0.39 ms  *  新加坡, digitalocean.com
0.53 ms  *  美国, digitalocean.com
0.94 ms  *  新加坡, digitalocean.com
0.72 ms  *  新加坡, digitalocean.com
1.41 ms  AS1299  新加坡, telia.com
163.82 ms  AS1299  美国, 加利福尼亚州, 圣何塞, telia.com
184.55 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
223.23 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
223.05 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
1.12 ms  *  局域网
1.14 ms  *  新加坡, digitalocean.com
1.57 ms  *  新加坡, digitalocean.com
0.98 ms  *  新加坡, digitalocean.com
1.42 ms  *  新加坡, digitalocean.com
182.82 ms  AS1299  日本, 大阪府, 大阪, telia.com
177.80 ms  AS1299  美国, 加利福尼亚州, 洛杉矶, telia.com
223.48 ms  AS1299  美国, 加利福尼亚州, 洛杉矶, telia.com
229.11 ms  AS4837  中国, 北京, chinaunicom.com, 联通
229.98 ms  AS4837  中国, 北京, chinaunicom.com, 联通
240.19 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
243.88 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
247.62 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
244.94 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
1.53 ms  *  局域网
1.02 ms  *  新加坡, digitalocean.com
1.07 ms  *  美国, digitalocean.com
1.46 ms  *  新加坡, digitalocean.com
0.68 ms  *  新加坡, digitalocean.com
75.54 ms  AS1299  日本, 大阪府, 大阪, telia.com
178.02 ms  AS1299  美国, 加利福尼亚州, 洛杉矶, telia.com
180.14 ms  AS1299  美国, 加利福尼亚州, 洛杉矶, telia.com
184.48 ms  AS58453  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
239.32 ms  AS58453  中国, 香港, chinamobile.com, 移动
237.45 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
240.62 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
198.39 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
195.50 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
193.84 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置   上传速度  下载速度  延迟   丢包率
Speedtest.net  1998.61 Mbps  3863.71 Mbps  0.64   0.0%
新加坡   1999.04 Mbps  10888.80 Mbps  0.94   0.0%
中国香港  96.14 Mbps  95.13 Mbps  42.15   0.0%
联通WuXi  1337.48 Mbps  5327.61 Mbps  216.63   0.0%
联通上海5G  9.05 Mbps  8.74 Mbps  240.11   0.0%
电信Suzhou5G  771.93 Mbps  11.37 Mbps  235.96   NULL
电信合肥5G  6.24 Mbps  4.05 Mbps  222.32   0.0%
------------------------------------------------------------------------
 总共花费      : 8 分 1 秒
 时间          : Sun Jun  2 04:42:41 UTC 2024
------------------------------------------------------------------------
```

## bench.sh

```txt
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : DO-Regular
 CPU Cores          : 1 @ 2294.608 MHz
 CPU Cache          : 16384 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 24.2 GB (4.4 GB Used)
 Total Mem          : 976.8 MB (389.0 MB Used)
 Total Swap         : 1.0 GB (125.0 MB Used)
 System uptime      : 0 days, 0 hour 48 min
 Load average       : 0.00, 0.10, 0.39
 OS                 : Ubuntu 20.04.4 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-107-generic
 TCP CC             : cubic
 Virtualization     : KVM
 Organization       : AS14061 DigitalOcean, LLC
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 850 MB/s
 I/O Speed(2nd run) : 786 MB/s
 I/O Speed(3rd run) : 744 MB/s
 I/O Speed(average) : 793.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    1994.56 Mbps      9280.43 Mbps        0.75 ms     
 Los Angeles, US  44.12 Mbps        2102.75 Mbps        162.47 ms   
 Dallas, US       38.34 Mbps        2757.49 Mbps        190.18 ms   
 Montreal, CA     50.51 Mbps        882.66 Mbps         232.13 ms   
 Paris, FR        466.53 Mbps       634.67 Mbps         243.41 ms   
 Amsterdam, NL    391.77 Mbps       706.48 Mbps         234.03 ms   
 Shanghai, CN     1.90 Mbps         1216.62 Mbps        253.75 ms   
 Seoul, KR        554.74 Mbps       735.99 Mbps         74.84 ms    
 Singapore, SG    1996.03 Mbps      9232.31 Mbps        1.68 ms     
 Tokyo, JP        95.54 Mbps        516.01 Mbps         66.90 ms    
----------------------------------------------------------------------
 Finished in        : 5 min 36 sec
 Timestamp          : 2022-07-17 17:23:30 UTC
----------------------------------------------------------------------
```

## 回程测试

```txt
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.29  1.12 ms  *  LAN Address
 3  138.197.251.44  2.63 ms  *  Singapore, digitalocean.com
 4  138.197.251.37  0.94 ms  *  Singapore, digitalocean.com
 5  ae19.sg-sin01-edge2.digitalocean.com (138.197.245.14)  1.48 ms  *  Singapore, digitalocean.com
 6  ae-2.a01.sngpsi07.sg.bb.gin.ntt.net (116.51.17.193)  1.62 ms  AS2914  Singapore, ntt.com
 7  ae-12.r23.sngpsi07.sg.bb.gin.ntt.net (129.250.2.241)  1.85 ms  AS2914  Singapore, ntt.com
 8  *
 9  *
10  202.97.89.153  274.94 ms  AS4134  China, Shanghai, ChinaTelecom
11  *
12  *
13  *
14  *
15  *
16  2.254.120.106.static.bjtelecom.net (106.120.254.2)  303.95 ms  AS4847  China, Beijing, ChinaTelecom
17  bj141-147-210.bjtelecom.net (219.141.147.210)  297.39 ms  AS4847  China, Beijing, ChinaTelecom

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.53  0.60 ms  *  LAN Address
 3  138.197.251.32  0.98 ms  *  Singapore, digitalocean.com
 4  138.197.251.185  0.76 ms  *  Singapore, digitalocean.com
 5  138.197.245.6  0.79 ms  *  Singapore, digitalocean.com
 6  *
 7  *
 8  *
 9  *
10  *
11  101.95.120.101  291.77 ms  AS4812  China, Shanghai, ChinaTelecom
12  124.74.229.234  297.47 ms  AS4812  China, Shanghai, ChinaTelecom
13  ns-pd.online.sh.cn (202.96.209.133)  280.35 ms  AS4812  China, Shanghai, ChinaTelecom

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.5  0.48 ms  *  LAN Address
 3  138.197.251.32  18.67 ms  *  Singapore, digitalocean.com
 4  138.197.251.185  0.62 ms  *  Singapore, digitalocean.com
 5  138.197.245.6  0.92 ms  *  Singapore, digitalocean.com
 6  *
 7  *
 8  202.97.36.237  283.58 ms  AS4134  China, Sichuan, Chengdu, ChinaTelecom
 9  *
10  202.97.94.121  285.83 ms  AS4134  China, Guangdong, Guangzhou, ChinaTelecom
11  14.147.127.78  270.16 ms  AS134774  China, Guangdong, Shenzhen, ChinaTelecom
12  *
13  *
14  58.60.188.222  293.69 ms  AS4134  China, Guangdong, Shenzhen, ChinaTelecom

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.23  0.55 ms  *  LAN Address
 3  138.197.251.32  0.96 ms  *  Singapore, digitalocean.com
 4  138.197.251.185  0.70 ms  *  Singapore, digitalocean.com
 5  138.197.245.6  1.26 ms  *  Singapore, digitalocean.com
 6  ix-ae-10-0.thar1.svq-singapore.as6453.net (120.29.214.49)  1.51 ms  AS6453  Singapore, tatacommunications.com
 7  *
 8  if-be-10-2.ecore2.esin4-singapore.as6453.net (180.87.107.1)  171.20 ms  AS6453  Singapore, tatacommunications.com
 9  *
10  *
11  if-et-1-2.hcore1.kv8-chiba.as6453.net (120.29.211.2)  74.20 ms  AS6453  Japan, Chiba, tatacommunications.com
12  if-ae-5-7.tcore2.sv1-santaclara.as6453.net (209.58.86.18)  172.41 ms  AS6453  United States, California, Santa Clara, tatacommunications.com
13  if-ae-26-2.tcore1.sqn-sanjose.as6453.net (209.58.86.37)  176.41 ms  AS6453  United States, California, San Jose, tatacommunications.com
14  63.243.205.90  180.23 ms  AS6453  United States, California, San Jose, tatacommunications.com
15  219.158.96.41  342.03 ms  AS4837  China, Beijing, ChinaUnicom
16  219.158.16.81  335.70 ms  AS4837  China, Beijing, ChinaUnicom
17  *
18  202.96.12.90  238.01 ms  AS4808  China, Beijing, ChinaUnicom
19  202.106.50.1  240.48 ms  AS4808  China, Beijing, ChinaUnicom

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.29  0.82 ms  *  LAN Address
 3  138.197.251.180  7.47 ms  *  Singapore, digitalocean.com
 4  138.197.251.175  17.77 ms  *  Singapore, digitalocean.com
 5  138.197.245.2  0.90 ms  *  Singapore, digitalocean.com
 6  ix-ae-10-0.thar1.svq-singapore.as6453.net (120.29.214.49)  1.06 ms  AS6453  Singapore, tatacommunications.com
 7  *
 8  if-be-10-2.ecore2.esin4-singapore.as6453.net (180.87.107.1)  179.70 ms  AS6453  Singapore, tatacommunications.com
 9  *
10  *
11  if-ae-2-2.tcore1.lvw-losangeles.as6453.net (66.110.59.1)  179.44 ms  AS6453  United States, California, Los Angeles, tatacommunications.com
12  66.110.59.118  191.05 ms  AS6453  United States, California, Los Angeles, tatacommunications.com
13  219.158.16.97  337.95 ms  AS4837  China, Beijing, ChinaUnicom
14  219.158.5.198  236.03 ms  AS4837  China, Shanghai, ChinaUnicom
15  219.158.8.189  238.93 ms  AS4837  China, Shanghai, ChinaUnicom
16  219.158.7.125  239.98 ms  AS4837  China, Shanghai, ChinaUnicom
17  *
18  139.226.201.146  238.56 ms  AS17621  China, Shanghai, ChinaUnicom
19  210.22.97.1  241.19 ms  AS17621  China, Shanghai, ChinaUnicom

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.31  1.00 ms  *  LAN Address
 3  138.197.251.182  0.99 ms  *  Singapore, digitalocean.com
 4  138.197.251.173  0.82 ms  *  Singapore, digitalocean.com
 5  138.197.245.6  0.86 ms  *  Singapore, digitalocean.com
 6  ix-ae-10-0.thar1.svq-singapore.as6453.net (120.29.214.49)  0.90 ms  AS6453  Singapore, tatacommunications.com
 7  if-be-46-2.ecore2.svq-singapore.as6453.net (120.29.214.11)  178.52 ms  AS6453  Singapore, tatacommunications.com
 8  if-be-10-2.ecore2.esin4-singapore.as6453.net (180.87.107.1)  179.62 ms  AS6453  Singapore, tatacommunications.com
 9  *
10  if-et-23-2.hcore2.kv8-chiba.as6453.net (180.87.67.33)  76.16 ms  AS6453  Japan, Chiba, tatacommunications.com
11  *
12  if-ae-2-2.tcore1.lvw-losangeles.as6453.net (66.110.59.1)  187.41 ms  AS6453  United States, California, Los Angeles, tatacommunications.com
13  66.110.59.118  199.83 ms  AS6453  United States, California, Los Angeles, tatacommunications.com
14  219.158.17.81  362.90 ms  AS4837  China, Beijing, ChinaUnicom
15  219.158.22.142  254.80 ms  AS4837  China, Shanghai, ChinaUnicom
16  219.158.113.122  264.14 ms  AS4837  China, Shanghai, ChinaUnicom
17  *
18  *
19  *
20  120.80.144.38  294.62 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom
21  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  295.54 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.3  0.75 ms  *  LAN Address
 3  138.197.251.170  1.03 ms  *  Singapore, digitalocean.com
 4  138.197.251.163  0.60 ms  *  Singapore, digitalocean.com
 5  ae21.sg-sin01-edge2.digitalocean.com (138.197.245.10)  0.95 ms  *  Singapore, digitalocean.com
 6  unknown.telstraglobal.net (210.176.138.132)  1.92 ms  AS4637  Singapore, telstra.com
 7  223.119.48.2  5.55 ms  AS58453  Singapore, ChinaMobile
 8  223.120.22.21  78.25 ms  AS58453  China, Guangdong, Guangzhou, ChinaMobile
 9  221.183.55.114  100.00 ms  AS9808  China, Beijing, ChinaMobile
10  221.183.25.201  107.75 ms  AS9808  China, Beijing, ChinaMobile
11  221.183.89.118  119.42 ms  AS9808  China, Beijing, ChinaMobile
12  221.183.46.174  114.01 ms  AS9808  China, Beijing, ChinaMobile
13  *
14  cachedns03.bj.chinamobile.com (221.179.155.161)  96.86 ms  AS56048  China, Beijing, ChinaMobile

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.55  0.63 ms  *  LAN Address
 3  138.197.251.170  1.05 ms  *  Singapore, digitalocean.com
 4  138.197.251.161  1.18 ms  *  Singapore, digitalocean.com
 5  ae19.sg-sin01-edge2.digitalocean.com (138.197.245.14)  0.83 ms  *  Singapore, digitalocean.com
 6  unknown.telstraglobal.net (210.176.138.132)  1.45 ms  AS4637  Singapore, telstra.com
 7  223.119.48.2  22.23 ms  AS58453  Singapore, ChinaMobile
 8  223.120.22.5  79.60 ms  AS58453  China, Shanghai, ChinaMobile
 9  221.183.55.26  87.66 ms  AS9808  China, Shanghai, ChinaMobile
10  221.176.22.205  84.22 ms  AS9808  China, Shanghai, ChinaMobile
11  221.176.22.13  79.40 ms  AS9808  China, Shanghai, ChinaMobile
12  111.24.3.93  80.09 ms  AS9808  China, Shanghai, ChinaMobile
13  111.24.4.106  73.14 ms  AS9808  China, Shanghai, ChinaMobile
14  221.181.125.101  78.03 ms  AS24400  China, Shanghai, ChinaMobile
15  211.136.190.234  78.94 ms  AS24400  China, Shanghai, ChinaMobile
16  211.136.112.252  85.26 ms  AS24400  China, Shanghai, ChinaMobile
17  211.136.112.200  83.53 ms  AS24400  China, Shanghai, ChinaMobile

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.29  1.08 ms  *  LAN Address
 3  138.197.251.168  0.93 ms  *  Singapore, digitalocean.com
 4  138.197.251.163  0.67 ms  *  Singapore, digitalocean.com
 5  ae21.sg-sin01-edge2.digitalocean.com (138.197.245.10)  1.04 ms  *  Singapore, digitalocean.com
 6  unknown.telstraglobal.net (210.176.138.132)  1.34 ms  AS4637  Singapore, telstra.com
 7  *
 8  *
 9  202.84.153.26  47.37 ms  AS4637  China, Hong Kong, telstra.com
10  unknown.telstraglobal.net (134.159.128.214)  93.10 ms  AS4637  China, Hong Kong, telstra.com
11  *
12  223.120.2.86  96.64 ms  AS58453  China, Guangdong, Guangzhou, ChinaMobile
13  *
14  221.183.25.118  89.33 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
15  221.176.22.105  98.12 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
16  *
17  221.183.71.70  125.98 ms  AS9808  China, Guangdong, ChinaMobile
18  221.183.110.166  119.51 ms  AS9808  China, ChinaMobile
19  ns6.gd.cnmobile.net (120.196.165.24)  124.26 ms  AS56040  China, Guangdong, Shenzhen, ChinaMobile

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  *
 2  10.76.69.3  1.19 ms  *  LAN Address
 3  138.197.251.182  0.99 ms  *  Singapore, digitalocean.com
 4  138.197.251.175  0.61 ms  *  Singapore, digitalocean.com
 5  *
 6  *
 7  223.120.3.86  37.83 ms  AS58453  China, Hong Kong, ChinaMobile
 8  223.119.81.94  37.77 ms  AS58453  China, Hong Kong, ChinaMobile
 9  101.4.114.181  74.28 ms  AS4538  China, Beijing, CHINAEDU
10  *
11  101.4.118.213  73.80 ms  AS4538  China, Beijing, CHINAEDU
12  101.4.112.14  89.12 ms  AS4538  China, Shaanxi, Xi'an, CHINAEDU
13  *
14  *
15  *
16  *
17  *
18  202.112.14.151  100.18 ms  AS24355  China, Sichuan, Chengdu, CHINAEDU

----------------------------------------------------------------------
```

## 回程路由

```txt
正在测试,请稍等...
——————————————————————————————

目标:北京电信[219.141.136.12]   回程线路:电信163

目标:北京联通[202.106.50.1]     回程线路:联通169

目标:北京移动[221.179.155.161]  回程线路:移动cmi

目标:上海电信[202.96.209.133]   回程线路:电信163

目标:上海联通[210.22.97.1]      回程线路:联通169

目标:上海移动[211.136.112.200]  回程线路:其他

目标:深圳电信[58.60.188.222]    回程线路:电信163

目标:深圳联通[210.21.196.6]     回程线路:联通AS4837

目标:深圳移动[120.196.165.24]   回程线路:移动CMI


——————————————————————————————
本脚本测试结果为TCP回程路由,非ICMP回程路由 仅供参考 谢谢
```

## ping测试

### 全球ping测试

![2022-07-18 11:18:53](https://pic.rmb.bdstatic.com/bjh/2b669b610cbef07f232074ad53db2911.png)

![2022-08-16 14:11:19](https://pic.rmb.bdstatic.com/bjh/f34c533dc55c79db77715fc1685159d6.png)

### 国内ping测试

![2022-07-25 23:28:49](https://pic.rmb.bdstatic.com/bjh/e24bc9b8342b93fe03b192e1a7354402.png)

## 流媒体解锁测试

```txt
 ** 测试时间: Mon Jul 18 03:15:03 UTC 2022

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: DigitalOcean (188.166.*.*) 


============[ Multination ]============
 Dazn:                                  No
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   SG
 Viu.com:                               Yes (Region: SG)
 YouTube CDN:                           Singapore 
 Netflix Preferred CDN:                 Singapore  
 Spotify Registration:                  No
 Steam Currency:                        SGD
=======================================


 ** 正在测试IPv6解锁情况 
--------------------------------
 ** 您的网络为: Digital Ocean (2400:6180:0:*:*) 


============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               Yes (Region: SG)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Singapore 
 Netflix Preferred CDN:                 Singapore  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
=======================================
本次测试已结束，感谢使用此脚本
```

## 无法安装fail2ban

Using Ubuntu 18.04, first disable systemd-resolved service.

```bash
sudo systemctl disable systemd-resolved.service
```

Stop the service

```bash
sudo systemctl stop systemd-resolved.service
```

Then, remove the link to /run/systemd/resolve/stub-resolv.conf in /etc/resolv.conf

```sudo rm /etc/resolv.conf```

Add a manually created resolv.conf in /etc/

```sudo vim /etc/resolv.conf```

Add your prefered DNS server there

```nameserver 8.8.8.8```

再次执行`sudo apt install fail2ban`

## 总结

是真的。

do的网络质量确实比之前测试的[aws](../aws-singapore-lightsail-simple-evaluation/)和[腾讯云](../tencentcloud-mumbai-lighthouse-simple-evaluation/)更差，直连延迟在1000ms左右，如果是建站或者是fq都建议搭配cdn使用。

PS： do的控制台是我用过的vps控制台里体验最拉胯的。

PSS：搭配 github 学生包可以领取100美金的券，一年有效。而1h1G的机器6美金一个月，差不多第一年就可以白嫖了。

PSSS： 通过[邀请链接](https://m.do.co/c/3f243472ca20)注册，前两个月好像也可以使用100美金的代金券。
[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=3f243472ca20&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
