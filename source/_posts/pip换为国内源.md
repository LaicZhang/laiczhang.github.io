---
title: pip换为国内源
copyright: true
comment: false
mathjax: false
date: 2019-12-16 23:40:04
updated: 2019-12-16 23:40:04
tags:
  - python
  - 效率
categories: python
keywords: python, python3, 国内源, 换源, 加速
permalink: pip-change-to-chinese-source/
description:
---

准备给我的jupyter notebook加个自动补全功能，网上说要装个pip install jupyter_contrib_nbextensions

结果运行了两次都报`pip._vendor.urllib3.exceptions.ReadTimeoutError: HTTPSConnectionPool(host='files.pythonhosted.org', port=443): Read timed out.`

这就是因为网不好，嗯，就是网不好，可没有什么墙。。。

<!-- more -->

## 0.几个国内源

```bash
https://pypi.douban.com/simple/     豆瓣
https://pypi.hustunique.com/simple/华中理工大学
https://pypi.sdutlinux.org/simple/山东理工大学
https://pypi.mirrors.ustc.edu.cn/simple/中国科学技术大学
https://mirrors.aliyun.com/pypi/simple/阿里云
https://pypi.tuna.tsinghua.edu.cn/simple/simple/ 清华大学
```

## 1.临时修改

直接执行命令：

```bash
pip install pythonModuleName -i https://pypi.douban.com/simple
```

## 2.修改默认配置

需要修改`~/.pip/pip.conf`。

修改 `pip.conf` 文件 (没有就创建一个)

```txt
%APPDATA%\pip\pip.ini
```

修改内容如下：

```yml
# 在`.pip` 目录创建并编辑 `pip.conf`
# `pip` 安装需要使用的 `https` 加密，所以在此需要添加 `trusted-host`

[global]
# trusted-host = mirrors.ustc.edu.cn
index-url = https://mirrors.ustc.edu.cn/pypi/web/simple
```

修改文件后，执行命令发生错误

使用非HTTPS加密源（如豆瓣源），在执行命令发生错误，在命令最后加上`--trusted-host pypi.douban.com`

```bash
pip install django -i https://pypi.douban.com/simple --trusted-host pypi.douban.com
```

## 3.在pycharm中创建Django失败-*2020.1.06更新*

我想在`pycharm2017`中直接创建`Django`项目，前两个方法均不起作用，依然报错443超时

所以，针对**Windows10**，有了第三种修改方法。

下载的过程，可以看到，默认情况下，最后是`pythonhosted.cn`这个域名中下载文件出了问题，这是`python`官方的域名，对应的网站是在国外。

按照`pip`的官方说明文档，它的配置文件应该放在`%APPDATA%/pip/`目录下，配置文件名称是`pip.ini`，我们先按下`win+R`键。或者在开始菜单上点右键，点运行。然后在出来的窗口中输入`%APPDATA%`，然后点击确定。

我的电脑打开的是`C:\Users\HP\AppData\Roaming`，在这个目录下没有看到`pip`目录，因此需要手动创建一个。

进入`pip`文件夹，创建一个`pip.ini`，写入

```ini
[Global]
index-url = https://pypi.douban.com/simple
[install]
use-mirrors =true
mirrors =https://pypi.douban.com/simple/
trusted-host =pypi.douban.com
```

配置文件配置好以后，点击文件，再点击保存。然后就可以关闭文件编辑框了。

然后重新使用pycharm创建Django项目，稍候就能看到，下载成功。

## 4.实测

我是用的临时修改的方法，

实测效果不错

