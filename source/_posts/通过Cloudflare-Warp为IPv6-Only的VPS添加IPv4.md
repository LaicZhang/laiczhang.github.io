---
title: 通过Cloudflare-Warp为IPv6-Only的VPS添加IPv4
copyright: true
comment: false
mathjax: false
date: 2024-06-23 08:34:08
updated: 2024-06-23 08:34:08
tags:
  - cf
  - vps
categories: vps
keywords: cf,warp,ipv6,ipv4,only,vps,hz,free,plus,cloudflare
permalink: add-ipv4-to-ipv6-only-vps-with-cloudflare-warp/
description:
---
大佬送了个免费小🐔，奈何只支持ipv6，很不方便，所以通过warp来添加ipv4。

纯IPv6的VPS，意思就是没有IPv4入口和出口。

没有IPv4入口，意味着大概率无法直接通过SSH访问这个机器去操作，除非你本地网络是支持IPv6的，反正我家里和公司的网络都不支持，没得玩。

<!--more-->
## 查看当前网络是否支持ipv6

```bash
❯ curl -6 ip.sb
2408:8466:340:5d5c:3d79:9428:b928:xxx
```

如果有ipv6，则继续往下看。

如果没有，建议使用手机开热点连接。

## 一键脚本安装warp

首次运行

```bash
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh [option] [lisence/url/token]
```

再次运行

```bash
warp [option] [lisence]
```

  | [option] 变量1 变量2 | 具体动作说明 |
  | ----------------- | --------------- |
  | h | 帮助 |
  | 4 | 原无论任何状态 -> WARP IPv4 |
  | 4 lisence name | 把 WARP+ Lisence 和设备名添加进去，如 ```bash menu.sh 4 N5670ljg-sS9jD334-6o6g4M9F Goodluck``` |
  | 6 | 原无论任何状态 -> WARP IPv6 |
  | d | 原无论任何状态 -> WARP 双栈 |
  | o | WARP 开关，脚本主动判断当前状态，自动开或关 |
  | u | 卸载 WARP |
  | n | 断网时，用于刷WARP网络 (WARP bug) |
  | b | 升级内核、开启BBR及DD |
  | a | 免费 WARP 账户升级 WARP+ |
  | a lisence | 在上面基础上把 WARP+ Lisence 添加进去，如 ```bash menu.sh a N5670ljg-sS9jD334-6o6g4M9F``` |
  | p | 刷 Warp+ 流量 |
  | c | 安装 WARP Linux Client，开启 Socks5 代理模式 |
  | l | 安装 WARP Linux Client，开启 WARP 模式 |
  | c lisence | 在上面基础上把 WARP+ Lisence 添加进去，如 ```bash menu.sh c N5670ljg-sS9jD334-6o6g4M9F``` |
  | r | WARP Linux Client 开关 |
  | v | 同步脚本至最新版本 |
  | i | 更换 WARP IP |
  | e | 安装 iptables + dnsmasq + ipset 分流流媒体方案 |
  | w | 安装 WireProxy 解决方案 |
  | y | WireProxy 开关 |
  | k | 切换 wireguard 内核 / wireguard-go-reserved |
  | g | 切换 warp 全局 / 非全局 或首次以 非全局 模式安装 |
  | s | s 4/6/d，切换优先级 warp IPv4 / IPv6 / 默认  |
  | 其他或空值| 菜单界面 |

## 手动安装官方warp-cli

### Ubuntu

```bash
# Install lsb
sudo apt update && sudo apt install lsb-release gpg curl wget

# Add cloudflare gpg key
curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg | sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg

# Add this repo to your apt repositories
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflare-client.list

# Install
sudo apt update && sudo apt install cloudflare-warp
```

### Debian

```bash
# Install lsb
apt update && apt install lsb-release gpg curl wget

# Add cloudflare gpg key
curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg | gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg

# Add this repo to your apt repositories
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/cloudflare-client.list

# Install
apt update && apt install cloudflare-warp
```

### CentOS

```bash
# Add cloudflare-warp.repo to /etc/yum.repos.d/
curl -fsSl https://pkg.cloudflareclient.com/cloudflare-warp-ascii.repo | tee /etc/yum.repos.d/cloudflare-warp.repo

# Update repo
yum update

# Install
yum install cloudflare-warp
```

## 连接 warp

### 注册warp免费账号

```bash
warp-cli register
```

输入 `y` 回车同意 `TOS`，出现 `success` 即成功

### 添加排除路由

```bash
warp-cli add-excluded-route ::0/0
```

```bash
warp-cli mode warp
warp-cli connect
warp-cli enable-always-on
```

### 测试连接

```bash
root@selfish-criticism:~# curl -4 ip.sb
104.28.xxx.xxx
```

成功添加ipv4。

## 写在最后

此方法得到的ip由于多人共用，可能存在滥用现象，不要用来访问重要站点，避免被判定为欺诈/滥用行为。

由于ipv6还没得到大力推广，用的人相对更少，所以ipv6的直连体验在部分地区优于ipv4。个人简单使用还是值得尝试的。

最后，祝大家都能愉快的玩耍ipv6。
