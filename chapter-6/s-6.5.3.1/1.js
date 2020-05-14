// 1. 备份一个系统内部的Object()
var NativeObject = Object;

// 2. 重写
Object = function() {
}

// 3. 声明构造器
function MyObject() {
}
// 4. 构造器的原型对象(Constructor.prototype)总是创建自NativeObject;
console.log(MyObject.prototype instanceof NativeObject); // true
console.log(MyObject.prototype instanceof Object); // false