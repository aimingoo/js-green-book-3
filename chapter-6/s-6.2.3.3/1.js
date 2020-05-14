// 显式转换符号值到对象
var x = Object(Symbol());

// 对象类型
console.log(typeof x); // object

// 对象性质
console.log(x instanceof Symbol); // true