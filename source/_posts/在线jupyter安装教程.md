---
title: 在线jupyter安装教程
copyright: true
comment: true
mathjax: false
tags:
  - python
  - jupyter
  - 环境配置
categories: 环境配置
date: 2020-01-09 23:22:02
updated: 2020-01-09 23:22:02
keywords: python, python3, jupyter, 环境配置, ubuntu
permalink: online-jupyter-installation-tutorial/
description:
---
看到[小游同学](https://xiaoyou66.com/archives/1095)搭了个在线jupyter，忽然想起我也还有个学生机买来就没有用，我就也试着在学生机上也搭了一个。

照着他的步骤来，不过他也有一些没有写清楚的地方，我会尽量补充出来。

<!-- more -->

## 安装之前的准备工作-换源

小游同学在安装完Ubuntu19.04后要换源，他写了个脚本，直接运行可以自动换源。

目前好像没有19.04的源，所以我就不换了(下面是代码，大家只需要保存为`.sh`后缀然后到Ubuntu里面输入`sh 你的文件名.sh`即可)

用xshell连接服务器的同学，可以右键传输文件，

也可以安装lrzsz工具包:`sudo apt-get install lrzsz`,然后`rz`把.sh后缀文件传至服务器。

```shell
#!/bin/sh
 
echo "*********************************"
sudo echo "选择安装系统："
echo "  14.04 请输入 1"
echo "  16.04 请输入 2"
echo "  18.04 请输入 3"
echo "*********************************"
read SystemIndex
 
if [ -z $SystemIndex ];then
    echo "输入格式错误"
    exit
 else
    index=`echo "$SystemIndex*1" | bc `
   if [ $index -eq 1 ];then
       System=14.04
   elif [ $index -eq 2 ];then
       System=16.04   
   elif [ $index -eq 3 ];then 
       System=18.04 
    fi
fi
 
echo "*********************************"
echo "选择更新源："
echo "  阿里源请输入 1"
echo "  清华源请输入 2"
echo "  网易源请输入 3"
echo "*********************************"
read SourceIndex
 
if [ -z $SystemIndex ];then
    echo "输入格式错误"
    exit
 else
    index=`echo "$SourceIndex*1" | bc `
   if [ $index -eq 1 ];then
    echo 1111
       Source=ali
   elif [ $index -eq 2 ];then
    echo 222
       Source=qinghua   
   elif [ $index -eq 3 ];then 
       Source=163 
    fi
fi
echo $Source
filename="source_${Source}_ubuntu${System}.list"
 
#下载安装git
echo "开始下载安装git..."
sudo apt-get install git
sudo apt-get -f install
sudo apt-get install git
echo "安装完成"
echo "开始下载库文件..."
git clone https://github.com/quanweiGithub/Ubuntu-China-Source
cd Ubuntu-China-Source
ls
echo "备份原链接..."
sudo cp /etc/apt/sources.list /etc/apt/sources_init.list
echo "设置链接..."
sudo cp $filename /etc/apt/sources.list
echo "更新源..."
sudo apt-get update
echo "修复软件..."
sudo apt-get -f install
echo "更新软件..."
sudo apt-get upgrade
echo "清理文件..."
cd ..
sudo rm -rf Ubuntu-China-Source
echo "国内源清理完毕"
```

## 配置python环境

安装依赖包
```shell
sudo apt-get update
sudo apt-get install build-essential python-dev python-setuptools python-pip python-smbus
sudo apt-get install build-essential libncursesw5-dev libgdbm-dev libc6-dev
sudo apt-get install zlib1g-dev libsqlite3-dev tk-dev
sudo apt-get install libssl-dev openssl
sudo apt-get install libffi-dev
```

安装pyenv
```shell
git clone git://github.com/yyuu/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
exec $SHELL -l
```
安装 python3.7.0`pyenv install 3.7.0 -v`

对数据库进行更新：`pyenv rehash`

查看已经安装的python版本：`pyenv versions`

设置全局python版本`pyenv global 3.7.0`

## 安装并配置jupyter

安装完python后就可以准备安装jupyter了，因为我什么也不懂只好采用最简单的安装方法：使用conda来进行安装。

我们这里是全程以root用户来运行的，所以要切换到root用户：su - 如果你没设置root密码可以输入 sudo passwd
```shell
mkdir /Anaconda
cd /Anaconda
wget https://repo.continuum.io/archive/Anaconda3-4.4.0-Linux-x86_64.sh
bash Anaconda3-4.4.0-Linux-x86_64.sh
```
我们直接下载安装脚本就可以自动安装了。

在安装过程中会询问你是否将anaconda的路径加入到环境变量中，默认是no，我这里不知道怎么回事所以直接没有加到环境变量里面。所以我们需要手动添加了了。

我们直接修改配置文件`vi ~/.bashrc`

然后在最后面加入：`export PATH="/root/anaconda3/bin:$PATH"`

最后保存退出，注意，`vi`代表用vim编辑，进入文件后发现直接修改改不了也表慌，先按`i`，下方会显示`--insert--`，此时就能开始编辑了：

，更新一下环境变量：`source ~/.bashrc`

然后退出是，先按`esc`，也就是键盘左上角的那个键，然后输入`:wq`保存退出。

然后在输入：`conda list` 如果有反应说明安装成功！



### 正式开始安装jupyter notebook

输入：`conda install jupyter notebook`开始安装

安装完后直接输入`jupyter notebook`就可以启动程序了，但是因为我们是root所以是不让我运行的，我们需要修改配置文件。

我们先让它生成配置文件：`jupyter notebook --generate-config --allow-root`


如果出现`Writing default config to:/root/.jupyter/jupyter _notebook _config.py`，说明安装成功了，然后我们需要修改配置文件：`vi /root/.jupyter/jupyter_notebook_config.py`

好像打不开所以我就直接到文件里面找然后直接修改了。

找到这一行`#c.NotebookApp.allow_root = False`改成`c.NotebookApp.allow_root =True`

此时我们启动程序也还是进不去的，因为我们没有密码，我们要修改一下密码。

输入：`ipython` 然后在输入`from notebook.auth import passwd`再输入`passwd()`

这个时候输入并确认密码（此时输入的密码是第一次登陆需要输入的密码），然后获得密码的hash值：`'sha1:.......`

复制这个值，粘贴到先前的那个配置文件`/root/.jupyter/jupyter_notebook_config.py`内`c.NotebookApp.password= u'sha1:.....'`

保存好后就可以直接输入密码访问了，但是这个时候还是不能直接远程访问，所以我们还需要这样设置一下（自己找位置，然后把内容修改一下，把#注释掉）：

```shell
c.NotebookApp.ip = '*'
c.NotebookApp.open_browser = False（True：启动时自动打开浏览器）
c.NotebookApp.port = 8888（端口设置，随你改）
```
### 自己的服务器

还有我们需要配置一下防火墙，默认Ubuntu安转了UFW防火墙，下面是这个防火墙的一些配置：

启动防火墙：`sudo ufw enable或者sudo ufw default deny`

关闭防火墙：`sudo ufw disable`

查看防火墙状态：`sudo ufw status`

开启或者禁用相应的端口：
```
sudo ufw allow 80 允许外部访问80端口
sudo ufw delete allow 80 禁止外部访问80 端口
sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口
sudo ufw deny smtp 禁止外部访问smtp服务
sudo ufw delete allow smtp 删除上面建立的某条规则
ufw deny proto tcp from 10.0.0.0/8 to 192.168.0.1 port 要拒绝所有的流量从TCP的10.0.0.0/8 到端口22的地址192.168.0.1
```
如果没有安装可以输入如下命令安装：`sudo apt-get install ufw`

我们直接添加我们的端口就行了，然后就可以在本地直接访问虚拟机的ip地址加端口号如果看到以下界面说明可以外部访问了

### 云服务器

这就需要你登陆到云主机供应商的云服务器控制台界面，

![20200110171813.png](https://i.loli.net/2020/01/10/BPCaWgs85XvxpSD.png)

添加安全组，

![20200110171934.png](https://i.loli.net/2020/01/10/56wHe3A2UCkOKRt.png)

然后在自己电脑/手机/ipad上，打开浏览器输入：`服务器公网ip:{设置的端口号}`，输入你的服务器密码登陆，即可进入。

![20200110172210.png](https://i.loli.net/2020/01/10/Sh9PWtsIaiOLNMm.png)

### 如何让它一直在后台运行呢？

有两种方法：

1. `jupyter notebook --allow-root > jupyter.log 2>&1 &`

2. `nohup jupyter notebook --allow-root > jupyter.log 2>&1 &`

### 说明：

1. 用`&`让命令后台运行, 并把标准输出写入jupyter.log中

2. `nohup`表示`no hang up`, 就是不挂起, 于是这个命令执行后即使终端退出, 也不会停止运行.

~~我的[在线jupyter](https://39.96.24.63:999/)，因为是用学生机搭建的，性能有限，就不公开了。实在不会配置环境的同学，还是文末公众号后台留言吧。~~

### 停止方法

执行上面第2条命令, 可以发现关闭终端重新打开后, 用`jobs`找不到jupyter这个进程了, 于是要用`ps -A`(注意A要大写), 可以显示所有进程的pid.在CMD下面找到`jupyter-noteboo`然后`kill -9 pid` 终止进程即可。

## 最后

不知道什么原因，用xshell重新连接后，虽然jupyter仍然能够访问，但是再输入`conda list`或者`pip list`均失效，从头开始尝试了几次，发现只需要再输入`source ~/.bashrc`即可。