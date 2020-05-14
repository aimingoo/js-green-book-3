// 示例2：语法分析期的覆盖
function MyObject() {
}
var obj1 = new MyObject();

function MyObject() {
}
var obj2 = new MyObject();

// 测试
console.log(obj2 instanceof MyObject);  // true
console.log(obj1 instanceof MyObject);  // true
console.log(obj1 instanceof obj1.constructor); // true