---
title: Koa2中MongoDB驱动及增删查改
copyright: true
comment: true
mathjax: false
date: 2022-02-06 16:52:59
updated: 2022-03-31 16:52:59
tags:
  - koa2
  - MongoDB
  - 增删查改
categories: 毕设
keywords: koa2,MongoDB,驱动,增删查改,数据库
permalink: mongodb-driver-and-crud-in-koa2/
description:
---
毕设用的koa2，使用mongoose操作mongodb，完成增删查改。

<!--more-->
## 连接数据库

通过MongoClient.connect连接数据库，在回调中会返回db对象以供之后使用。

```javascript
const mongoose = require('mongoose')
const config = require('./index')
const log4js = require('./../utils/log4j')

mongoose.connect(config.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error',()=>{
    log4js.error('***Failed to connect mongodb***')
})

db.on('open',()=>{
    log4js.info('***Succeeded to connect mongodb***')
})
```

此处的log4js是在utils/log4j.js中定义的，可以在utils/log4j.js中自行封装。

## 创建user模型

mongoDB shell中创建的命令为：

```shell
use demo  
db.createCollection('user')
```

```javascript
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    "userId" : Number,//用户ID，自增长
    "userName" : String,//用户名称
    "userPwd" : String,//用户密码，md5加密
    "state": Number,//用户状态，0：正常，1：已注销
});

module.exports = mongoose.model("users", schema);
```

后续操作均在此模型中进行。

## 添加用户

使用save()方法，需要先实例化为文档，再使用save()方法保存文档。而create()方法，则直接在模型Model上操作，并且可以同时新增多个文档。

```javascript
// save()
const newUser = new User({
    username: 'cedric',
    password: '123',
    age: 27
  })

let doc = await newUser.save()

// create()
let doc = await User.create({
      username: 'cedric222',
      password: '123',
      age: 27
    }, {
      username: 'cedric333',
      password: '123',
      age: 27
    })
// 3.2 版本之后新增了 db.collection.insertOne() 和 db.collection.insertMany()。
// 如版本支持，推荐新增方法。
// insertOne
let doc = await User.insertOne({
      username: 'cedric444',
      password: '123',
      age: 27
    })
// insertMany
let doc = await User.insertMany([
      {
        username: 'cedric555',
        password: '123',
        age: 27
      },
      {
        username: 'cedric666',
        password: '123',
        age: 27
      }
    ])
```

## 更新用户

```javascript
let doc = await user.updateOne({age: 27}, {age: 28}, {multi: true})

// 删除账号操作（设置state为1），数据仍然存在数据库。
const result = await user.updateMany(
      { userId: { $in: userIds }, state: 0 },
      { state: 1 }
    );
```

## 删除用户

```javascript
let doc = await User.remove({username: 'cedric444'})
  ```

## 查询用户

调用collection的find方法查找用户,find方法的参数为查找条件。

```javascript
// 根据指定条件查找所有用户
// find指的是查找指定表的所有数据，返回的是数组
// findOne指的是查找指定表的单条数据，返回一个对象

let doc = await User.findOne({
      username: 'cedric222'
    })

let doc = await User.find({})
  ```
