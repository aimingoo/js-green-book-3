// 例1：全局变量
var x = 100;

// 例2：全局属性
y = 200;

// 例3：动态声明的全局变量
//（参见上一小节）
eval('var z = 300');

// 测试1：x,y都将作为全局属性来实现 
console.log(global.hasOwnProperty('y')); // true
console.log(global.hasOwnProperty('x')); // true

// 测试2：不能删除x，而可以删除y
console.log(delete y, typeof y); // true, undefined
console.log(delete x, x); // false, 100

// 测试3：全局变量（表现为不可删除的全局属性）
var desc = Object.getOwnPropertyDescriptor(global, "x");
console.log(desc.configurable); // false
console.log(delete global.x, delete x); // false, false

// 测试4：动态声明的全局变量（表现为可删除的全局属性）
var desc = Object.getOwnPropertyDescriptor(global, "z");
console.log(desc.configurable); // true
console.log(delete global.z, delete z); // true, true