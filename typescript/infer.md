简单示例如下：

```r
type ParamType<T> = T extends (param: infer P) => any ? P : T;
复制代码
```

在这个条件语句 `T extends (param: infer P) => any ? P : T` 中，`infer P` 表示待推断的函数参数。

整句表示为：如果 `T` 能赋值给 `(param: infer P) => any`，则结果是 `(param: infer P) => any` 类型中的参数 `P`，否则返回为 `T`。

```typescript
interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void

type Param = ParamType<Func>;   // Param = User
type AA = ParamType<string>;    // string
```



```typescript
// 返回值类型
type ParamType<T> = T extends (param: string) => infer P ? P : T;

interface User {
  name: string;
  age: number;
}

type reurnType = (s:string) => string;

type customType = ParamType<reurnType> // string
```

```typescript
type UserType<T> = T extends Set<infer P> ? P : T;

type GetUser= UserType<Set<string>>;
```

