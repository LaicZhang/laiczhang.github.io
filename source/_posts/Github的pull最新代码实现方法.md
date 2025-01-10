---
title: Github的pull最新代码实现方法
copyright: true
comment: false
date: 2019-07-24 16:46:41
updated: 2019-07-24 16:46:41
tags:
  - github
  - git
categories: git
keywords: github,pull,最新代码,git-pull,git-push
permalink: git-pull-the-last-github-repo/
description: github的pull最新代码实现方法.
---

`github`现在已经经常用了，但是经常遇到下面的问题

比如：从一个项目A中`fork`了一个分支B，并且在分支B有了改动。过了几天后，项目A中的代码应该会有很多人提交修改了，现在想将最新的代码`pull`到分支B。如何实现呢？

<!-- more -->

解决方法：
假设你`fork`的项目原始地址是`urlRep`, 你自己的是`urlYou`

```bash
$ git remote  add upstream urlRep 

# 你本地的origin应该跟自己的remote，并且当前本地branch是master。

$ git fetch upstream

$ git merge upstream/master  #merge可能会有冲突，手工解决掉并commit

$ git push # push到你自己的fork上

```

然后向原始项目提交一个`pull request`。

不知道你是不是想要这个…我现在是通过这种方式更新的，直接用`git` 的 `bash`；

`tmp`看看本地`master`和`tmp`的区别，没问题的话再`git merge tmp`。这样比直接`git pull upstream`来的安全。
