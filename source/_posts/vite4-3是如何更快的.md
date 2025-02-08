---
title: vite4.3是如何更快的
copyright: true
comment: false
mathjax: false
date: 2023-09-21 10:26:26
updated: 2023-09-21 10:26:26
tags:
  - vue
  - vite
  - 前端
categories: 优化
keywords: 优化,vue,vite,vite4,前端,vue3
permalink: vite4-3-is-faster/
description: vite4.3是如何更快的,为什么Vite 4.3比Vite 4.2性能提高了这么多
---
![vite4.3启动时间](https://cdn.zyha.cn/blog/20240410171659.png?x-oss-process=style/blog)

正如[@sapphi-red](https://github.com/sapphi-red/)所说，Vite 4.3比Vite 4.2性能得到了极大提高。

除大概阐述外，我还找了一些具有代表性的PR，来看看Vite 4.3具体是如何做到的。
<!-- more -->
## 为什么Vite 4.3比Vite 4.2性能提高了这么多

### 1. 更智能的调度策略

Vite解析所有收到的URL和路径，以获取目标模块。

在Vite 4.2中，有许多冗余的解析逻辑和不必要的模块搜索。Vite 4.3使解析逻辑更简单、更严格、更准确，以减少计算和fs调用。

#### 1.1 简化调度 [#12576](https://github.com/vitejs/vite/pull/12576)

Vite 4.2严重依赖[resolve](https://www.npmjs.com/package/resolve)包来解析依赖的package.json，当我们查看resolve源码时，可以发现在解析package.json时有很多无用的逻辑。 Vite 4.3 放弃了解析，遵循更简单的解析逻辑：直接检查嵌套父目录中是否存在 package.json。

#### 1.2 更严格的解析 [#12542](https://github.com/vitejs/vite/pull/12542)

Vite要调用Nodejs fs API 来查找模块，但IO操作是很消耗资源的。 Vite 4.3缩小了文件搜索范围，并跳过了一些特殊路径的搜索，以尽可能减少fs调用。

例如：

- 由于#符号不会出现在URL中，并且用户可以控制源文件路径中不包含#符号，因此Vite 4.3不再检查用户源文件中带有#符号的路径，而只在node_modules中搜索。

- 在 Unix 系统中，Vite 4.2 首先检查根目录内的每个绝对路径，对于大多数路径都没有问题，但如果绝对路径以 root 开头，则很可能失败。为了在 /root/root 不存在时跳过搜索 /root/root/文件路径，Vite 4.3 会在开头判断 /root/root 是否作为目录存在，并预先缓存结果。

- 当Vite服务器收到@fs/xxx和@vite/xxx时，无需再次解析这些UR L。 Vite 4.3 直接返回之前缓存的结果，而不是重新解析它们。

#### 1.3 更准确的解析 [#12542](https://github.com/vitejs/vite/pull/12542)

Vite 4.2 当文件路径为目录时会递归解析模块，这会导致不必要的重复计算。 Vite 4.3将递归分辨率扁平化，针对不同类型的路径应用合适的分辨率。展平后缓存一些 fs 调用也更容易。

#### 1.4 更快的解析 [#12476](https://github.com/vitejs/vite/issues/12476)

Vite 4.3打破了解析node_modules包数据的性能瓶颈。

Vite 4.2 使用绝对文件路径作为包数据缓存键。这还不够，因为 Vite 必须遍历 pkg/foo/bar 和 pkg/foo/baz 中的同一目录。

Vite 4.3 不仅使用绝对路径（/root/node _modules/pkg/foo/bar.js & /root/node_modules/pkg/foo/baz.js），还使用遍历的目录（/root/node_modules/pkg/foo/bar.js） module/pkg/foo & /root/node_modules/pkg) 作为 pkg 缓存的键。

另一种情况是，Vite 4.2 在单个函数内部查找深层导入路径的 package.json，例如 Vite 4.2 解析 a/b/c/d 这样的文件路径时，首先会检查 root a/package.json 是否存在，如果没有，则按照a/b/c/package.json -&gt; a/b/package.json的顺序查找最近的package.json，但事实是查找根package.json和最近的package.json应该处理分开，因为它们在不同的解析上下文中需要。 Vite 4.3 将根 package.json 和最近的 package.json 解析分为两部分，这样它们就不会混合。

### 2. fs.realpathSync [#2680](https://github.com/nodejs/node/issues/2680)

Nodejs 中有一个有趣的 realpath Sync 问题，它指出 fs.realpath Sync 比 fs.realpath Sync.native 慢 70 倍。

但由于在 Windows 上的行为不同，Vite 4.2 仅在非 Windows 系统上使用 fs.realpathSync.native。为了解决这个问题，Vite 4.3 在 Windows 上调用 fs.realpath Sync.native 时添加了网络驱动器验证。

### 3. 非阻塞任务

作为一种按需服务，Vite 开发服务器不需要所有东西都准备好就可以启动。

#### 3.1 非阻塞tsconfig解析 [#12548](https://github.com/vitejs/vite/issues/12548)

Vite 服务器在预捆绑 ts 或 tsx 时需要 tsconfig 数据。

Vite 4.2 在服务器启动之前等待插件钩子配置中的 tsconfig 数据被解析解析。一旦服务器启动而没有准备好 tsconfig 数据，页面请求就可以访问服务器，即使该请求可能需要稍后等待 tsconfig 解析。

Vite 4.3 在服务器启动之前初始化 tsconfig 解析，但服务器不会等待它。解析过程在后台运行。一旦有 ts 相关的请求进来，就必须等待 tsconfig 解析完成。

#### 3.2 非阻塞文件处理 [#12603](https://github.com/vitejs/vite/issues/12603)

Vite中有大量的fs调用，其中一些是同步的。这些同步 fs 调用可能会阻塞主线程。 Vite 4.3 将它们更改为异步。此外，异步函数的并行化也更容易。关于异步函数，您应该关心的一件事是，在解析后可能有许多 Promise 对象需要释放。由于更智能的解析策略，释放 fs - Promise 对象的成本要少得多。

### 4. HMR 优化 [#12658](https://github.com/vitejs/vite/issues/12658)

考虑两个简单的依赖链C < - B < - A & D < - B < - A，当A被编辑时，HMR会从A传播到C，从A传播到D。这导致A和B在Vite中被更新两次4.2.
Vite 4.3 会缓存这些遍历过的模块，以避免多次探索它们。这可能会对那些具有组件桶导入的文件结构产生重大影响。这对于 git checkout 触发的 HMR 也有好处。

### 5. 并行化 [#12754](https://github.com/vitejs/vite/issues/12754)

并行化始终是获得更好性能的不错选择。在 Vite 4.3 中，我们并行化了一些核心功能，包括导入分析、提取 deps 的导出、解析模块 url 和运行批量优化器。并行化之后确实有令人印象深刻的改进。

### 6. JavaScript 优化

不要错过编程语言优化。 Vite 4.3 中一些有趣的 javascript 优化案例：

#### 6.1 用回调替换 *yield [#12541](https://github.com/vitejs/vite/issues/12541)

Vite 使用 tsconfck(by @dominikg) 来查找和解析 tsconfig 文件。 tsconfck 过去通过 *yield 遍历目标目录，生成器的一个缺点是它需要更多的内存空间来存储其 Generator 对象，并且在运行时会有大量的生成器上下文切换。所以@dominikg 自 v2.1.1 以来在核心中用回调替换了*yield 。

#### 6.2 使用 startsWith & endsWith 替换 === [#12531](https://github.com/vitejs/vite/issues/12531)

Vite 4.2 使用开头 With 和结尾 With 来检查热 UR L 中的标题和尾随“/”。我们比较了 str.starts With('x') 和 str[0] === 'x' 的执行基准，发现 === 比starts With 快约 20%。同时，ends With 比 === 慢约 60%。

#### 6.3 避免重新创建正则表达式 [#12518](https://github.com/vitejs/vite/issues/12518)

Vite需要很多正则表达式来匹配字符串，其中大多数都是静态的，所以最好只使用它们的单例。 Vite 4.3 提升了正则表达式，以便可以重复使用它们。

#### 6.4 放弃生成自定义错误

Vite 4.2 中存在一些为了更好的 DX 的自定义错误。这些错误可能会导致额外的计算和垃圾收集，从而降低 Vite 的速度。在 Vite 4.3 中，我们必须放弃生成一些热门的自定义错误（例如 package.json NOT _ FOUND 错误）并直接抛出原始错误以获得更好的性能。

### 参考

- [Vite 4.3 is out!](https://vitejs.dev/blog/announcing-vite4-3.html)
- [How we made Vite 4.3 faaaaster](https://sun0day.github.io/blog/vite/why-vite4_3-is-faster.html#smarter-resolve-strategy)
- [github.com/vitejs/vite/pulls](https://github.com/vitejs/vite/blob/v4.4.9/packages/vite/CHANGELOG.md#430-2023-04-20)
