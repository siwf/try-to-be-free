## call

```javascript
  	Function.prototype.myCall = function (content, ...args) {
			const that = content || window;
			that.fn = this;
			const result =  that.fn(...args)
			delete that.fn
			return result;
		}
```



## apply

```javascript
  	Function.prototype.apply = function (content, ...args) {
			const that = content || window;
			that.fn = this;
			const result =  that.fn(...args)
			delete that.fn
			return result;
		}
```



## bind

```javascript
Function.prototype.bind = function (content, ...args) {
			const that = content | window;
			that.fn = this;
			
			return function (...arg) {
				// 手机参数
				let result =  that.fn(...args, ...arg)
				delete that.fn

				return result;

			}
		}
// 当使用new 的时候 this失效

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
```

注意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。

所以我们可以通过修改返回的函数的原型来实现，让我们写一下：

```js
// 第三版
Function.prototype.bind2 = function (context = window, ...bindArgs) {
  let closure = this; // 使用闭包保存 this

  let fBound = function (...args) {
    // 当作为构造函数时，this 指向实例
    // 当作为普通函数时，this 指向 context

    return closure.call(this instanceof fBound ? this : context, ...bindArgs, ...args);
  };
// 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
//  直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype 需要优化
  fBound.prototype = this.prototype;
  return fBound;
}
// 最终版 利用空函数中砖

Function.prototype.myBind = function (context = window, ...bindArgs) {
  let closure = this; // 使用闭包保存 this

  let fBound = function (...args) {
    // 当作为构造函数时，this 指向实例
    // 当作为普通函数时，this 指向 context
    return closure.call(this instanceof fBound ? this : context, ...bindArgs, ...args);
  };

  let fNOP = function () {};
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

```

