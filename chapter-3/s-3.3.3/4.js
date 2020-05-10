// （本例是如下代码的模拟效果）
//  class MyObjectEx extends MyObject {}
function MyObject() {}

// 1. 声明一个构造器/构造方法
function MyObjectEx() {}

// 2. 置原型的原型
// （注：MyObjectEx.prototype.constructor是自有属性，不需要再重写）
Object.setPrototypeOf(MyObjectEx.prototype, MyObject.prototype);

// 3. 置类的原型
Object.setPrototypeOf(MyObjectEx, MyObject);

// 测试：在类与子类构造器之间维护的原型链
console.log(Object.getPrototypeOf(MyObjectEx) === MyObject);  // true
console.log(MyObject.isPrototypeOf(MyObjectEx)); // true

