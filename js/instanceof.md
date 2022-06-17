## Instanceof

A instanceof B 

A的原型链上面是否有B的原型

```javascript
function MyInstanceof(A, B) {
  if (A === null) {
    return false;
  }
  let cur = A.__proto__;
  while(cur !== null) {
    if (cur === B.prototype) {
      return true
    }
  	cur = cur.__proto__;
  }
    return false
}
```

