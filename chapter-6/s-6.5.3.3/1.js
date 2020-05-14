// 示例1：重写 - 执行期重写声明过的标识符
function MyObject() {
}
var obj1 = new MyObject();

MyObject = function() {
}
var obj2 = new MyObject();

// 测试
console.log(obj2 instanceof MyObject);  // true
console.log(obj1 instanceof MyObject);  // false
console.log(obj1 instanceof obj1.constructor); // true