---
title: 使用什么作为数据库的ID？
copyright: true
comment: false
mathjax: false
date: 2024-04-07 09:19:23
updated: 2024-05-07 09:19:23
tags:
  - sql
  - database
  - 数据库
categories: 数据库
keywords: sql,db,database,id,主键,外键,索引,主键索引,唯一索引,联合索引,聚集索引,复合索引,数据库设计,数据库优化,数据库索引,数据库性能,
permalink: what-is-the-best-id-for-a-database/
description:
---
## 前言

ID 是计算机系统中的重要概念，它用于标识不同的数据实体和交互过程。ID 生成方案是指用于生成唯一标识符（ID）的算法或方法。这些标识符通常用于唯一标识数据库中的记录、消息队列中的消息、分布式系统中的节点等。

本文建立在本人对过往项目的总结，主要是`nestjs+prisma`技术栈的代码实现，希望能对大家有所帮助。
<!-- more -->
## 理论上ID需要具备的特性

数据库中的唯一ID（或称为主键）通常需要具备以下特性：

- 唯一性（Uniqueness）：每个ID值必须是唯一的，不允许重复。这是主键的最基本特性，确保每行数据都可以通过唯一的标识进行识别和访问。
- 不变性（Immutability）：一旦分配给某行数据，ID就不能被更改或重用。这保证了数据的稳定性和一致性，避免了混淆或错误。
- 简短性（Shortness）：ID应该足够短以节省存储空间和提高检索效率，同时要足够长以确保唯一性。通常采用自增数字或UUID（通用唯一标识符）等方式生成。
- 简单性（Simplicity）：ID应该易于生成、理解和处理，不应过于复杂。这有助于简化开发和维护过程，并提高系统的可靠性。
- 可排序性（Sortable）：ID的生成方式应当考虑到其在排序操作中的性能和效率，以便支持一些需要基于ID进行排序的查询操作。
- 可读性（Readability）：尽管主键通常是内部使用的标识符，但在某些情况下，例如调试或日志记录，可读性也是一个有用的特性。因此，ID应该以一种可读的格式表示，使其易于识别和理解。
- 不含业务含义（No business meaning）：主键应当是无意义的值，不应当包含业务相关的信息。这有助于避免在业务规则变化时引起的问题，并提高系统的灵活性和可扩展性。
- 可扩展性（Scalability）：ID生成方式应当能够满足系统的扩展需求，即使在高并发或大规模数据量的情况下也能保持高效和稳定。
- 全局唯一性（Global uniqueness）：如果系统是分布式的，那么主键需要保证在全局范围内的唯一性，而不仅仅是在单个数据库或表中。

综合考虑这些特性，可以选择合适的主键生成方式和存储策略，以满足数据库设计的需求和业务规则的要求。

## 常见的ID生成方式

### 1. 自增ID

最简单的ID生成方式就是自增ID。这种方式的实现方式是，在数据库中创建一个计数器，每次插入新记录时，都将计数器的值加1，作为新记录的ID值。

优点是简单、易于实现，依赖于所使用数据库的本身机制。分表操作时，下一张表需要知道上一张表最后的id；当存储敏感信息时，可能被他人利用这一特性。

```prisma
  id                Int           @id @default(autoincrement())
```

### 2. UUID

UUID（通用唯一标识符）是一种由算法生成的字符串，它保证全局唯一性、全球唯一性、时间戳连续性、随机性。

优点是简单、易于生成、可读性好、无序性。但UUID的长度较长，占用空间也比较大。

```prisma
  id                String        @id @default(uuid())
```

注意，prisma的uuid版本固定为v4，且还不支持其他版本。

常用的uuid版本为v4，但随着大佬们的改进，v7逐渐展现优势。

与随机前缀的 UUIDv4 相比，UUIDv7 的时间有序性使数据库性能大大提高。第 2 象限博客的这篇文章对随机 UUID 和顺序 UUID 进行了基准测试，结果不仅显示了写入性能的提高，还显示了读取性能的提高。

