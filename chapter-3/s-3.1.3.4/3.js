function MyObject() {
  // ... }
// 在原型中声明属性
MyObject.prototype.value = 100;

// 创建实例
var obj1 = new MyObject();
var obj2 = new MyObject();

// 示例1: 下面的代码并不会使obj1.value被删除
delete obj1.value;
console.log(obj1.value); // 100

// 示例2:
// 下面的代码可以删除obj1.value. 但是，
// 由于是对原型进行操作，所以也会使obj2.value被删除
delete obj1.constructor.prototype.value;
console.log(obj1.value);
console.log(obj2.value);

console.log('value' in obj1); // false
console.log('value' in obj2); // false
