---
title: 【简单测评】myprepaid德国法兰克福
copyright: true
comment: false
mathjax: false
date: 2025-01-14 12:45:08
updated: 2025-02-05 00:15:08
tags:
  - vps
  - de
  - 评测
categories: vps
keywords: vps,de,评测,frankfurt,test,speed, speedtest
permalink: myprepaid-de-vps-simple-evaluation/
description: myprepaid德国法兰克福vps简单评测，此机型虽然配置高，但实际cpu性能一般。不过网络不错。
---
据说是一个低调的商家，最早的公告是22年发的。

月付1.75欧元（约13rmb），4c/4g/100g/无限流量，看起来还行，就先冲来一个月看看情况。

发给我的邮件给的自带密码是错的，还需要登上面板更改ssh密码。

控制面板默认是德语的，需要自己改一下设置，即便改成中文也会有部分仍然为德文，所以建议英文。当然也可使用网页翻译。

- 2025.1.14更新，系统自带dns有问题，需要自己改一下
- 2025.1.15更新，经过一天的等待，找商家将cpu从`Intel(R) Xeon(R) CPU E5-2697 v2`更换成了`Intel(R) Xeon(R) Gold 6154 CPU @ 3.00GHz`，虽然实际性能和跑分并没提高多少。。。
- 2025.2.6 更新，更新测试结果和半月使用体会。
<!--more-->

## 修改dns

```bash
vi update_dns.sh
```

- update_dns.sh

```bash
#!/bin/bash

# 检查是否以 root 权限运行
if [[ $EUID -ne 0 ]]; then
   echo "此脚本必须以 root 权限运行" 
   exit 1
fi

IPV4_DNS1="8.8.8.8" 
IPV4_DNS2="1.1.1.1"

IPV6_DNS1="2001:4860:4860::8888"
IPV6_DNS2="2606:4700:4700::1111"

cp /etc/resolv.conf /etc/resolv.conf.bak

echo "" > /etc/resolv.conf

echo "nameserver $IPV4_DNS1" >> /etc/resolv.conf
echo "nameserver $IPV4_DNS2" >> /etc/resolv.conf
echo "nameserver $IPV6_DNS1" >> /etc/resolv.conf
echo "nameserver $IPV6_DNS2" >> /etc/resolv.conf

if command -v nmcli &> /dev/null
then
  echo "Network Manager 已安装，正在重新加载配置..."
  nmcli networking off
  nmcli networking on
  echo "Network Manager 配置已刷新"
else
  echo "Network Manager 未安装，可能需要重启网络服务"
fi

if systemctl is-active --quiet systemd-resolved
then
  echo "systemd-resolved 正在运行，正在重启服务..."
  systemctl restart systemd-resolved
  echo "systemd-resolved 已重启"
fi

echo "DNS 配置已更新，可能需要重启网络服务或重启系统以使更改生效"

echo "当前 DNS 配置:"
cat /etc/resolv.conf
```

```bash
sudo bash update_dns.sh
```

### nws.sh

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
 CPU Model          : Intel(R) Xeon(R) CPU E5-2697 v2 @ 2.70GHz
 CPU Cores          : 4 @ 2693.508 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 98.3 GB (1.3 GB Used)
 Total RAM          : 3.8 GB (258.9 MB Used)
 System uptime      : 0 days, 0 hour 2 min
 Load average       : 0.31, 0.09, 0.02
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : Unknown
 ASN                : Unknown