```txt
// 10个uuid v4
275b31eb-0945-4f40-92f3-8354a00acb12
668a54bc-6f9d-4cbe-be6e-58fbaf836841
b0a474eb-d27a-4fb0-af4d-44779d4fc7ee
62a0f416-59b9-4ce6-ba9c-70715a260fb1
200b2f08-67ae-4bdb-89f4-4d7af74321bf
df6fe932-c9c1-4612-bcce-1963e53dd589
fbc48dc4-0b15-4482-bf40-da084a4ab918
48c361d2-bbf5-4643-a415-1c7a145c72be
d13ab0fb-4037-4b3d-ac85-fc30fd31ad33
36349ca7-7672-48e3-b482-82751afe4db5

// 10个uuid v7
019034cd-2fb4-7080-a9b4-2ca24d3c5e84
019034cd-2fb4-7080-a9b4-2ca3c4c681a6
019034cd-2fb4-7080-a9b4-2ca4a19af464
019034cd-2fb4-7080-a9b4-2ca55e5db91a
019034cd-2fb4-7080-a9b4-2ca622adb595
019034cd-2fb4-7080-a9b4-2ca7aae879ae
019034cd-2fb4-7080-a9b4-2ca89bfe79ad
019034cd-2fb4-7080-a9b4-2ca9c6c29183
019034cd-2fb4-7080-a9b4-2caa7953bee1
019034cd-2fb4-7080-a9b4-2cab494ef6a9
```

UUIDv7 继续与标准 UUID 格式保持一致，因此从实际使用的角度来看，它们可以被视为任何其他 UUID。这种兼容性使我们可以使用现有的 Postgres UUID 列，并轻松地将列从存储 UUIDv4 值过渡到 UUIDv7。

### 3. 雪花(Snowflake)算法

Snowflake 是由 Twitter 开发的一种分布式 ID 生成算法，可以保证 ID 的唯一性和足够的可排序性。Snowflake 的 ID 格式为 64 位整数，其中第 1 位为符号位，接下来的 41 位为时间戳，10 位为节点 ID，12 位为序列号。

Snowflake算法的特性如下：

- 唯一性（Uniqueness）：Snowflake算法生成的ID在整个分布式系统中保持唯一性。这是通过将不同的组件（时间戳、机器标识符、序列号）结合在一起生成ID来实现的。
- 趋势递增（Increasing trend）：Snowflake生成的ID通常是趋势递增的，即后生成的ID比先生成的ID大。这种特性有助于提高数据库索引效率，减少磁盘碎片等问题。
- 可排序性（Sortable）：Snowflake生成的ID可以根据时间戳部分进行排序，因为时间戳部分占据了ID的高位。这使得Snowflake生成的ID在存储和检索时更加高效。
- 精度（Precision）：Snowflake算法使用了41位的时间戳，10位的机器标识符和12位的序列号，总共64位。这提供了高达69年的时间精度（2^41 毫秒，约为69年），可以在大多数应用场景下满足需求。
- 分布式生成（Distributed generation）：Snowflake算法的设计目标之一是支持分布式生成，即不同的机器可以独立生成ID，而不会发生冲突。这通过在ID中包含机器标识符来实现。
- 简单性（Simplicity）：Snowflake算法相对简单，易于实现和部署。它基于时间戳、机器标识符和序列号的组合，使用位运算进行ID的生成，逻辑清晰。
- 灵活性（Flexibility）：Snowflake算法允许根据需求调整时间戳的位数、机器标识符的位数和序列号的位数，以适应不同规模和需求的系统。
- 可逆性（Reversibility）：Snowflake生成的ID本身不具有可逆性。但是，可以根据ID的结构将其分解为时间戳、机器标识符和序列号等部分，从而了解ID的生成信息。

