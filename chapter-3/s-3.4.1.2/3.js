// 直接置f2的原型链
var f1 = new Function, f2 = new Function;
Object.setPrototypeOf(f2, f1);

// 检测不到f1与f2之间的原型链关系
console.log(f2 instanceof f1);  // false

// 使用isPrototypeOf检测
console.log(f1.isPrototypeOf(f2)); // true

