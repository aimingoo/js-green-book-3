function MyObject() {}

var obj = new Object;
var obj2 = new MyObject;

// Object.prototype是可扩展的
console.log(Object.isExtensible(Object.prototype)); // true

// 扩展Object.prorotype
Object.prototype.x = 100;
console.log(obj.x);  // 100
console.log(obj2.x);  // 100
