// 示例3：重写 - 执行期重写变量
MyObject = function() {
}
var obj1 = new MyObject();

function MyObject() {
}
var obj2 = new MyObject();

// 测试
console.log(obj2 instanceof MyObject);  // true
console.log(obj1 instanceof MyObject);  // true
console.log(obj1 instanceof obj1.constructor); // true