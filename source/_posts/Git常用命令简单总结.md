---
title: Git常用命令简单总结
copyright: true
comment: true
mathjax: false
date: 2021-12-22 10:29:04
updated: 2021-12-22 10:29:04
tags:
  - git
  - 命令
categories: git
keywords: git,命令,总结,版本管理
permalink: git-commands-summary/
description:
---
实习期间常用的git命令总结。
<!--more-->
## 拉取代码

每天早上来，第一件事就是拉取最新代码，看看有没有代码冲突需要修改。

```bash
git stash # 将现有的未完善的代码弹出栈保存起来
git pull # 拉取最新代码
git stash pop # 将保存的未完善代码恢复到工作区
```

## 提交代码

每次提交代码前，都要检查代码是否有问题，如果有问题，需要修改代码，然后再提交。

```bash
git add . # 添加所有文件
git commit -m "feat: 提交修改" # 提交修改
git push # 推送到远程仓库
```

## 分支

分支是一种特殊的分组，可以将代码分为多个分支，每个分支都有自己的代码，每个分支都有自己的状态，每个分支都有自己的历史记录。

### 分支的创建

```bash
git branch # 查看当前分支
git branch new_branch # 创建新分支
git checkout new_branch # 切换到新分支
```

### 分支的切换

```bash
git checkout master # 切换到主分支
git checkout -b new_branch # 创建新分支并切换到新分支
```

### 分支的删除

```bash
git branch -d new_branch # 删除分支
```

### 分支的合并

```bash
git checkout master # 切换到主分支
git pull # 拉取最新代码
git merge new_branch # 将new_branch分支合并到master分支
```

### 分支的分裂

```bash
git checkout new_branch # 切换到新分支
git checkout -b new_branch_2 # 创建新分支并切换到新分支
```

### 分支的管理

```bash
git branch -a # 查看所有分支
git branch -v # 查看所有分支的历史记录
git branch -vv # 查看所有分支的历史记录，并显示分支名称
git branch -d new_branch # 删除分支
git branch -D new_branch # 强制删除分支
git branch -m new_branch new_branch_2 # 分支名称修改
git branch -M new_branch new_branch_2 # 分支名称修改
```

## 代码回滚

### 回滚到某个版本

```bash
git reset --hard HEAD~1 # 回滚到上一个版本
git reset --hard HEAD~2 # 回滚到倒数第二个 版本
git reset --hard XXXXXX # 回滚到指定XXXXXX版本
```

需要注意的是，--hard是直接将本地版本与远程版本恢复成一致，如果不想代码丢失，可以使用--soft恢复到暂存区。

## 问题解决

### vscode提示无法提交

- Can't push refs to remote. Try running 'Pull' first to integrate your changes.

```bash
git pull --rebase origin branchname
git push origin branchname
```

## 最后

idea，vscode等工具，都有界面化git操作框，可以帮助我们快速形象的完成git的操作，但是初学的时候多敲几行命令可以帮助更容易理解相应的操作。
