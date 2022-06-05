#### 构造函数内部原理

1. 在函数体最前面隐式的加上 this = {}

2. 执行this.xx = xx

3. 隐式的返回this 

   ```javascript
   function People(name, age, sex) {
   	this.name = name;
     this.age = age;
     this.sex = sex;
   }
   function People1(name, age, sex) {
   	this.name = name;
     this.age = age;
     this.sex = sex;
     return {} // {}
   }
   function People1(name, age, sex) {
   	this.name = name;
     this.age = age;
     this.sex = sex;
     return 123 // new 出来 如果返回值是一个普通值 那么结果不影响 {name, age, sex}
   }
   var people = new People('si', 29, 'male')
   var people1 = new People1('si', 29, 'male')
   
   
   ```

   ## 包装类

原始值本来是坚决不能有属性和方法的

```javascript
var num = 4;
num.len = 3
// new Number(4).len = 3
// delete len 属性
// new Number(4).len // 又新建了一个对象 和上面那个不是一个地址 并且上面那个销毁了 undefined
console.log(num.len) // undefined



var a = 'siwenfeng';
// new String(a).length = 2
// 销毁
a.length = 2;
// new String(a)
console.log(a) // siwenfeng
String() 构造函数可以创建一个字符串的实例, 而这个实例具有length长度
由字面量定义的字符串在使用其length属性时其实做了如下的操作
1.创建了一个 String 类型的实例
2.使用实例的属性或方法
3.销毁实例
```



习题

```javascript
var str = 'abc'
str += 1;
var test = typeof(str);// test === 'string'
if (test.length === 6) {
  test.sign = 'typeof的返回结果可能为string'
  // new String(test).sign = 'xx' 
  // 销毁
}
console.log(test.sign)// undefined
// new String(test).sign

```

```javascript
// new 函数的实现
function myNew(fn, ...args) {
  var obj = Object.create(fn.prototype);
  var result = fn.apply(obj, args)
  return Object.prototype.toString.call(result) === '[object object]' ? result : obj;
}
```

