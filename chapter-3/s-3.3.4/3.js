// 类声明
class MyObject extends Object {}

// 是Object的实例
console.log(MyObject.prototype instanceof Object); // true

// 由ParentClass构造
console.log(Object.getPrototypeOf(MyObject.prototype).constructor === Object); // true

// 类声明
class MyObject2 extends null {}

// 是一个对象（但不是Object的实例）
console.log(typeof MyObject2.prototype); // object

// 原型为null（不是由ParentClass构造的）
console.log(Object.getPrototypeOf(MyObject2.prototype)); // null
