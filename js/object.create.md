const A =**`Object.create(B)`** 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）

`A.__proto__ = B`

```js
function Create(_prototype) {
  function F() {}
  F.prototype = _prototype
  return new F()
}
```

