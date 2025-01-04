---
title: 用macbook玩原神
copyright: true
comment: false
mathjax: false
date: 2025-01-04 02:48:58
updated: 2025-01-04 02:48:58
tags:
  - mac
categories: mac
keywords: mac,macbook,macbook-air,m1,yuanshen,genshin,原神
permalink: how-to-play-yuanshen-on-macbook-air-m1/
description: 用macbook玩原神
---
主流的有三种方法。

<!--more-->

## 1. 模拟器

安装一个模拟器，可以模拟一个Windows环境，这样不仅是原神，其他很多Windows专用的游戏和软件也可以。

但是游戏性能相比其他方法差很多。

知名的模拟器有：VirtualBox，VMware，Parallels Desktop，UTM等。

目前性能体验最好的是`Parallel Desktop`，但其高昂的价格让人来不嗦。

### VirtualBox、VMware、Parallels Desktop 和 UTM 的对比

| 特性         | VirtualBox                | VMware Workstation/Fusion | Parallels Desktop        | UTM                       |
|--------------|----------------------------|--------------------------|---------------------------|--------------------------|
| **价格**       | 免费开源                  | 付费 (有免费的 Player)     | 付费 (订阅制/买断制)              | 免费开源 (有付费 Mac App Store 版本) |
| **主机操作系统** | Windows, macOS, Linux, Solaris | Windows, Linux (Workstation) / macOS (Fusion) | macOS                   | macOS (基于 QEMU)         |
| **客户操作系统** | 广泛，包括 Windows, Linux, macOS 等 | 广泛，包括 Windows, Linux, macOS 等 | 广泛，包括 Windows, Linux, macOS 等 | 广泛，包括 Windows, Linux, macOS 等 |
| **性能**       | 良好                      | 优秀                     | 优秀，特别是图形性能       | 良好，取决于配置           |
| **图形性能**    | 一般                      | 良好                     | 最佳，针对 macOS 优化      | 一般，QEMU 限制            |
| **易用性**      | 良好                      | 良好                     | 最佳                      | 相对复杂，需要配置         |
| **功能**       | 基本的虚拟化功能         | 高级功能，如快照、克隆、网络工具等 | 高级功能，如融合模式、快照等 | 基本的虚拟化功能，通过 QEMU 配置扩展 |
| **快照**       | 支持                      | 支持                     | 支持                      | 支持 (QEMU 功能)          |
| **集成度**      | 一般                      | 良好                     | 与 macOS 高度集成          | 一般                      |
| **3D 加速**    | 有限                      | 良好                     | 最佳                      | 有限 (QEMU 限制)          |
| **硬件虚拟化支持**| VT-x/AMD-V                | VT-x/AMD-V                | VT-x/AMD-V                | VT-x/AMD-V/Apple Silicon  |
| **开发支持**    | Oracle 主导            | VMware 主导              | Parallels 主导            | 社区驱动                  |
| **社区支持**    | 活跃                      | 活跃                     | 活跃                      | 活跃                     |
| **文件共享**    | 共享文件夹               | 共享文件夹, 拖放         | 共享文件夹, 拖放, 剪贴板共享 | 共享文件夹, 网络共享       |
| **目标用户**    | 初学者、开发人员、个人用户     | 专业人士、开发人员       | macOS 用户, 追求性能和易用性 | 技术爱好者、寻求免费方案     |
| **Apple Silicon 支持** | 实验性 | 已支持(Fusion 13) | 已支持 (原生) | 已支持 (原生) |

### 总结

- **VirtualBox:** 免费开源，适合初学者和基本需求，跨平台兼容性好，但在性能和功能方面不如商业产品。
- **VMware Workstation/Fusion:** 功能强大、性能优秀，适合专业人士和开发人员。Workstation 适用于 Windows 和 Linux，Fusion 适用于 macOS。
- **Parallels Desktop:**  macOS 平台最佳选择，以其出色的性能、易用性和与 macOS 的高度集成而闻名，特别是在图形性能方面。
- **UTM:**  macOS 平台免费开源选择，基于 QEMU，支持 Apple Silicon，适合喜欢折腾的技术爱好者。需要一定的配置知识，但功能和性能不错。

### 选择建议

- **需要免费方案:**  VirtualBox (跨平台) 或 UTM (macOS)
- **macOS 平台最佳体验:** Parallels Desktop
- **Windows/Linux 平台专业需求:** VMware Workstation
- **追求性能和功能:** VMware Workstation/Fusion 或 Parallels Desktop
- **需要 Apple Silicon 原生支持:**  Parallels Desktop 或 UTM
- **喜欢开源和定制:** UTM

## 2. playcover使用ipa安装

- https://docs.playcover.io/getting_started/download_playcover

![](https://cdn.zyha.cn/blog/20250104140204709.png?x-oss-process=style/blog)

下载的是ios的资源包，使用的磁盘空间相比其他方式只需要更少的磁盘空间。

麻烦的是不能自动更新新版本，需要每次重新找新版本的ipa文件进行手动迁移。

## 3. yaagl

- https://github.com/yaagl/yet-another-anime-game-launcher

![](https://cdn.zyha.cn/blog/20250104142552330.png?x-oss-process=style/blog)

Yaagl是3种方式中玩PC「原神」效率最高的方式。

- 国服(miHoYo)：
  - 原神： Yaagl.app.tar.gz
  - 崩坏：星穹铁道： Yaagl.HSR.app.tar.gz
  - 绝区零：Yaagl.ZZZ.app.tar.gz

- International(Hoyoverse):
  - Genshin Impact: Yaagl.OS.app.tar.gz
  - Honkai: StarRail: Yaagl.HSR.OS.app.tar.gz
  - Zenless Zone Zero: Yaagl.ZZZ.OS.app.tar.gz

## 最后

除了ipa安装，另外两种都是下载的Windows版本的资源包，所以对磁盘空间要求更高，目前我5.3版本下载了80G左右的压缩包，需要预留170G+以上的磁盘空间。

如果只玩米家游戏，推荐使用yaagl安装。

## 参考

- https://zhuanlan.zhihu.com/p/264991041
