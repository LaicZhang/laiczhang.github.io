---
title: vite6新特性一览
copyright: true
comment: false
mathjax: false
date: 2025-02-08 14:38:57
updated: 2025-02-08 14:38:57
tags:
  - vue
  - vite
  - 前端
categories: 前端
keywords: vue,vite,vite6,vite6新特性,vue3,env,sass,postcss,hash,crypto,createHash
permalink: vite-6-new-features/
description: vite6新特性一览
---
本来想写一篇类似[vite4.3是如何更快的](./vite4-3-is-faster/)，发现vite6并没有做出太多性能上的优化及新特性的探索，算是一个vite7的过渡版本，所以本文简单过一下新特性和一些优化的点吧。

<!--more-->
## 新特性

### 环境 API

这应该是此次版本更新中最主要的特性，但主要影响范围是在插件上，大部分用户不需要做改动。

```ts
import { Plugin } from 'vite'

export function myPlugin(): Plugin {
  return {
    name: 'my-plugin',
    resolveId(id, importer, options) {

      const isSSR = this.environment.name !== 'client'

      if (isSSR) {
        // SSR 特有逻辑
      } else {
        // 客户端特有逻辑
      }
    },
  }
}
```

### Sass 默认使用现代 API

在 Vite 5 中，Sass 默认使用传统 API。Vite 5.4 增加了对现代 API 的支持。

从 Vite 6 开始，Sass 默认使用现代 API。如果想继续使用传统 API，可以设置 `css.preprocessorOptions.sass.api: 'legacy'` / `css.preprocessorOptions.scss.api: 'legacy'`。

此变更可能会影响所有使用sass和postcss的项目。

建议同时将sass更新到最新版本。

升级现代api的好处：更好的性能和编译速度，多次依赖相同的样式表不再会导致重复的CSS。

## 性能优化

### crypto.hash

- https://nodejs.org/docs/latest-v20.x/api/crypto.html#cryptohashalgorithm-data-outputencoding

`crypto.hash`似乎比`crypto.createHash`更快，它也使代码更简单（当我们可以删除polyfill部分时）。

```ts
// old
import { createHash } from 'node:crypto'

export const cspHashes = [
  safari10NoModuleFix,
  systemJSInlineCode,
  detectModernBrowserCode,
  dynamicFallbackInlineCode,
].map((i) => createHash('sha256').update(i).digest('base64'))
```

```ts
// new
import crypto from 'node:crypto'

const hash =
  // eslint-disable-next-line n/no-unsupported-features/node-builtins -- crypto.hash is supported in Node 21.7.0+, 20.12.0+
  crypto.hash ??
  ((
    algorithm: string,
    data: crypto.BinaryLike,
    outputEncoding: crypto.BinaryToTextEncoding,
  ) => crypto.createHash(algorithm).update(data).digest(outputEncoding))

export const cspHashes = [
  safari10NoModuleFix,
  systemJSInlineCode,
  detectModernBrowserCode,
  dynamicFallbackInlineCode,
].map((i) => hash('sha256', i, 'base64'))
```

### 更新eslint规则

```js
  {
    name: 'disables/vite/cjs',
    files: ['packages/vite/index.cjs'],
    rules: {
      'no-restricted-globals': 'off',
      'n/no-missing-require': 'off',
    },
  },
```

### 如果代码拆分css，跳过style.css提取

如果对 CSS 进行代码拆分，有一部分代码仍在提取合并的 CSS 块，以生成非代码拆分的 style.css 块，而这个块总是空的。

因此更新为只有在cssCodeSplit被禁用时才会提取合并的CSS块。

- [perf(css): skip style.css extraction if code-split css](https://github.com/vitejs/vite/pull/18470)

## 参考

- [Vite 6.0 发布了！](https://cn.vite.dev/blog/announcing-vite6)
- [feat(css): support sass modern api](https://github.com/vitejs/vite/pull/17728#issuecomment-2247572134)
