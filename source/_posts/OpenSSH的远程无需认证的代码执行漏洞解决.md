---
title: OpenSSH的远程无需认证的代码执行漏洞解决
copyright: true
comment: false
mathjax: false
date: 2024-07-02 07:36:12
updated: 2024-07-02 07:36:12
tags:
  - 网络
  - 安全
categories: 安全
keywords: OpenSSH,漏洞,代码执行,远程命令执行,root,Debian,Debian12,vps,CentOS7,Ubuntu22,安全,fail2ban,22,ssh
permalink: Solution-to-the-remote-code-execution-vulnerability-in-OpenSSH-without-authentication
description:
---
作为 Debian 12 + Ubuntu 22 钉子户，我的 VPS 全中……大家快去更新吧。

PS：有意思的是，centos7昨天刚停止维护。更有意思的是，由于centos7过于古老，这次漏洞不受影响。。。

<!-- more -->
## 说明

该漏洞是由于OpenSSH服务 (sshd) 中的信号处理程序竞争问题，未经身份验证的攻击者可以利用此漏洞在Linux系统上以root身份执行任意代码。目前该漏洞技术细节已在互联网上公开，该漏洞影响范围较大，建议尽快做好自查及防护。

## 影响版本

8.5p1 <= OpenSSH < 9.8p1

就在此次影响范围内。

ubuntu在以下版本已解决此漏洞：

```txt
Ubuntu 24.04
openssh-client - 1:9.6p1-3ubuntu13.3
openssh-server - 1:9.6p1-3ubuntu13.3

Ubuntu 23.10
openssh-client - 1:9.3p1-1ubuntu3.6
openssh-server - 1:9.3p1-1ubuntu3.6

Ubuntu 22.04
openssh-client - 1:8.9p1-3ubuntu0.10
openssh-server - 1:8.9p1-3ubuntu0.10
```

## 完全解决方案

### 一键脚本

- 论坛看到的，安全性未知。

```bash
apt update && apt install libssl-dev -y && wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.8p1.tar.gz && tar -zvxf openssh-9.8p1.tar.gz && cd openssh-9.8p1&& ./configure && make && make install && cd .. && rm -rf openssh-9.8p1 && rm openssh-9.8p1.tar.gz
```

成功解决

```bash
root@racknerd-782f55:~# ssh -V
OpenSSH_8.9p1 Ubuntu-3ubuntu0.10, OpenSSL 3.0.2 15 Mar 2022
```

### 手动安装

`apt update && apt upgrade -y` 更新系统后，可以命令 `ssh -V` 查看版本号 `OpenSSH_9.2p1 Debian-2+deb12u3` 为最新版，注意后面u3，这是无问题版本。

否则，说明你的Debian没有安全源，导致不能更新到最新版，可以先添加安全源再更新：

```bash
vi /etc/apt/sources.list
```

`i`切换为插入模式，在文件末尾添加下面内容：

```bash
deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb-src http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
```

`esc`退出插入模式，`:wq`保存并退出。

然后再更新系统

```bash
apt update && apt upgrade -y 
```

就好了。

## 另外

复杂密码+非22端口+fail2ban这一套组合拳，也可以有效防范此漏洞。

根据大佬的评价，此漏洞针对32位系统可能需要一天时间，针对64位系统可能需要一周时间，所以时间还是很充裕的。

## 相关

- [regreSSHion: Remote Unauthenticated Code Execution Vulnerability in OpenSSH server](https://blog.qualys.com/vulnerabilities-threat-research/2024/07/01/regresshion-remote-unauthenticated-code-execution-vulnerability-in-openssh-server)
- [openssh官方补丁](https://www.openssh.com/releasenotes.html)
- [Debian发行版安全更新跟踪与公告](https://security-tracker.debian.org/tracker/DSA-5724-1)
- [Ubuntu发行版安全更新跟踪与公告](https://ubuntu.com/security/notices/USN-6859-1)
