GeneratorFunction = (function*() {}).constructor;

// 参考上例
var f = new GeneratorFunction;  // or AsyncGeneratorFunction
console.log(f.prototype.constructor === f);  // false

// "f.prototype"是继承自原型的
let P = GeneratorFunction.prototype;
console.log(Object.getPrototypeOf(f.prototype) === P.prototype); // true
console.log(Object.getPrototypeOf(f) === P); // true
