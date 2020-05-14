// 1. 取一个系统默认的字符串字面量
var str1 = 'abc';
console.log(str1.name); // undefined

// 2. 在String.prototype的原型链中插入一个自定义的原型对象
var MyStringPrototype = {name: 'mystring'};
var NativeStringPrototype = Object.getPrototypeOf(String.prototype);
Object.setPrototypeOf(MyStringPrototype, NativeStringPrototype);
Object.setPrototypeOf(String.prototype, MyStringPrototype);

var str2 = '123';
console.log(str1.name); // 'mystring'
console.log(str2.name); // 'mystring'