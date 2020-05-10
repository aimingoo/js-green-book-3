class MyObject {}

// 在原型中声明属性
MyObject.prototype.aName = 'value';

// 示例 
var obj = new MyObject();
console.log(obj.aName); // value