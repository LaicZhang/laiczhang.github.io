---
title: nestjs项目中使用keyv替换cache-manager-redis-yet
copyright: true
comment: false
mathjax: false
date: 2025-01-08 14:46:53
updated: 2025-01-08 14:46:53
tags:
  - nest
  - redis
categories: nest
keywords: nestjs,keyv
permalink: replace-cache-manager-redis-yet-with-keyv-in-nestjs-project/
description: nestjs项目中使用keyv替换cache-manager-redis-yet
---
在 cache-manager v6 中，原来的 cache-manager-redis-yet 将被弃用，转为使用 @keyv/redis。虽然仍然提供遗留版本支持，但还是适配新版本以免后面出错。

给doc提pr被拒绝了，由此我推测可能v11的时候会直接更新，所以此处近针对v10版本。

<!--more-->
## 遗留版本支持

```ts
import { createCache, KeyvAdapter } from 'cache-manager';
import { Keyv } from 'keyv';
import { redisStore } from 'cache-manager-redis-yet';

const adapter = new KeyvAdapter( await redisStore() );
const cache = createCache({
  stores: [new Keyv({ store: adapter })],
});
```

如果确定不在乎更新版本特性，可以继续使用 cache-manager-redis-yet。

## 正式开始

### 安装依赖包

```bash
yarn add keyv @keyv/redis cache-manager @nestjs/cache-manager@next
```

### 更新代码

- app.module.ts

```ts
import KeyvRedis, { Keyv } from '@keyv/redis';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './app.environment';
 
const envFilePath = ['.env'];
if (environment) envFilePath.unshift(`.env.${environment}`);

 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (cfg: ConfigService) => {
        const host = cfg.get<string>('REDIS_HOST') || '127.0.0.1';
        const port = cfg.get<number>('REDIS_PORT') || 6379;
        const database = cfg.get<number>('REDIS_DB') || 0;
        const redisOptions = {
          url: `redis://${host}:${port}/${database}`, // use 'rediss' for TLS
        };
 
        return {
          stores: [
            // no namespace
            // new KeyvRedis(redisOptions)
            new Keyv({
              store: new KeyvRedis(redisOptions),
              namespace: 'test',
              useKeyPrefix: false, // 去掉重复的namespace
            }),
          ],
        };
      },
      inject: [ConfigService],
    }),
  ],
 
})
export class AppModule {}
```

- 业务代码示例

```ts
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

Injectable()
export class CommonService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache ) {}
 
  public async getCode() {
    const { text, data } = svgCaptcha.create({
        size: 4,
        noise: 2,
        ignoreChars: '0o1lI',
      })
    await this.cacheManager.set(
      `test_uid`,
      text,
      60 * 1000 * 10,
    );
    return await this.cacheManager.get<string>('test_uid');
  }
}
```

## 参考

- https://github.com/nestjs/cache-manager/pull/508
- https://keyv.org/docs/storage-adapters/redis/