// 对于一般函数的类来说，其原型的构造器指向自身
var f = new Function;
console.log(f.prototype.constructor === f); // true