---
title: 记录初学docker踩的坑
copyright: true
comment: false
mathjax: false
date: 2020-07-26 16:12:07
updated: 2020-07-26 16:12:07
tags:
  - docker
  - 环境配置
categories: 环境配置
keywords: docker, 环境配置, windows
permalink: something-about-learning-docker/
description:
---

众所周知，docker配置复杂的环境很方便。

我就用来配置本地的golang环境（先前本机没装好，总是路径不对，干脆使用docker来装），

结果遇到了几个问题，用了半天时间才解决，搜索引擎误我！！！

<!-- more -->

## 安装

安装什么的不用我仔细说了把，

我安装的是docker desktop，版本如下

![批注 2020-07-26 161701.png](https://i.loli.net/2020/07/26/qYcrSsWaHNXgdEo.png)

安装好后，打开cmd，输入`docker`可以查看有哪些命令，

![批注 2020-07-26 162339.png](https://i.loli.net/2020/07/26/Pm7JpCQM4ZqkjWS.png)

使用`docker pull golang`，可以安装最新版本的golang，

## 更换国内源

默认源在国外，众所周知的原因，

所以可以在docker desktop的setting中修改`registry-mirrors:[]`，示例如下：

![批注 2020-07-26 162804.png](https://i.loli.net/2020/07/26/ImVCJQeUWsFvr5R.png)

### 我的配置

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ],
  "insecure-registries": [],
  "debug": true,
  "experimental": false
}
```

### 部分国内源

```txt
https://registry.docker-cn.com

https://hub-mirror.c.163.com

https://docker.mirrors.ustc.edu.cn

https://aa25jngun.mirror.aliyuncs.com
```

修改配置后，记得点击`Apply & Restart`，重启docker。

## 连接docker的坑

我使用的是jetbrains家的`Goland`，不要问，问就是牛逼。

新建项目，新建一个`hello.go`，

```go
package go_test

package main
import "fmt"

func main(){
 fmt.Printf("hello world\n")
}
```

肯定不能直接点运行呀，会报错。

所以，准备连接本地的docker，

![批注 2020-07-26 163546.png](https://i.loli.net/2020/07/26/jKMdlLT1CPOF8ik.png)

这个时候就是我踩坑的时候了，

图中`连接中...`，过了一会儿，显示的是，

```txt
无法连接：io.netty.channel.AbstractChannel$AnnotatedConnectException:Connection refused:no further
information:localhost/127.0.0.1：2375
caused by:java.net.ConnectException:Connection refused:no further information
```

## 解决办法

打开power shell，

输入`Test-NetConnection -ComputerName localhost -Port 2375`,测试连接本地Docker端口

输出的是，

```txt
警告: TCP connect to (::1 : 2375) failed                                                      
ComputerName     : localhost
RemoteAddress    : 127.0.0.1
RemotePort       : 2375
InterfaceAlias   : Loopback Pseudo-Interface 1
SourceAddress    : 127.0.0.1
TcpTestSucceeded : False
```

然后，

找到`控制面板\网络和 Internet\网络连接`，

除了你正在使用的网络，其他全部禁用，如图

![批注 2020-07-26 165814.png](https://i.loli.net/2020/07/26/ZEqsiTjJX9g6DKC.png)

然后重启docker desktop，再测试一波。

```txt
警告: TCP connect to (::1 : 2375) failed                                                      
ComputerName     : localhost
RemoteAddress    : 127.0.0.1
RemotePort       : 2375
InterfaceAlias   : Loopback Pseudo-Interface 1
SourceAddress    : 127.0.0.1
TcpTestSucceeded : True
```

相信你也猜到了，这是你之前开过虚拟机造成的：）

## 运行go程序

接下来的操作就很常规了，

编辑运行/调试配置，点击`+`，创建Docker镜像，服务器已经自动匹配上了刚才连接成功的本地docker，只需要输入`image ID or name`即可，然后先点击“应用”，再确定，就可以运行demo了。

PS：关于`image ID or name`，可以打开cmd，输入`docker images`查看。
