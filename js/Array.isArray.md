

### 使用toString实现Array.isArray

```js
Array.myIsArray = function(obj) {
  return Object.prototype.toString.call(Object(obj)) === '[object Array]';
} 
console.log(Array.myIsArray([])); // true
```

### 使用instanceof实现Array.isArray

```js
Array.myIsArray = function(obj) {
  return obj instanceof Array;
}
console.log(Array.myIsArray([])); // true
```

### 使用constructor实现Array.isArray

```js
Array.myIsArray = function(obj) { 
  return obj.constructor === Array; 
}
console.log(Array.myIsArray([])); // true
```