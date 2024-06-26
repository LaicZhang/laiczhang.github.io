---
title: 部署hexo博客到腾讯云服务器
copyright: true
comment: false
mathjax: false
date: 2022-08-26 16:15:41
updated: 2022-08-26 16:15:41
tags:
  - hexo
  - vps
  - 网站
categories: 网站
keywords: hexo, vps, 网站
permalink: deploy-the-hexo-blog-to-tencent-cloud/
description:
---
同步部署的方法方法很多，此处只成功实现了一种，其他方式总有权限问题。

<!-- more -->
## 写在前面

对不熟悉`Linux`操作的同学建议使用同步软件，更节约精力及时间。

本文为一边踩坑一边实现，结构较乱，还请自行验证。

## 部署方式

- `git` 本地提交最新版至`github`及云服务器--回调时pull操作总提示权限问题
- `ftp` 需开放其他端口--不安全
- 同步软件 需双端启用同步软件,更消耗资源---`Syncthing`
- `gh`  本地提交最新版至`github`，调用`webhooks`更新云服务的资源

最后使用`gh`成功完成同步更新。

## 环境配置

```bash
[root@VM-0-16-centos ~]# git --version
git version 1.8.3.1
[root@VM-0-16-centos ~]# nginx -v
nginx version: nginx/1.21.4
[root@VM-0-16-centos ~]$ gh version
gh version 2.14.7 (2022-08-25)
https://github.com/cli/cli/releases/tag/v2.14.7
```

## 创建git仓库并使用hooks实现自动部署

```bash
[root@VM-0-16-centos ~]# pwd
/root
[root@VM-0-16-centos ~]# sudo git init --bare blog.git
Initialized empty Git repository in /root/blog.git/
[root@VM-0-16-centos ~]# vim /root/blog.git/hooks/post-receive
```

`hooks`目录内没有`post-receive`，需要手动创建并保存，之后在`post-receive`增加下面两行，

```bash
#!/bin/sh
git --work-tree=/www/wwwroot/laiczhang.github.io --git-dir=/root/blog.git checkout -f
```

表明在`/root/blog.git`对`/www/wwwroot/laiczhang.github.io`执行`checkout -f`命令，当我们把博客写好后更新，服务器端可以同步部署。

### 保存并赋予权限

```bash
[root@VM-0-16-centos ~]# chmod +x /root/blog.git/hooks/post-receive
```

## 本地设置

打开`Hexo`博客根目录下的`_config.yml`，将`deploy`下面修改为：

```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  - type: git
    repo:
      github: git@github.com:LaicZhang/laiczhang.github.io.git
    branch: master
  - type: git
    repo: root@服务器公网ip:/root/blog.git
    branch: master
```

本步骤由于我的`ssh`配置有问题，一直报错

```txt
Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

## 云服务器设置

点击[generating a new ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key),在本机上生成一个新的`ssh key`，并将其添加到项目的`deploy key`中。

`deploy key`页面位置：`https://github.com/<yourname>/<yourrepo>/settings/keys`

### clone

```bash
cd /www/wwwroot/<yourrepo>
git clone git@github.com/<yourname>/<yourrepo>
// 国内clone速度极慢，可以将github.com替换为git.zhlh6.cn进行加速
```

### nginx配置

```bash
sudo nginx -t  #查看nginx配置路径
```

我的`nginx`配置如下

```conf
server
{
    listen 80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
    listen [::]:80;
    server_name coding.zyha.cn;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/laiczhang.github.io/;

    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #PHP-INFO-START  PHP引用配置，可以注释或修改
    include enable-php-81.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/coding.zyha.cn.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
        error_log /dev/null;
        access_log /dev/null;
    }

    location ~ .*\.(js|css)?$
    {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null;
    }
    access_log  /www/wwwlogs/coding.zyha.cn.log;
    error_log  /www/wwwlogs/coding.zyha.cn.error.log;
}
```

将`coding.zyha.cn`替换为博客域名，将`root /www/wwwroot/laiczhang.github.io/;`此处的路径更改为上方`work tree`对应的路径即可。

## 验证

由于之前部署在`oss`上，有`DNS`缓存，所以需要等待一段时间或手动修改`hosts`指定`IP`以预览效果，等待时间可以根据实际情况调整。

![成功部署](https://cdn.zyha.cn/blog/IMG_1582.PNG?x-oss-process=style/blog)

## 自动更新

如果你的ssh能够正常`push`，那云服务器上的文件也将跟随`github`仓库一起更新，但是我有问题，所以使用了宝塔提供的`webhooks`来解决。

填入下方调用代码：

```bash
if test $1 = 'pull'
then
    echo 'update：' $(date '+%Y-%m-%d %H:%M:%S')
    cd /www/wwwroot/laiczhang.github.io
    git reset --hard origin/master
    git pull
    chown -R www:www ./
    chmod -R 755 ./
    echo ""
fi
```

```txt
GET/POST:
http://<yourip>:<yourport>/hook?access_key=<yourkey>&param=pull
@param access_key string HOOK密钥
@param param string 自定义参数（在hook脚本中使用$1接收）
```

在更新完成后请求一次此回调接口，响应`json`为`{"code": 1}`即调用成功。

## 成功触发接口后仍然未更新

打开终端手动`pull`一次，发现代码冲突，并未成功合并代码。

```txt
Please, commit your changes or stash them before you can merge.
Aborting
```

### 解决方案

```bash
git fetch
git reset --hard HEAD
git merge origin/$CURRENT_BRANCH

// 我使用的是 gh repo sync --branch master ，两者等价
// 此处我的仓库是使用的master分支，疫情之后`github`将默认分支更新为main，请注意分支名正确
```

带有 `--hard` 选项的 `git reset` 命令会将分支重置为我们刚刚获取的内容。它还将丢弃对跟踪文件的任何本地更改，并且将删除未跟踪的文件。

请谨慎使用，因为任何本地更改都将丢失。此次由于本博客最新版均提交之后`github`，所以不考虑手动解决冲突问题，直接覆盖旧代码即可。

### 更新后的回调代码

```bash
if test $1 = 'pull'
then
    echo 'update：' $(date '+%Y-%m-%d %H:%M:%S')
    cd /www/wwwroot/laiczhang.github.io
    git stash  # 存储更改，避免冲突
    git stash drop stash@{0} # 删除stash中第一个队列
    gh repo sync --branch master
    chown -R www:www ./
    chmod -R 755 ./
    echo ""
fi
```
