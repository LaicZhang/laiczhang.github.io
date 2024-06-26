---
title: 终端环境下GitHub无法链接
copyright: true
comment: false
mathjax: false
date: 2024-06-08 14:22:23
updated: 2024-06-08 14:22:23
tags:
  - github
  - ssh
categories: 优化
keywords: github, ssh, 终端, terminal,git,22,443
permalink: cannot-link-github-in-terminal/
description:
---
之前github在网页端和terminal中都是可以正常打开的，今天忽然报错无法链接，提示：

```txt
git push origin main
kex_exchange_identification: Connection closed by remote host
Connection closed by 198.18.0.21 port 22
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

<!-- more -->
## 解决

之前在win上遇到过这个问题，通过修改ssh的config文件解决了。

在终端输入：

```bash
code ~/.ssh/config
```

在vscode中打开，

```txt
Include ~/.orbstack/ssh/config
```

发现仅有一行导入orbstack的配置的信息，需要添加github的配置：

```txt
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

保存后，再次尝试push，应该就可以正常链接了。

v2ex也早就有大佬@lostberryzz给出了解释，

```txt
机场屏蔽了落地机到 22 端口的连接，这是很多机场的一贯作坊，防止你通过机场的 IP 去扫描爆破。
而小火箭接管了所有流量导致 git push 用不了，而用 CFW 终端走的是直连自然可以用。

另外 tun 模式下，ping google 和 github 都返回的是 fake ip ，并不代表真的能 ping 通。
```

## 参考

- [Using SSH over the HTTPS port](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
