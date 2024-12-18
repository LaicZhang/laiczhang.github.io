---
title: 加强vps安全防护
copyright: true
comment: false
mathjax: false
date: 2022-09-20 21:16:56
updated: 2022-09-20 21:16:56
tags:
  - vps
  - 网络安全
categories: 网络安全
keywords: vps, 安全, 网络安全
permalink: force-vps-security/
description: 手里的vps还是不少了，加上之前写毕设的时候没有设置密码就把mongodb数据库公开了，以为会没啥事，结果还是被攻击了。此时想起来，觉得安全还是有必要重视起来了。
---
手里的vps还是不少了，加上之前写毕设的时候没有设置密码就把mongodb数据库公开了，以为会没啥事，结果还是被攻击了。此时想起来，觉得安全还是有必要重视起来了。

<!--more-->
## shell

### ubuntu/debian

ssh成功登录记录在/var/log/wtmp和/var/log/wtmp.1（两个文件轮换记录），ssh登录失败记录在/var/log/btmpy和/var/log/btmp.1（两个文件轮换记录），都是二进制文件，直接打开显示乱码。
debian 登录成功的用last查看，登录失败用lastb
通过lastb命令查看：sudo lastb -f /var/log/btmp.1

### centos

登录日志记录在/var/log/secure

```shell
# 查看有多少条登录失败记录：
grep -o "Failed password" /var/log/secure|uniq -c
# 查看都有哪些ip在爆破：
grep "Failed password" /var/log/secure|grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"|uniq -c | sort -nr
# 查看都在爆破哪些用户名：
grep "Failed password" /var/log/secure|perl -e 'while($_=<>){ /for(.*?) from/; print "$1\n";}'|uniq -c|sort -nr
```

### 通用

```shell
# 查看用密码登陆成功的IP地址及次数
grep "Accepted password for root" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -nr | more
# 查看用密码登陆失败的IP地址及次数
grep "Failed password for root" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -nr | more
```

### 一键脚本

```bash
#!/bin/bash
# 防爆破
lastb -s $(date "+%Y-%m-%d") | egrep -v "$(grep "sshd" /etc/hosts.deny | awk -F ':' '{print $2}')" | grep "ssh:" | awk -F 'ssh:' '{print $2}' | awk '{print $2}' | sort | uniq -c | sort -n | awk '{if ($1 > 30) print "sshd:"$2":deny"}' | xargs -I {} echo "{}" >> /etc/hosts.deny
# SSH在线提醒，通知方式可以自行使用pushdeer等工具替代
who | awk -F "[)(]" '{printf $2","}' | xargs -I {} curl "http://iyuu.cn/******（iyuu.cn的token）.send?text=hostname【$(hostname)】SSH在线提醒：{}&desp=hostname【$(hostname)】SSH在线提醒：{}"
```

```shell
# 每分钟执行一次
*/1 * * * * /root/protect_ssh.sh
```

## 常用方案

- 改端口
  - 建议使用10000~65535之间的端口号，10000以下容易被系统或一些特殊软件占用
  - `vim /etc/ssh/sshd_config`
  - `systemctl restart sshd`
- 借用fail2ban/iptables等方案防止暴力破解
  - `yum install fail2ban`
  - `vim /etc/fail2ban/jail.local`
  - `systemctl restart fail2ban`
以上两种常用方案其实已经可以防范90%左右的问题了。

## 最~~麻烦~~安全的方案

- 直接关闭ssh端口，等需要登录的时候再上控制台打开。
  - 弱化版：设置仅某ip可以连接ssh端口（适合有额外的vps且该vps有静态ip的的用户，通过此堡垒机登录）
- 屏蔽非主要用户地区ip的访问
- 使用另外一个有固定ip的vps作为堡垒机，通过堡垒机登录到目标vps，再通过ssh登录目标vps。
