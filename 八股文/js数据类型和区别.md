## 说一说JS数据类型有哪些,区别是什么？

解题思路

得分点

原始数据类型：Number、String、Boolean、Null、Undefined、

引用数据类型：Object

BigInt、Symbol（es6新增）

标准回答
JS数据类型分为两类：一类是基本数据类型，也叫简单数据类型，包含7种类型，分别是Number 、String、Boolean、BigInt、Symbol、Null、Undefined。另一类是引用数据类型也叫复杂数据类型，通常用Object代表，普通对象，数组，正则，日期，Math数学函数都属于Object。

数据分成两大类的本质区别：基本数据类型和引用数据类型它们在内存中的存储方式不同。
基本数据类型是直接存储在栈中的简单数据段，占据空间小，属于被频繁使用的数据。
引用数据类型是存储在堆内存中，占据空间大。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会检索其在栈中的地址，取得地址后从堆中获得实体。

加分回答
Symbol是ES6新出的一种数据类型，这种数据类型的特点就是没有重复的数据，可以作为object的key。
数据的创建方法Symbol()，因为它的构造函数不够完整，所以不能使用new Symbol()创建数据。由于Symbol()创建数据具有唯一性，所以 Symbol() !== Symbol(), 同时使用Symbol数据作为key不能使用for获取到这个key，需要使用Object.getOwnPropertySymbols(obj)获得这个obj对象中key类型是Symbol的key值。

let key = Symbol('key');
let obj = { [key]: 'symbol'};
let keyArray = Object.getOwnPropertySymbols(obj); // 返回一个数组[Symbol('key')]
obj[keyArray[0]] // 'symbol'

BigInt也是ES6新出的一种数据类型，这种数据类型的特点就是数据涵盖的范围大，能够解决超出普通数据类型范围报错的问题。

使用方法：
-整数末尾直接+n：647326483767797n
-调用BigInt()构造函数：BigInt("647326483767797")



注意：BigInt和Number之间不能进行混合操作

<img src="https://uploadfiles.nowcoder.com/images/20220226/4107856_1645863273580/432AB3AC5C04F16FD8F0B1F46F9BBD99" alt="img" style="zoom:50%;" />