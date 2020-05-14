// 在原型中声明属性
function MyObject() {
  // ...
}
MyObject.prototype.name = 'MyObject';

// 创建实例
var obj1 = new MyObject();
var obj2 = new MyObject();

// 下面的代码并不会使obj1.name被删除掉
delete obj1.name;
console.log(obj1.name);

// 下面的代码可以删除obj1.name. 但由于是对原型进行操作，所以也会使obj2.name被删除
delete Object.getPrototypeOf(obj1).name
console.log(obj1.name);
console.log(obj2.name);