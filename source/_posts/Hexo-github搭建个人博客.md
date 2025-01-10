---
title: Hexo+github搭建个人博客
date: 2019-07-05 14:26:57
updated: 2019-07-06 13:00:00
tags:
  - hexo
  - github
  - blog
  - coding
  - 域名
categories: hexo
permalink: build-a-personal-blog-with-hexo-and-github-page/
keywords: hexo,github,blog,node,nodejs,markdown,coding,域名
copyright: true
---
## 前言

[Hexo](https://hexo.io/zh-cn/) 是高效的静态站点生成框架，她基于 [Node.js](https://nodejs.org/)。

通过 Hexo 你可以轻松地使用 Markdown 编写文章，除了 Markdown 本身的语法之外，还可以使用 Hexo 提供的 [标签插件](https://hexo.io/zh-cn/docs/tag-plugins.html) 来快速的插入特定形式的内容。

这篇文章，将帮助你成功安装了Hexo，并使用 Hexo 提供的命令创建一个站点。

<!--more-->

## 环境说明

操作系统：Windows10家庭中文版

## 准备环境

1. [Node.js](https://nodejs.org/) 下载，并安装。

   Hexo基于Node.js，Node.js下载地址：[Download | Node.js](https://nodejs.org/en/download/) 下载安装包，注意安装Node.js会包含环境变量及npm的安装，安装后，检测Node.js是否安装成功，在命令行中输入 node -v ,检测npm是否安装成功，再在命令行中输入npm -v ，均有版本号出现，则安装成功。

2. [Git](https://git-scm.com/) 下载，并安装。

   从Git官网下载：[Git - Downloading Package](https://git-scm.com/download/win) 现在的机子基本都是64位的，选择64位的安装包，下载后安装，在命令行里输入git测试是否安装成功，若安装失败，参看其他详细的Git安装教程。

3. 安装Hexo，在命令行（即Git Bash）运行以下命令：

   > npm install -g hexo-cli

4. 初始化Hexo，在命令行（即Git Bash）依次运行以下命令即可：

   以下，即存放Hexo初始化文件的路径， 即站点目录。

   ```bash
   hexo init <folder>
   cd <folder>
   npm install
   ```

   新建完成后，在路径下，会产生这些文件和文件夹：

   ```txt
   .
   ├── _config.yml
   ├── package.json
   ├── scaffolds
   ├── source
   |   ├── _drafts
   |   └── _posts
   └── themes
   ```

   **注**：

   - hexo相关命令均在**站点目录**下，用**Git Bash**运行。

   - 站点配置文件：站点目录下的`_config.yml`。

      路径为`<folder>\_config.yml`

   - 主题配置文件：站点目录下的`themes`文件夹下的，主题文件夹下的`_config.yml`。

      路径为`<folder>\themes\<主题文件夹>\_config.yml`

5. 启动服务器。在路径下，命令行（即Git Bash）输入以下命令，运行即可：

   ```bash
   hexo server
   ```

6. 浏览器访问网址： `https://localhost:4000/`

至此，Hexo博客已经搭建在本地。

## 部署方案

### 方案一：hexo+GitHub pages

1. 创建[Github](https://github.com/)账号

2. 创建仓库， 仓库名为：<Github账号名称>.github.io

3. 将本地Hexo博客推送到GithubPages

   3.1. 安装`hexo-deployer-git`插件。在命令行（即Git Bash）运行以下命令即可：

   ```bash
   npm install hexo-deployer-git --save
   ```

   3.2. 添加SSH key。

   - 创建一个 SSH key 。在命令行（即Git Bash）输入以下命令， 回车三下即可：

     ```bash
     ssh-keygen -t rsa -C "邮箱地址"
     ```

   - 添加到 github。 复制密钥文件内容（路径形如`C:\Users\Administrator\.ssh\id_rsa.pub`），粘贴到[New SSH Key](https://github.com/settings/keys)即可。

   - 测试是否添加成功。在命令行（即Git Bash）依次输入以下命令，返回“You’ve successfully authenticated”即成功：

     ```bash
     ssh -T git@github.com
     yes
     ```

   3.3. 修改`_config.yml`（在站点目录下）。文件末尾修改为：

   ```yml
   # Deployment
   ## Docs: https://hexo.io/docs/deployment.html
   deploy:
     type: git
     repo: git@github.com:<Github账号名称>/<Github账号名称>.github.io.git
     branch: master
   ```

   注意：上面仓库地址写ssh地址，不写http地址。

   3.4. 推送到GithubPages。在命令行（即Git Bash）依次输入以下命令， 返回`INFO Deploy done: git`即成功推送：

   ```bash
   hexo g
   hexo d
   ```

4. 等待1分钟左右，浏览器访问网址： `https://<Github账号名称>.github.io`

至此，您的Hexo博客已经搭建在GithubPages, 域名为`https://<Github账号名称>.github.io`。

### 方案二：hexo+GithubPages + 域名

在方案一的基础上，添加自定义域名（您购买的域名）。

1. 域名解析。

   类型选择为 CNAME；

   主机记录即域名前缀，填写为www；

   记录值填写为<Github账号名称>.github.io；

   解析线路，TTL 默认即可。

2. 仓库设置。

   2.1. 打开博客仓库设置：`https://github.com/<Github账号名称>/<Github账号名称>.github.io/settings`

   2.2. 在Custom domain下，填写自定义域名，点击`save`。

   2.3. 在站点目录的`source`文件夹下，创建并打开`CNAME.txt`，写入你的域名（如`www.simon96.online`），保存，并重命名为`CNAME`。

3. 等待10分钟左右。

   浏览器访问自定义域名。

   至此，您的Hexo博客已经解析到自定义域名，`https://<Github账号名称>.github.io`依然可用。

### 方案三：hexo+GithubPages + CodingPages + 域名

GithubPages 在国内较慢，百度不收录，而CodingPages 在国外较快。所以在方案二的基础上，添加CodingPages 。

1. 创建[Coding](https://coding.net/)账号

2. 创建仓库， 仓库名为：<Coding账号名称>

3. 进入项目里『代码』页面，点击『一键开启静态 Pages』，稍等片刻CodingPages即可部署成功。

4. 将本地Hexo博客推送到CodingPages

   4.1. 鉴于创建GithubPages 时，已经生成过公钥。可直接复制密钥文件内容（路径形如`C:\Users\Administrator\.ssh\id_rsa.pub`）， 粘贴到[新增公钥](https://dev.tencent.com/user/account/setting/keys)。

   4.2. 测试是否添加成功。在命令行（即Git Bash）依次输入以下命令，返回“You’ve successfully authenticated”即成功：

   ```bash
   ssh -T git@git.coding.net
   yes
   ```

   4.3. 修改`_config.yml`（在存放Hexo初始化文件的路径下）。文件末尾修改为：

   ```yml
   # Deployment
   ## Docs: https://hexo.io/docs/deployment.html
   deploy:
   - type: git
     repo: git@github.com:<Github账号名称>/<Github账号名称>.github.io.git
     branch: master
   - type: git
     repo: git@git.dev.tencent.com:<Coding账号名称>/<Coding账号名称>.git
     branch: master
   ```

   4.4. 推送到GithubPages。在命令行（即Git Bash）依次输入以下命令， 返回`INFO Deploy done: git`即成功推送：

   ```bash
   hexo g
   hexo d
   ```

5. 域名解析

   1. 添加 CNAME 记录指向 <Coding账号名称>.coding.me

      类型选择为 CNAME；

      主机记录即域名前缀，填写为www；

      记录值填写为<Github账号名称>.coding.me；

      解析线路，TTL 默认即可。

   2. 添加 两条A 记录指向 192.30.252.153和192.30.252.154

      类型选择为 A；

      主机记录即域名前缀，填写为@；

      记录值填写为192.30.252.153和192.30.252.154；

      解析线路，境外或谷歌。

   3. 在『Pages 服务』设置页（`https://dev.tencent.com/u/<Coding账号名称>/p/<Coding账号名称>/git/pages/settings`）中绑定自定义域名。

至此，您的Hexo博客已经解析到自定义域名，`https://<Github账号名称>.github.io`和`https://<Coding账号名称>.coding.me`依然可用。

## 常用hexo命令介绍

常用的Hexo 命令  

```shell
npm install hexo -g #安装Hexo

npm update hexo -g #升级  

hexo init #初始化博客  
```

命令简写

hexo n "我的博客" == hexo new "我的博客" #新建文章

hexo g == hexo generate #生成

hexo s == hexo server #启动服务预览

hexo d == hexo deploy #部署  

hexo server #Hexo会监视文件变动并自动更新，无须重启服务器

hexo server -s #静态模式 hexo server -p 5000 #更改端口 hexo server -i 192.168.1.1 #自定义 IP

hexo clean #清除缓存，若是网页正常情况下可以忽略这条命令

## 参考链接

[GitHub+Hexo 搭建个人网站详细教程](https://zhuanlan.zhihu.com/p/26625249 )

[【持续更新】最全Hexo博客搭建+主题优化+插件配置+常用操作+错误分析](https://www.simon96.online/2018/10/12/hexo-tutorial/ )
