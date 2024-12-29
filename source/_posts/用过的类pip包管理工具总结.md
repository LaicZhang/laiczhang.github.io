---
title: 用过的类pip包管理工具总结
copyright: true
comment: false
mathjax: false
date: 2024-12-29 19:57:45
updated: 2024-12-29 19:57:45
tags:
  - pip
  - 包管理工具
categories: 工具
keywords: pip, 包管理工具, 类pip包管理工具总结, pipx, uv,py,python,pip3,brew,win,mac,bash
permalink: summary-of-used-pip-like-package-management-tools/
description: 本文总结了用过的类pip包管理工具，包括 pipx, uv, pip/pip3。
---
`uv`, `pip`, 和 `pipx` 都是比较知名的 Python 包管理工具，但它们在功能和使用场景上存在差异。

<!-- more -->

## 1.pipx

### 核心功能

- 安装和运行 Python 可执行程序 (命令行工具) 到隔离的环境中。
- 主要用于全局安装 Python 工具，避免与项目依赖冲突。
- 不适用于安装项目依赖。

### 1.1 使用场景

- 安装和运行 Python 开发工具 (例如：`black`, `flake8`, `pytest`)。
- 安装和运行独立的命令行应用 (例如：`youtube-dl`, `awscli`)。

### 1.2 特点

- 自动创建和管理每个工具的虚拟环境。
- 安装的工具不会影响其他项目或全局环境。
- 专注于命令行工具的安装和管理。
- 通常安装速度比 `pip` 快一些，因为它不需要处理项目依赖的复杂性。

### 1.3 示例

```bash
# 安装 pipx
brew install pipx  # macOS

# 安装一个命令行工具
pipx install black

# 运行一个命令行工具
black --version

# 升级一个命令行工具
pipx upgrade black

# 卸载一个命令行工具
pipx uninstall black
```

## 2. uv

### 2.1 核心功能

- 是一个新的、用 Rust 编写的 Python 包管理器。
- 主要关注速度和性能。
- 支持 `pip` 的大部分功能（安装、升级、卸载包，处理 `requirements.txt`）。
- 还支持创建和管理虚拟环境。

### 2.2 使用场景

- 所有需要安装和管理 Python 包的项目。
- 开发环境：快速安装项目依赖。
- 生产环境：快速部署项目依赖。
- 创建和管理虚拟环境。

### 2.3 特点

- 速度快： 使用 Rust 编写，性能显著优于 `pip`。
- 与 pip 兼容： 基本兼容 `pip` 的用法，容易上手。
- 现代化的设计： 提供更好的用户体验和功能。
- 相对较新： 可能还在快速发展中，不如 `pip` 稳定。

### 2.4 示例

```bash
brew install uv  # macOS
# 直接下载安装脚本，支持 macOS和Linux.
curl -LsSf https://astral.sh/uv/install.sh | sh

# On Windows.
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# With pipx.
pipx install uv

# With Homebrew.
brew install uv

# With Pacman.
pacman -S uv
```

```bash

# 创建一个虚拟环境
uv venv .venv

# 激活虚拟环境
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate # Windows

# 安装一个包
uv pip install requests

# 安装 requirements.txt 中的依赖
uv pip install -r requirements.txt

# 升级一个包
uv pip install --upgrade requests

# 卸载一个包
uv pip uninstall requests
```

## 3. pip/pip3

### 3.1 核心功能

- 安装、升级、卸载 Python 包。
- 管理 Python 项目的依赖。
- 使用 `requirements.txt` 文件管理依赖。
- 连接 PyPI (Python Package Index) 等包仓库。
- 是 Python 生态系统中最核心和最基础的包管理工具。

### 3.2 使用场景

- 所有需要安装和管理 Python 包的项目。
- 开发环境：安装项目依赖。
- 生产环境：部署项目依赖。
- 创建虚拟环境 (通常与 `venv` 或 `virtualenv` 配合)。

### 3.3 特点

- Python 自带，广泛使用。
- 功能强大且稳定。
- 相对较慢的安装速度（特别是对于大型项目）。
- 安装包直接影响当前 Python 环境，需要使用虚拟环境隔离。

### 3.4 示例

```bash
# 安装一个包
pip install requests

# 安装 requirements.txt 中的依赖
pip install -r requirements.txt

# 升级一个包
pip install --upgrade requests

# 卸载一个包
pip uninstall requests
```

## 4. 总结

| 特性          | `pip`               | `pipx`              | `uv`                |
| :------------ | :------------------ | :------------------ | :------------------ |
| 主要功能    | 项目依赖管理        | 命令行工具管理        | 项目依赖管理        |
| 目标        | 基础包管理          | 隔离的工具安装     | 高性能包管理      |
| 用途        | 项目依赖、开发部署   | 命令行工具          | 项目依赖、开发部署   |
| 速度        | 相对较慢            | 较快                | 非常快          |
| 隔离        | 需要虚拟环境        | 自动隔离           | 支持虚拟环境       |
| 易用性      | 广泛使用，成熟     | 专注于特定用途     | 相对较新，但易用   |
| 语言        | Python             | Python              | Rust              |
| 兼容性      |  标准，高度兼容      |  专注于 CLI 工具 |  基本兼容 pip       |
| 更新频率    |  成熟、稳定       |  较慢       |  较快，快速发展      |

选择建议:

- `pip`: 如果你需要一个可靠的、标准的 Python 包管理工具，且不追求极致速度，`pip` 是一个不错的选择。它是所有 Python 开发的基础。
- `pipx`: 如果你需要全局安装和运行 Python 命令行工具，并希望它们之间相互隔离，`pipx` 是最佳选择。
- `uv`: 如果你追求更快的包管理速度，并且希望尝试一种新的、现代化的工具，`uv` 是一个有吸引力的选择。它在未来可能会成为 `pip` 的强力竞争者。

在实际使用中，通常会将 `pip` 与虚拟环境 (例如 `venv` 或 `virtualenv`) 结合使用进行项目依赖管理， `pipx` 用于命令行工具管理，而 `uv` 可以在需要高性能的时候作为 `pip` 的替代品。

## 5. 参考  

- https://vra.github.io/2024/03/31/uv-tutorial1/