```txt
Looking in indexes: https://pypi.douban.com/simple/
Collecting jupyter_contrib_nbextensions
  Downloading https://pypi.doubanio.com/packages/33/f0/6e2c00afda860f655fbf0f795f7310bdbf12122846344dfdc803fc7455d5/jupyter_contrib_nbextensions-0.5.1-py2.py3-none-any.whl (20.9MB)
     |████████████████████████████████| 20.9MB 1.6MB/s
Collecting jupyter-highlight-selected-word>=0.1.1 (from jupyter_contrib_nbextensions)
  Downloading https://pypi.doubanio.com/packages/50/d7/19ab7cfd60bf268d2abbacc52d4295a40f52d74dfc0d938e4761ee5e598b/jupyter_highlight_selected_word-0.2.0-py2.py3-none-any.whl
Requirement already satisfied: pyyaml in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (3.13)
Requirement already satisfied: nbconvert>=4.2 in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (5.4.0)
Collecting jupyter-nbextensions-configurator>=0.4.0 (from jupyter_contrib_nbextensions)
  Downloading https://pypi.doubanio.com/packages/51/a3/d72d5f2dc10c5ccf5a6f4c79f636bf071a5ce462dedd07af2f70384db6cb/jupyter_nbextensions_configurator-0.4.1.tar.gz (479kB)
     |████████████████████████████████| 481kB 2.2MB/s
Requirement already satisfied: lxml in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (4.2.5)
Requirement already satisfied: ipython-genutils in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (0.2.0)
Collecting jupyter-latex-envs>=1.3.8 (from jupyter_contrib_nbextensions)
  Downloading https://pypi.doubanio.com/packages/0e/15/55805de080d5542f76920364635e96e64d3b37f678befdfe3b16aa154205/jupyter_latex_envs-1.4.6.tar.gz (861kB)
     |████████████████████████████████| 870kB 1.7MB/s
Requirement already satisfied: traitlets>=4.1 in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (4.3.2)
Collecting jupyter-contrib-core>=0.3.3 (from jupyter_contrib_nbextensions)
  Downloading https://pypi.doubanio.com/packages/e6/8f/04a752a8b66a66e7092c035e5d87d2502ac7ec07f9fb6059059b6c0dc272/jupyter_contrib_core-0.3.3-py2.py3-none-any.whl
Requirement already satisfied: tornado in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (5.1)
Requirement already satisfied: jupyter-core in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (4.4.0)
Requirement already satisfied: notebook>=4.0 in c:\users\hp\anaconda3\lib\site-packages (from jupyter_contrib_nbextensions) (5.6.0)
Requirement already satisfied: mistune>=0.8.1 in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (0.8.3)
Requirement already satisfied: jinja2 in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (2.10)
Requirement already satisfied: pygments in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (2.2.0)
Requirement already satisfied: nbformat>=4.4 in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (4.4.0)
Requirement already satisfied: entrypoints>=0.2.2 in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (0.2.3)
Requirement already satisfied: bleach in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (2.1.4)
Requirement already satisfied: pandocfilters>=1.4.1 in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (1.4.2)
Requirement already satisfied: testpath in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (0.3.1)
Requirement already satisfied: defusedxml in c:\users\hp\anaconda3\lib\site-packages (from nbconvert>=4.2->jupyter_contrib_nbextensions) (0.5.0)
Requirement already satisfied: ipython in c:\users\hp\anaconda3\lib\site-packages (from jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (6.5.0)
Requirement already satisfied: six in c:\users\hp\anaconda3\lib\site-packages (from traitlets>=4.1->jupyter_contrib_nbextensions) (1.11.0)
Requirement already satisfied: decorator in c:\users\hp\anaconda3\lib\site-packages (from traitlets>=4.1->jupyter_contrib_nbextensions) (4.3.0)
Requirement already satisfied: setuptools in c:\users\hp\anaconda3\lib\site-packages (from jupyter-contrib-core>=0.3.3->jupyter_contrib_nbextensions) (40.2.0)
Requirement already satisfied: ipykernel in c:\users\hp\anaconda3\lib\site-packages (from notebook>=4.0->jupyter_contrib_nbextensions) (4.10.0)
Requirement already satisfied: pyzmq>=17 in c:\users\hp\anaconda3\lib\site-packages (from notebook>=4.0->jupyter_contrib_nbextensions) (17.1.2)
Requirement already satisfied: terminado>=0.8.1 in c:\users\hp\anaconda3\lib\site-packages (from notebook>=4.0->jupyter_contrib_nbextensions) (0.8.1)
Requirement already satisfied: jupyter-client>=5.2.0 in c:\users\hp\anaconda3\lib\site-packages (from notebook>=4.0->jupyter_contrib_nbextensions) (5.2.3)
Requirement already satisfied: prometheus-client in c:\users\hp\anaconda3\lib\site-packages (from notebook>=4.0->jupyter_contrib_nbextensions) (0.3.1)
Requirement already satisfied: Send2Trash in c:\users\hp\anaconda3\lib\site-packages (from notebook>=4.0->jupyter_contrib_nbextensions) (1.5.0)
Requirement already satisfied: MarkupSafe>=0.23 in c:\users\hp\anaconda3\lib\site-packages (from jinja2->nbconvert>=4.2->jupyter_contrib_nbextensions) (1.0)
Requirement already satisfied: jsonschema!=2.5.0,>=2.4 in c:\users\hp\anaconda3\lib\site-packages (from nbformat>=4.4->nbconvert>=4.2->jupyter_contrib_nbextensions) (2.6.0)
Requirement already satisfied: html5lib!=1.0b1,!=1.0b2,!=1.0b3,!=1.0b4,!=1.0b5,!=1.0b6,!=1.0b7,!=1.0b8,>=0.99999999pre in c:\users\hp\anaconda3\lib\site-packages (from bleach->nbconvert>=4.2->jupyter_contrib_nbextensions) (1.0.1)
Requirement already satisfied: prompt-toolkit<2.0.0,>=1.0.15 in c:\users\hp\anaconda3\lib\site-packages (from ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (1.0.15)
Requirement already satisfied: jedi>=0.10 in c:\users\hp\anaconda3\lib\site-packages (from ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.12.1)
Requirement already satisfied: simplegeneric>0.8 in c:\users\hp\anaconda3\lib\site-packages (from ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.8.1)
Requirement already satisfied: colorama; sys_platform == "win32" in c:\users\hp\anaconda3\lib\site-packages (from ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.3.9)
Requirement already satisfied: pickleshare in c:\users\hp\anaconda3\lib\site-packages (from ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.7.4)
Requirement already satisfied: backcall in c:\users\hp\anaconda3\lib\site-packages (from ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.1.0)
Requirement already satisfied: python-dateutil>=2.1 in c:\users\hp\anaconda3\lib\site-packages (from jupyter-client>=5.2.0->notebook>=4.0->jupyter_contrib_nbextensions) (2.7.3)
Requirement already satisfied: webencodings in c:\users\hp\anaconda3\lib\site-packages (from html5lib!=1.0b1,!=1.0b2,!=1.0b3,!=1.0b4,!=1.0b5,!=1.0b6,!=1.0b7,!=1.0b8,>=0.99999999pre->bleach->nbconvert>=4.2->jupyter_contrib_nbextensions) (0.5.1)
Requirement already satisfied: wcwidth in c:\users\hp\anaconda3\lib\site-packages (from prompt-toolkit<2.0.0,>=1.0.15->ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.1.7)
Requirement already satisfied: parso>=0.3.0 in c:\users\hp\anaconda3\lib\site-packages (from jedi>=0.10->ipython->jupyter-latex-envs>=1.3.8->jupyter_contrib_nbextensions) (0.3.1)
Building wheels for collected packages: jupyter-nbextensions-configurator, jupyter-latex-envs
  Building wheel for jupyter-nbextensions-configurator (setup.py) ... done
  Stored in directory: C:\Users\HP\AppData\Local\pip\Cache\wheels\2d\38\74\ac84d484daaa7818d65661216c57ab5ef746202845fe6cb1a3
  Building wheel for jupyter-latex-envs (setup.py) ... done
  Stored in directory: C:\Users\HP\AppData\Local\pip\Cache\wheels\e1\97\01\fc028f4a234bf10959aef88faddc04d738746e10dcf6f6ba86
Successfully built jupyter-nbextensions-configurator jupyter-latex-envs
Installing collected packages: jupyter-highlight-selected-word, jupyter-contrib-core, jupyter-nbextensions-configurator, jupyter-latex-envs, jupyter-contrib-nbextensions
Successfully installed jupyter-contrib-core-0.3.3 jupyter-contrib-nbextensions-0.5.1 jupyter-highlight-selected-word-0.2.0 jupyter-latex-envs-1.4.6 jupyter-nbextensions-configurator-0.4.1
```