---------------------------------------------------------------------------
 Speedtest.net (Region: CHINA | 中華人民共和國)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: GHOSTnet 

 Nearest          4.44 ms     0.0%    904.72 Mbps    906.85 Mbps    Schlueter Onlinedienste - Ruethen 

 CU - Shanghai    166.70 ms   59.7%   953.62 Mbps    231.25 Mbps    China Unicom 5G - Shanghai 
 CM - Beijing     255.26 ms   0.0%    908.12 Mbps    196.30 Mbps    China Mobile Group Beijing Co.Ltd - Beijing 
 CU - Beijing     FAILED                                                        
 CT - Nanjing     159.56 ms   0.0%    929.79 Mbps    35.42 Mbps     China Telecom JiangSu 5G - Nanjing 
 CT - Shenzen     FAILED                                                        
 CT - Zhenjiang   164.46 ms   N/A     916.43 Mbps    124.71 Mbps    China Telecom JiangSu 5G - Zhenjiang 
 CU - Shenyang    FAILED                                                        
 CT - Suzhou      338.01 ms   N/A     946.20 Mbps    173.66 Mbps    China Telecom JiangSu 5G - Suzhou 
 CT - Yangzhou    FAILED                                                        
 CM - Hangzhou    297.37 ms           881.28 Mbps    FAILED         China Mobile Zhejiang 5G - Hangzhou 
 CT - Hangzhou    207.01 ms   N/A     311.02 Mbps    1.18 Mbps      浙江电信 - HangZhou 
 CU - Zhengzhou   FAILED                                                        
 CT - Changsha    FAILED                                                        
 CU - Changsha    FAILED                                                        
 CM - Chengdu     311.95 ms   N/A     845.39 Mbps    1.93 Mbps      China Mobile Group Sichuan - Chengdu 
 CU - Wu Xi       150.63 ms   0.0%    961.80 Mbps    243.37 Mbps    China Unicom - Wu Xi 
 CT - Hefei       FAILED                                                        
 CT - TianJin     FAILED                                                        
 CT - XiNing      FAILED                                                        
 CT - NingBo      165.00 ms   N/A     940.24 Mbps    3.01 Mbps      浙江电信 - NingBo 
 CM - Guangzhou   FAILED                                                        

 CM - Kwai Chung  203.78 ms   0.0%    948.54 Mbps    208.75 Mbps    CMHK Mobile Service - Hong Kong 
 CM - Hong Kong   190.56 ms   0.0%    936.99 Mbps    202.21 Mbps    CMHK Broadband - Hong Kong 
 CU - Hong Kong   FAILED                                                        
 Hong Kong        FAILED                                                        
 Hong Kong        180.37 ms   0.0%    870.98 Mbps    60.01 Mbps     Misaka Network, Inc. - Hong Kong 
---------------------------------------------------------------------------
 Avg DL Speed       : 875.37 Mbps
 Avg UL Speed       : 170.62 Mbps

 Total DL Data      : 17.23 GB
 Total UL Data      : 2.74 GB
 Total Data         : 19.98 GB
