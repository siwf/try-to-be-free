## Instanceof

A instanceof B 

A的原型链上面是否有B的原型

```javascript
function MyInstanceof(a, b) {
  let current = a.__proto__;
  let prototype = b.prototype;

  while (true) {
    if (current === prototype) return true;
    if (current === null) return false;
    current = current.__proto__;
  }
}
```

