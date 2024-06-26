---
title: 在线jupyter安装教程-第二弹
copyright: true
comment: false
mathjax: false
date: 2020-07-24 10:09:04
updated: 2020-07-24 10:09:04
tags:
  - python
  - jupyter
categories: python
keywords: python,jupyter,安装,教程
permalink: jupyter-install-process-2/
description:
---
## 前言

上次已经写了一篇关于[在Linux上安装jupyter的教程](https://coding.laiczhang.com/2020/01/在线jupyter安装教程/#more)，但是貌似有点问题，今天新开了一台Centos7，就再照着[jupyterhub的官方文档](https://jupyterhub.readthedocs.io/en/stable/installation-guide.html)重新装一下。

<!-- more -->

我只在新开机器上装了宝塔，没注意是否会影响安装。不过还是建议大家装一下，毕竟如果机器配置够（我的配置是2H2G）的话，用起来还是很方便的。

**须知：在国内云服务器上安装，没有备案域名就只能通过IP访问。**

## 通过一般方法安装

emmmm，我这样安装的貌似有问题，推荐使用docker一键安装:(

## 配置python3环境

连接成功后，先输入`python`，显示`Python 2.7.5 (default, Aug  7 2019, 00:51:29)`，

再输入`python3`，如果显示的是`-bash: python3: command not found`字样，则说明机器自带的python是python2.7版本的，不符合官方要求的3.5及以上，所以需要安装python3.

如何安装python3环境，我在[在线jupyter安装教程](https://coding.laiczhang.com/2020/01/在线jupyter安装教程/#more)已经提过,

- 知乎大佬给了一段安装python3.6版本的命令，

```shell
wget https://www.python.org/ftp/python/3.6.5/Python-3.6.5rc1.tgz
tar -zxvf Python-3.6.5rc1.tgz
cd Python-3.6.5rc1
./configure
make && make install


作者：该ID暂无昵称
链接：https://www.zhihu.com/question/277141716/answer/391713329
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

- 最新版宝塔也集成了python项目管理，可以在`软件商店`搜索`python`，安装`python项目管理器`，选择`版本管理`安装相关版本

- 使用CentOS系统的同学也可以参考这篇[[在CentOS上安装Python3的三种方法](https://www.cnblogs.com/yunlongaimeng/p/11119531.html)

- 当然，我我的机器预装了输入`python3`，显示的是`Python 3.6.7 (default, Oct 22 2018, 11:32:17)`，说明版本够了，准备安装jupyterhub

## 配置nodejs环境

- [nodejs / npm](https://www.npmjs.com/)

  - 如果使用**`conda`**，则conda将为您安装nodejs和npm依赖项。

  - 如果您正在使用**`pip`**，请安装最新版本的 [nodejs / npm](https://docs.npmjs.com/getting-started/installing-node)。例如，使用以下命令在Linux（Debian / Ubuntu）上安装它：

    ```shell
    sudo apt-get install npm nodejs-legacy
    ```

    我的是CentOS，所以安装命令是

    ```
    sudo yum install npm nodejs-legacy
    ```

    该`nodejs-legacy`软件包将安装`node`可执行文件，当前是npm在Debian / Ubuntu上运行所必需的。

## 安装jupyterhub

官网给了conda和pip两种安装方式，我用的是pip，

毕竟，习惯是一种可怕的力量233333

JupyterHub可以使用安装`pip`，代理可以使用`npm`：

```
npm install -g configurable-http-proxy
python3 -m pip install jupyterhub      
```

如果计划在本地运行笔记本服务器，则需要安装 [Jupyter笔记本](https://jupyter.readthedocs.io/en/latest/install.html) 软件包：

```
python3 -m pip install --upgrade notebook
```

没有Error字样，基本就是安装成功了，是不是比上次装jupyter简单多了，



## 启动jupyterhub

要启动集线器服务器，请运行以下命令：

```bash
jupyterhub
```

或者使用以下命令

```bash
nohup jupyterhub > jupyterhub.log &
```

在后台运行。

但是这样启动之后还貌似需要配置Nginx才可以通过网络访问`https://ip:port/jupyter`，有点麻烦。

## 通过docker安装（推荐）

### docker的安装

关于安装，网上已经有很多的教程了。

可以参考：

安装成功后，输入`sudo systemctl start docker`启动docker，

再输入`sudo docker run hello-world`，

如果输出：

```txt
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/
```

即为安装成功。

## docker安装jupyterhub

输入

```bash
docker run -d -p 8000:8000 --name jupyterhub jupyterhub/jupyterhub jupyterhub
```

在浏览器中，打开 https://ip:8000 可以看到

![QQ截图20200702091222.png](https://i.loli.net/2020/07/24/AxSn1OFs2vUui4T.png)

安装完成。
