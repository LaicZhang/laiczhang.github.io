---
title: prisma使用3个月有感
copyright: true
comment: false
mathjax: false
date: 2023-10-08 22:46:04
updated: 2024-06-07 11:06:04
tags:
  - orm
  - sql
  - api
categories: 后端
keywords: prisma,prisma-orm,orm-prisma, orm, sqlite, typeorm, 后端, 数据库,drizzle, cloudflare,d1,api,drizzle-orm,create,createMany,node,ts
permalink: prisma-has-been-used-for-3-months/
description: prisma使用3个月有感,prisma是什么,prisma的优缺点
---
用了3个月的prisma，作为和TypeOrm可以说占据了大部分的node后端orm份额，但实际我个人用起来，虽然在参数类型上比较方便，但其他还有值得改进的点，但官方给人的感觉就很傲慢，就这个态度，在我看来目前还称不上`下一代ORM`。

因为本人主要做前端开发，写后端只是顺带，所以一定会有不了解的地方。以下为个人使用过程中遇到的，仅作记录。

- 2024.4.21 更新： `5.12.0` 发布，sqlite支持了`createMany`方法。
- 2024.6.7 更新： `5.15.0` 发布，支持拆分配置文件
<!-- more -->

![](https://img.tucang.cc/api/image/show/19c5795185d2aaa62c456adfff6973e5)

## 不错的点

### 提供操作的类型可以直接使用

比如，我想插入一条user数据，我可以直接使用`Prisma.UserCreateInput`，而不需要自己定义一个`interface`，这点我觉得非常不错。

```ts
async create(data: Prisma.UserCreateInput): Promise<User> {
    try {
      data.password = await hashPassword(data.password);
      return await this.prisma.user.create({
        data,
      });
    } catch (e) {
      throw new HttpExceptionFilter();
    }
  }
```

除了`Prisma.UserCreateInput`，还有`Prisma.UserUpdateInput`，`Prisma.UserWhereUniqueInput`等等，这些都是prisma自动生成的，非常方便。但是仍然有不完美的地方就是，自动生成的类型无法在swagger中直接使用，

```ts
@ApiBody({ type: () => Prisma.UserUpdateInput })
// error TS2339: Property 'UserCreateInput' does not exist on type 'typeof Prisma'.
```

需要自己去implements一下。

```ts
export class CreateUserDto implements Prisma.UserCreateInput {}

@ApiBody({ type: () => CreateUserDto })
```

## 社区认为值得改进但官方并不重视

### issue及pr处理不积极

![20240607130914](https://cdn.zyha.cn/blog/20240607130914.png?x-oss-process=style/blog)

官方仓库[prisma/prisma](https://github.com/prisma/prisma)的`issue`及`pr`处理速度非常慢，而且很多`issue`都没有回复，且已经提了的pr也长期不处理。

在issue提出的问题，如果官方认为社区可以解决是会马上被转移至Discussion区的，所以可见接近3k的issue是值得官方来进行解决和说明的。

### ~~核心功能缺失~~

**prisma 5.12.0 版本，sqlite已经支持`createMany`方法。猜测一下，多半是因为其竞品`drizzle`以及`cloudflare D1`正式发布的原因**

我开始的时候使用`SQLite`进行开发，但是在使用过程中发现`prisma`的`Sqlite`支持非常不完善，甚至可以说是部分功能完全不可用，比如说：

- `createMany`，作为`ORM`，我个人认为这是最核心这个功能，然而在`Sqlite`中是不支持的，很久的`issue`了。
  - [createMany is a very worth considering for testing in sqlite development mode #21206](https://github.com/prisma/prisma/issues/21206)
  - [Add the createMany method to SQLite #10710](https://github.com/prisma/prisma/issues/10710)
  - [prisma.model.createMany is not a function #11507](https://github.com/prisma/prisma/issues/11507)

`prisma`团队以性能问题，一直没有解决，这个功能在我看来是非常基础的功能。开发者也明确说明了不需要在乎性能，就是想做开发测试，但是`prisma`却仍然没有支持，这让我非常不解，最后不得不换到了`postgres`上。

### 提出的优秀feat官方并不进行支持

- ~~不支持拆分配置文件。`prisma`的数据模型设计文件并非`.ts`，而是自定义的`*.prisma`。以我正在开发中的项目为例子，目前只设计了`62`张表，`schema.prisma`（`prisma`默认存放表结构的文件）已经`800+`行。~~ 最新版本已经支持。
  - ~~[Support for splitting Prisma schema into multiple files #2377](https://github.com/prisma/prisma/issues/2377)~~
- 不提供`@default(nanoid())`，只支持`@default(uuid())`。
  - [Implement nanoid() #18612](https://github.com/prisma/prisma/issues/18612)
  - [Make @default(nanoid()) alphabet configurable #17294](https://github.com/prisma/prisma/issues/17294)
  - [Support ULID · Issue #13679 · prisma/prisma · GitHub](https://github.com/prisma/prisma/issues/13679)
  - [Support UUID v7 · Issue #24079 · prisma/prisma · GitHub](https://github.com/prisma/prisma/issues/24079)

### Bug年久失修

- schema.prisma中定义，

```prisma
model Answer {
  id String @id @default(cuid())
  question Question @relation(fields: [questionId], references: [id], onDelete: Cascade)
  questionId String
}
```

然后在代码中使用

```ts
create(questionId: string, input: AnswerInput) {
return this.prisma.answer.create({
    data: {
    ...input,
    questionId,
    },
});
}
```

以上，看起来没错，但是， [Type 'string' is not assignable to type 'never' #15946 - @DiogoMarques2003 opened this issue on Oct 24, 2022](https://github.com/prisma/prisma/issues/15946)

## 最后

希望prisma能够越来越好，但是目前来看，我个人认为prisma还不够成熟，还有很多需要完善的feat。