```ts
import { env } from 'process';

export class SnowFlake {
  // 系统上线的时间戳，此处为 2023-06-22 00:00:00 的时间戳
  epoch = BigInt(1687392000000);

  // 数据中心的位数
  dataCenterIdBits = 5;
  // 机器id的位数
  workerIdBits = 5;
  // 自增序列号的位数
  sequenceBits = 12;

  // 最大的数据中心id 这段位运算可以理解为2^5-1 = 31
  maxDataCenterId = (BigInt(1) << BigInt(this.workerIdBits)) - BigInt(1);
  // 最大的机器id 这段位运算可以理解为2^5-1 = 31
  maxWorkerId = (BigInt(1) << BigInt(this.workerIdBits)) - BigInt(1);

  // 时间戳偏移位数
  timestampShift = BigInt(
    this.dataCenterIdBits + this.workerIdBits + this.sequenceBits,
  );

  // 数据中心偏移位数
  dataCenterIdShift = BigInt(this.workerIdBits + this.sequenceBits);
  // 机器id偏移位数
  workerIdShift = BigInt(this.sequenceBits);
  // 自增序列号的掩码
  sequenceMask = (BigInt(1) << BigInt(this.sequenceBits)) - BigInt(1);
  // 记录上次生成id的时间戳
  lastTimestamp = BigInt(-1);
  // 数据中心id
  dataCenterId = BigInt(0);
  // 机器id
  workerId = BigInt(0);
  // 自增序列号
  sequence = BigInt(0);
  constructor(dataCenterId: number, workerId: number) {
    // 校验数据中心 ID 和工作节点 ID 的范围
    if (dataCenterId > this.maxDataCenterId || dataCenterId < 0) {
      throw new Error(
        `Data center ID must be between 0 and ${this.maxDataCenterId}`,
      );
    }

    if (workerId > this.maxWorkerId || workerId < 0) {
      throw new Error(`Worker ID must be between 0 and ${this.maxWorkerId}`);
    }

    this.dataCenterId = BigInt(dataCenterId);
    this.workerId = BigInt(workerId);
  }

  nextId() {
    let timestamp = BigInt(Date.now());
    // 如果上一次生成id的时间戳比下一次生成的还大，说明服务器时间有问题，出现了回退，这时候再生成id，可能会生成重复的id，所以直接抛出异常。
    if (timestamp < this.lastTimestamp) {
      // 时钟回拨，抛出异常并拒绝生成 ID
      throw new Error('Clock moved backwards. Refusing to generate ID.');
    }

    // 如果当前时间戳和上一次的时间戳相等，序列号加一
    if (timestamp === this.lastTimestamp) {
      // 同一毫秒内生成多个 ID，递增序列号，防止冲突
      this.sequence = (this.sequence + BigInt(1)) & this.sequenceMask;
      if (this.sequence === BigInt(0)) {
        // 序列号溢出，等待下一毫秒
        timestamp = this.waitNextMillis(this.lastTimestamp);
      }
    } else {
      // 不同毫秒，重置序列号
      this.sequence = BigInt(0);
    }

    this.lastTimestamp = timestamp;

    // 组合各部分生成最终的 ID，可以理解为把64位二进制转换位十进制数字
    const id =
      ((timestamp - this.epoch) << this.timestampShift) |
      (this.dataCenterId << this.dataCenterIdShift) |
      (this.workerId << this.workerIdShift) |
      this.sequence;

    return id.toString();
  }

  waitNextMillis(lastTimestamp) {
    let timestamp = BigInt(Date.now());
    while (timestamp <= lastTimestamp) {
      // 主动等待，直到当前时间超过上次记录的时间戳
      timestamp = BigInt(Date.now());
    }
    return timestamp;
  }
}

// 如果有pm_id，把pm_id当机器id传进去
export const snowFlake = new SnowFlake(0, +env.pm_id || 0);
```

综合来看，Snowflake算法是一种在分布式系统中生成唯一ID的高效且可靠的算法，具有较好的唯一性、可排序性和趋势递增性，适用于各种规模的分布式系统。

## 4. nanoid

Nano ID 是一种轻量级、高性能的 ID 生成器，采用了类似 Twitter 的 Snowflake 算法。Nano ID 的长度为 21 个字符，其中 15 个字符用于表示时间戳，6 个字符用于生成随机数，可以保证 ID 的唯一性和足够的随机性。

适用于高并发环境下的 ID 生成，例如 URL 缩短服务等。但是，Nano ID 不适用于需要支持排序或时间相关操作的场景。

给`prisma`提了issue，希望像uuid和自增id那样集成，但根据官方近几个月的release记录来看，目前开发重心是在和`drizzle-orm`抢市场，至今并未考虑支持。

```ts
import { nanoid } from 'nanoid';

export function getNanoid() {
  return nanoid();
}
```

## 5. Redis生成id

Redis是一个高性能的内存数据库，可以用来存储键值对数据，其中值可以是字符串、列表、集合、散列等。Redis的incr命令可以用来生成自增ID，但由于Redis的单线程特性，性能上可能不如其他方案。

## 总结

本文只列举了常见的ID生成方式，实际上还有很多种方式，此处不再列举。在实际的项目中，需要根据实际情况选择合适的ID生成方式，并根据业务规则和性能需求进行优化。

就个人项目经历，目前uuid已经可以满足大部分需求，其本身由于开源早，所以生态更加丰富，比如`class-validator`的`IsUUID`和`nestjs`的`ParseUUIDPipe`。当然，如果哪天prisma集成nanoid或snowflake，那我可能就会在新项目中考虑替换了。
