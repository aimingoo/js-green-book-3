// 注：本例用于说明JavaScript内部机制与asConstructor()有类似效果
function MyObject() {}

// 1. 显示true, 表明原型的构造器总是指向函数自身
console.log(MyObject.prototype.constructor === MyObject);

// 2. 删除该成员
delete MyObject.prototype.constructor;

// 3. 上述删除操作使该成员指向原型中的值
// ( 显示值true )
console.log(MyObject.prototype.constructor === Object);

