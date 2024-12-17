---
title: 升级prisma至v6
copyright: true
comment: false
mathjax: false
date: 2024-11-29 14:17:31
updated: 2024-12-17 14:17:31
tags:
  - prisma
  - orm
categories: orm
keywords: prisma, orm, upgrade, v6, v5,sql,nodejs,ts, 翻译
permalink: upgrading-to-prisma-6/
description:
---
Prisma ORM v6 版本更新会带来一些破坏性更新，如果你从旧版本升级，需要特别注意。这份指南解释了升级对你的应用可能的影响，并提供了处理这些变化的指导。

- 2024-11-29吐槽， 时隔半个月，[jetbrains官方维护的prisma插件](https://plugins.jetbrains.com/plugin/20686-prisma-orm/reviews/new)仍然没有跟进更新，使用v6新特性会报错。

<!-- more -->
![](https://img1.tucang.cc/api/image/show/ca3dc7d7d5b8b022efe28527dbad09e0)

## 写在前面

```txt
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["prismaSchemaFolder", "fullTextSearchPostgres"]
}
```

```txt
The preview feature "fullTextSearchPostgres" is not known. Expected one of: deno, driverAdapters, fullTextIndex, fullTextSearch, metrics, multiSchema, nativeDistinct, postgresqlExtensions, tracing, views, relationJoins, prismaSchemaFolder, omitApi, strictUndefinedChecks. If this is unexpected, it might be due to your editor's Prisma Extension being out of date.
```

如上，jetbrains提供的prisma暂时不支持新特性，所以以下推荐使用vscode安装prisma官方维护的[prisma插件](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)来体验新特性。

## 升级前准备

- Prisma v6 支持的新最低 TypeScript 版本为 5.1.0。
- 对于 Node.js 18，最低支持版本是 18.18.0；
- 对于 Node.js 20，最低支持版本是 20.9.0；
- 对于 Node.js 22，最低支持版本是 22.11.0。

Node.js 16、17、19 和 21 没有官方支持。

```bash
❯ node -v
v22.11.0
❯ tsc -v
Version 5.1.6
```

满足以上要求后，可以开始升级。

## 具体更新步骤

### PostgreSQL 上隐式 m-n 关系的模式变更

如果使用 PostgreSQL 并在 Prisma 模式中定义隐式多对多关系，Prisma ORM 会在后台为维护关系表。这个关系表有 A 和 B 列来代表参与此关系的关系模型的表。

以前的 Prisma ORM 版本会在这两个字列上创建一个唯一索引。在 Prisma v6 中，这个唯一索引将变为主键，以简化默认的复制身份行为。

所以需要执行一次migrate命令来更新数据库模式。

```bash
npx prisma migrate dev --name upgrade-to-v6
```

### PostgreSQL 上的全文搜索

fullTextSearch 预览功能仅对 MySQL 提升为正式可用。

这意味着如果使用 PostgreSQL 并且当前使用这个预览功能，需要使用新的 fullTextSearchPostgres 预览功能：

```txt
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearch"]
}
```

改写为：

```txt
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearchPostgres"]
}
```

### 使用 Buffer

为了提高 Prisma 与新现代 JavaScript 运行时的兼容性，正在逐步放弃 Node.js 特定 API，转而使用标准 JavaScript。

Prisma v6 用 Uint8Array 替换了 Buffer 来表示类型为 Bytes 的字段。确保将所有 Buffer 类型的实例替换为新的 Uint8Array。

```ts
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.user.deleteMany()

  const bytesCreated = await prisma.user.create({
    data: {
      bytes: Buffer.from([1, 2, 3, 4]),
    },
  })
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^
  // `bytesCreated` 以前是类型：{
  //    bytes: Buffer
  //    id: number
  // }

  for (const bytesFound of await prisma.user.findMany()) {
    bytesFound.bytes // Buffer [ 1, 2, 3, 4 ]
  }
}

main()
```

改写为：

```ts
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.user.deleteMany()

  const bytesCreated = await prisma.user.create({
    data: {
      bytes: Uint8Array.from([1, 2, 3, 4]),
    },
  })
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^
  // `bytesCreated` 现在是类型：{
  //    bytes: Uint8Array
  //    id: number
  // }

  for (const bytesFound of await prisma.user.findMany()) {
    bytesFound.bytes // Uint8Array [ 1, 2, 3, 4 ]
  }
}

main()
```

### 移除 NotFoundError

Prisma v6 移除了 NotFoundError，转而使用错误代码 P2025 的 PrismaClientKnownRequestError 在 findUniqueOrThrow() 和 findFirstOrThrow() 中。

如果代码依赖于捕获 NotFoundError 实例，需要相应地调整代码。

```js
import { PrismaClient, NotFoundError } from '@prisma/client';

// 在一个 `async` 函数内部
try {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: 42 },
  });
  console.log(user);
} catch (error) {
  if (error instanceof NotFoundError) {
    console.error("User not found!");
  }
  else {
    console.error("Unexpected error:", error);
  }
}
```

改写为：

```js
import { PrismaClient, Prisma } from '@prisma/client';

// 在一个 `async` 函数内部
try {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: 42 },
  });
  console.log(user);
} catch (error) {
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === 'P2025' // 特定代码表示 "记录未找到"
  ) {
    console.error("User not found!");
  }
  else {
    console.error("Unexpected error:", error);
  }
}
```

### 新的不能用作模型名称的关键字：async, await, using

在此版本中，不能再使用 async, await 和 using 作为模型名称。

### 预览功能提升为一般可用性

#### fullTextIndex

如果使用了全文索引功能，可以从 Prisma 模式中的 previewFeatures 删除 `fullTextIndex` 预览功能。

#### fullTextSearch

如果集成Mysql的应用程序中使用了全文搜索功能，可以从 Prisma 模式中的 previewFeatures 删除 `fullTextSearch` 预览功能。

## 参考

- <https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-6>
