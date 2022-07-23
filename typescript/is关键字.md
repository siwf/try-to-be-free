## vue在哪里用了"is"

首先教大家一个**vscode**的小技巧, 搜索中我们可以按"正则"搜索, 比如搜索`\): \w+ is`我们就可以找到所有使用了"is"特性的代码.



![img](../image/16dd32dd3cc345f0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



[更多常用正则看这里: https://juejin.cn/post/6844903886004682765](https://juejin.cn/post/6844903886004682765)

## 实例解释

从搜索到的代码中, 我们拿出最有代表性的一个函数说明.

```kotlin
const isString = (val: any): val is string => typeof val === 'string'
复制代码
```

#### 划重点

可以看见在返回值部分返回的不是类型而是一个表达式"`val is string`", 这段代码的意思是当`isString`返回值为`true`的时候, 参数`val`就是`string`类型.

#### 直接返回boolean不行吗?

**不行!** 看下面的代码, 我们虽然知道在`if`判断后aa一定是`string`,但是ts不知道, ts会提示`aa`可能是`null`类型, 不能执行`substring`方法.



![img](../image/16dd3581007d7545~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)



**所以**需要使用`is`特性. ts可以**根据 if 判断推断**出当前的`aa`为`string`类型:



![img](../image/16dd383d4ef477bc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)