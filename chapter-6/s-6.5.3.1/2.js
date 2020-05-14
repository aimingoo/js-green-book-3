// 1. 取一个系统默认的字符串字面量
var str1 = 'abc';

// 2. 重写String()构造器
String = function() {
}
String.prototype.name = 'myString';

// 3. 取重写后的字符串字面量
var str2 = '123';

// 4. 如果name成员有值，则证明重写会影响到字面量
console.log(str1.name); // undefined
console.log(str2.name); // undefined

// 5x. 置新String()构造器的原型
Object.setPrototypeOf(String.prototype, Object.getPrototypeOf(''));