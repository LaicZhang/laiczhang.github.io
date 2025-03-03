---
title: 为什么我推荐使用ORM
copyright: true
comment: false
mathjax: false
date: 2024-07-06 11:09:24
updated: 2024-07-06 11:09:24
tags:
  - ORM
  - SQL
categories: 优化
keywords: ORM, SQL, 优化, 数据库, 关系型数据库, 对象关系映射, 数据库优化,database, mysql,postgresql,sqlite, mapping
permalink: why-i-recommend-using-orm/
description:
---
## 什么是 ORM

ORM（对象关系映射）是一种将对象编程语言中的对象与关系数据库中的数据表进行映射的技术。ORM工具通过提供一种高层抽象，使开发人员能够使用面向对象的方式操作数据库，从而避免了直接编写SQL语句。

<!--more-->

## ORM 的使用

为了照顾纯前端的同学，我将先展示一个简单的 demo 来演示 ORM 的使用。我们假定有三张表，用户表、文章表和评论表，它们之间的关系可以用图表现出来。每篇文章只能有一个作者，每个文章可以有多条评论，每一条评论只能属于某一篇文章。接下来我们来看看 ORM 在使用时，如何表达数据库中的关系，并使用它进行业务查询和展示。

![image.png](https://img.tucang.cc/api/image/show/3838456e751f0e5544a157201c456c24)
首先，我们会使用 ORM 来描述三个实体，包括用户、文章和评论。我们将使用 user 类来对应用户实体，使用 comment 类对应评论实体，使用 article 类对应文章实体。在 article 类中，我们将描述刚刚提到的两个关系，即每篇文章有一个作者，每篇文章有多条评论。我们将根据本地数据库的设置，连接到数据库，进行初始化操作。在初始化函数中，我们会首先连接到数据库，然后对这三张表进行数据清理。接下来，我们将演示如何使用 ORM 进行增删改查操作。

我们将先创建一个用户，并使用 ORM 功能查询出该用户，然后对其进行简单修改，并重新查询结果。接着，我们将创建一个文章，并添加两个评论。然后，我们将使用三种不同的方式来查询文章以及与之相关的作者和评论。在执行结果中，我们可以看到每个操作所对应的SQL语句和调用，以及查询到的结果。在下面的三个不同的API调用方式中，生成的 SQL 语句都是相似的。最终，我们将得到一篇文章及其相关的作者、评论以及其他信息。通过这个 demo，我们可以看到如何在 Node.js 中使用 ORM 进行增删改查操作。

![image.png](https://img.tucang.cc/api/image/show/29b9886c55ef4e0bd9b0b242faeba639)

## 优缺点

使用 ORM 有很多优点，例如 ORM 会对查询和更新操作进行数据预处理，从而防止 SQL 注入的风险。另外，ORM 屏蔽了直接编写 SQL 的细节，使得开发人员不必自己写 SQL，这对于 SQL 不熟练的人来说是一个好处。此外，由于ORM以模型为基础，因此支持 MVC 的开发架构，并且可以映射所有数据库表到内存的 model 中，这有助于组织和复用代码，避免了到处写SQL的尴尬处境。

然而，使用 ORM 也存在一些缺点。例如，由于 ORM 定制以及组合 API 生成的 SQL 的特性，有时自动生成的 SQL 可能不是最优的方案，这可能会导致性能问题。此外，为了处理各种复杂的逻辑，model 也会变得很复杂，处理查询结果可能会有不必要的对象深拷贝，这会影响应用的性能。同时，ORM 为了适配 SQL 满足的各种业务场景，有很多 API 需要学习，这也是一种成本。另外，对于一些奇怪的查询需求，ORM 可能无法满足，此时只能手写 SQL。

上面这些是我总结 ORM 的一些优点和缺点。如果觉得说的有点复杂了， 再看看gpt给出的回答，

```txt
# 使用ORM的优缺点总结

## 优点

1. **提高开发效率**：ORM工具自动生成SQL查询，减少了开发人员手动编写SQL的需求，从而加快了开发速度。
2. **提高代码可读性**：ORM允许开发人员使用面向对象的方式操作数据库，使代码更加直观和易读，减少了理解复杂SQL查询的难度。
3. **降低维护成本**：由于ORM将数据库操作封装在对象中，代码的修改集中在一个地方，方便维护和更新数据库结构。
4. **数据库无关性**：使用ORM可以在一定程度上实现数据库的无关性，使应用程序更容易迁移到不同的数据库系统。
5. **自动管理数据映射**：ORM自动管理对象与数据库之间的映射，处理复杂的关系和外键引用，简化了开发过程。

## 缺点

1. **性能开销**：ORM的抽象层和自动生成的SQL查询可能导致性能损失，尤其是在处理大数据量或复杂查询时。
2. **学习曲线**：掌握一个新的ORM框架需要时间和精力，特别是对于没有ORM经验的开发人员。
3. **限制灵活性**：ORM提供的高层抽象可能限制开发人员对数据库操作的完全控制，复杂的查询可能难以实现或性能不佳。
4. **隐藏SQL细节**：由于ORM隐藏了底层的SQL操作，开发人员可能对生成的SQL查询不够了解，难以进行优化和调试。
5. **可能的兼容性问题**：不同的ORM工具对数据库特性的支持可能不一致，在特定情况下可能会遇到兼容性问题。

## 总结

使用ORM有助于提高开发效率、代码可读性和维护性，但也带来了性能开销和灵活性受限等问题。选择是否使用ORM应根据项目需求、团队技能和性能要求等因素综合考虑。
```

## 相关链接

- [为什么选择 Prisma ORM？与 SQL 查询构建器和 ORM 的比较 | Prisma 文档 - Prisma 中文](https://prisma.org.cn/docs/orm/overview/introduction/why-prisma)
- [大家喜欢用纯 sql 还是 orm 框架？ - V2EX](https://v2ex.com/t/719199)
- [程序使用 ORM 框架是不是基本就可以解决 SQL 注入了？ - V2EX](https://v2ex.com/t/1013951)
- [大家喜欢用 ORM 还是直接写 SQL - V2EX](https://s.v2ex.com/t/1004383)