---------------------------------------------------------------------------
 Duration           : 10 min 59 sec
 System Time        : 14/01/2025 - 00:17:36 EST
 Total Script Runs  : 95474
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1736831727_Q8IN51_CHINA.txt
---------------------------------------------------------------------------
```

### 融合怪

- 更新前）

```txt
-------------------------------------VPS融合怪测试-------------------------------------
版本：v0.1.4
测评频道: https://t.me/vps_reviews
Go项目地址：https://github.com/oneclickvirt/ecs
Shell项目地址：https://github.com/spiritLHLS/ecs
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : Intel(R) Xeon(R) CPU E5-2697 v2 @ 2.70GHz
 CPU 数量            : 4 Virtual CPU(s)
 CPU 缓存            : 16384 KB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 350.07 MB / 3.82 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 1.39 GB / 98.31 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.0 [x86_64] 
 内核                : 6.1.0-9-amd64
 系统在线时间        : 0 days, 00 hours, 31 minutes
 时区                : EST
 负载                : 0.03 / 0.18 / 0.20
 虚拟化架构          : KVM
 NAT类型             : Inconclusive
 TCP加速方式         : cubic
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:    800.16
4 线程测试(多核)得分:   3090.60
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 13700.37 MB/s(14.37K IOPS, 5s)
单线程顺序读速度: 15731.61 MB/s(16.50K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       170.52 MB/s(42.6k)      170.97 MB/s(42.7k)      341.50 MB/s(85.4k)      
/root         64k      1.15 GB/s(18.0k)        1.16 GB/s(18.1k)        2.31 GB/s(36.1k)        
/root         512k     2.15 GB/s(4191)         2.26 GB/s(4413)         4.41 GB/s(8604)         
/root         1m       2.66 GB/s(2597)         2.84 GB/s(2770)         5.50 GB/s(5367)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：荷兰
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：NL 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      NO (Network Err)
Disney+                   NO (Network Err)
Netflix                   NO (Network Err)
Netflix CDN               NO (Network Err)
YouTube Region            NO (Network Err)
YouTube CDN               NO (Network Err)
Amazon Prime Video        NO (Network Err)
Paramount+                NO (Network Err)
TVBAnywhere+              NO (Network Err)
IQiYi                     NO (Network Err)
Viu.com                   NO (Network Err)
Spotify Registration      NO (Network Err)
Steam Store               NO (Network Err)
ChatGPT                   NO
Sora                      NO (Network Err)
Gemini                    NO (Network Err)
MetaAI                    NO (Network Err)
Wikipedia Editability     NO (Network Err)
Reddit                    NO (Network Err)
TikTok                    NO (Network Err)
Bing Region               NO (Network Err)
Instagram Licensed Audio  NO (Network Err)
KOCOWA                    NO (Network Err)
SonyLiv                   NO (Network Err)
OneTrust                  NO (Network Err)
GoogleSearch              NO (Network Err)
--------------------------------------IP质量检测--------------------------------------
--------------------------------------邮件端口检测--------------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✘     ✘     ✘     ✘     ✘    
163       ✘     ✘     ✘     ✘     ✘     ✘    
Sohu      ✘     ✘     ✘     ✘     ✘     ✘    
Yandex    ✘     ✘     ✘     ✘     ✘     ✘    
Gmail     ✘     ✘     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✘     ✘     ✘     ✘    
Office365 ✘     ✘     ✘     ✘     ✘     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✘     ✘     ✘     ✘     ✘    
MailRU    ✘     ✘     ✘     ✘     ✘     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✘     ✘     ✘     ✘    
Sina      ✘     ✘     ✘     ✘     ✘     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 104.21.80.1 - 108.54ms - Misaka.BER
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.46 ms      *                             
0.43 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
0.39 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
*
4.41 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
4.94 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
5.35 ms      AS4134     [DE-CIX]           德国, 黑森, 美因河畔法兰克福, www.chinatelecom.com.cn 
293.09 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
240.89 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
190.06 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
196.67 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.43 ms      *                             
0.42 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
0.31 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
*
4.37 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
4.84 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
7.68 ms      AS3320                        德国, 黑森, 美因河畔法兰克福, globalcarrier.telekom.com 
5.27 ms      AS3320     [DTAG-DIAL13]      德国, 黑森, 美因河畔法兰克福, globalcarrier.telekom.com 
*
149.12 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
139.53 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn 
*
*
197.53 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
198.06 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
213.34 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.39 ms      *                             
0.34 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
*
4.39 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
4.83 ms      AS1299     [ARELION-NET]      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, arelion.com 
4.54 ms      AS1299     [ARELION-NET]      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, arelion.com 
4.88 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
64.60 ms     AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
8.36 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
21.33 ms     AS1299     [ARELION-NET]      德国, 黑森, 美因河畔法兰克福, arelion.com 
5.11 ms      AS58453    [CMI-INT]          德国, 黑森, 美茵河畔法兰克福, cmi.chinamobile.com  移动
273.30 ms    AS58453    [CMI-INT]          德国, 黑森, 美因河畔法兰克福, cmi.chinamobile.com  移动
270.51 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
280.76 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
281.97 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
272.23 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   912.96 Mbps     912.44 Mbps     7.73 ms         0.0%            
----------------------------------------------------------------------------------
花费          : 10 分 48 秒
时间          : Tue Jan 14 00:46:22 EST 2025
----------------------------------------------------------------------------------
```

- 更新后

```txt
-------------------------------------VPS融合怪测试-------------------------------------
版本：v0.1.4
测评频道: https://t.me/vps_reviews
Go项目地址：https://github.com/oneclickvirt/ecs
Shell项目地址：https://github.com/spiritLHLS/ecs
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : Intel(R) Xeon(R) Gold 6154 CPU @ 3.00GHz
 CPU 数量            : 4 Virtual CPU(s)
 CPU 缓存            : 16384 KB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 358.95 MB / 3.82 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 1.78 GB / 98.31 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.0 [x86_64] 
 内核                : 6.1.0-9-amd64
 系统在线时间        : 0 days, 00 hours, 10 minutes
 时区                : EST
 负载                : 0.00 / 0.11 / 0.08
 虚拟化架构          : KVM
 NAT类型             : Inconclusive
 TCP加速方式         : cubic
 IPV4 ASN            : AS49581 Ferdinand Zink Trading AS Tube-hosting
 IPV4 Location       : Istanbul / İstanbul / Türkiye
 IPV6 ASN            : AS49581 Ferdinand Zink Trading AS Tube-hosting
 IPV6 Location       : Istanbul / İstanbul / Türkiye
 IPv6 子网掩码       : /64
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   1050.61
4 线程测试(多核)得分:   3982.70
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 15821.55 MB/s(16.59K IOPS, 5s)
单线程顺序读速度: 20658.65 MB/s(21.66K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       187.59 MB/s(46.9k)      188.08 MB/s(47.0k)      375.67 MB/s(93.9k)      
/root         64k      2.23 GB/s(34.9k)        2.24 GB/s(35.1k)        4.48 GB/s(69.9k)        
/root         512k     4.03 GB/s(7869)         4.24 GB/s(8287)         8.27 GB/s(16.2k)        
/root         1m       9.27 GB/s(9050)         9.88 GB/s(9652)         19.15 GB/s(18.7k)       
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 104.21.64.1 - 82.87ms - Misaka.BER
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.45 ms      *                             
0.39 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
*
4.49 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
4.91 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
6.89 ms      AS4134     [DE-CIX]           德国, 黑森, 美因河畔法兰克福, www.chinatelecom.com.cn 
191.77 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
190.02 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
*
201.15 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.41 ms      *                             
0.31 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
*
4.59 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
4.94 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
6.24 ms      AS3320                        德国, 黑森, 美因河畔法兰克福, globalcarrier.telekom.com 
5.50 ms      AS3320     [DTAG-DIAL13]      德国, 黑森, 美因河畔法兰克福, globalcarrier.telekom.com 
5.03 ms      AS3320                        德国, 黑森, 美因河畔法兰克福, globalcarrier.telekom.com 
142.61 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
*
*
*
204.76 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
210.81 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
188.07 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.30 ms      *                             
0.28 ms      AS207252                      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, RealtoxMedia.de 
*
4.49 ms      AS24961                       德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, wiit.cloud 
4.76 ms      AS1299     [ARELION-NET]      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, arelion.com 
4.84 ms      AS1299     [ARELION-NET]      德国, 北莱茵-威斯特法伦州, 杜塞尔多夫, arelion.com 
4.81 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
5.28 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
7.43 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
9.63 ms      AS1299     [ARELION-NET]      德国, 黑森, 美因河畔法兰克福, arelion.com 
5.13 ms      AS58453    [CMI-INT]          德国, 黑森, 美茵河畔法兰克福, cmi.chinamobile.com  移动
271.72 ms    AS58453    [CMI-INT]          德国, 黑森, 美因河畔法兰克福, cmi.chinamobile.com  移动
274.04 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
271.60 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
274.78 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
274.52 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
272.43 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
法兰克福        974.90 Mbps     626.97 Mbps     5.06 ms         0.0%            
洛杉矶          200.47 Mbps     844.60 Mbps     202.90 ms       0.0%            
新加坡          88.57 Mbps      503.47 Mbps     170.58 ms       0.7%            
日本东京        119.68 Mbps     638.24 Mbps     255.45 ms       0.0%            
----------------------------------------------------------------------------------
花费          : 7 分 52 秒
时间          : Tue Jan 14 11:39:09 EST 2025
----------------------------------------------------------------------------------
测试结果已写入 goecs.txt
上传成功!
Http URL:  http://hpaste.spiritlhl.net/#/show/leMaF.txt
Https URL: https://paste.spiritlhl.net/#/show/leMaF.txt
```

即使更换了cpu，其实性能也没有得到太大提高，所以仍然不适合高性能要求。

## 总结

cpu性能一般（与同类机器相比），三网直连中联通网络连接较好。

适合个人建站。

用了半个月后的体验：时不时连不上ssh，需要打开官网控制台，手动重启vps。

应该还是会续费，毕竟便宜，就当备用了。
