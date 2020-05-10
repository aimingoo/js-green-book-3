// 全局对象（global）可以引用变量作用域（中的成员），但不能引用词法作用域
let x = 100;
y = 200;
console.log(x, y); // 100, 200
console.log(global.x); // undefined 
console.log(global.y); // 200

