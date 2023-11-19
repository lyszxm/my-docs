---
title: new的四部
index: false
icon: discover
category:
  - 使用指南
---

## [new的四部](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

`使用new来构建函数，会执行如下四部操作：`

>1. 创建一个空的简单JavaScript对象（即`{}`）；
>2. 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象 ；
>3. 将步骤1新创建的对象作为`this`的上下文 ；
>4. 如果该函数没有返回对象，则返回`this`。

@[code js](./allCode_ns/new的四部.js)


[《2w字大章 38道面试题》彻底理清JS中this指向问题](https://mp.weixin.qq.com/s/B-yVmcNjkPGOAVBDN9cQ7Q)