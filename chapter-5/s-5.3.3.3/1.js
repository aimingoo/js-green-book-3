// 示例：函数是对象
function foo() {}
console.log(foo instanceof Object); // true

// 所有函数都是Function()的实例
console.log(foo instanceof Function); // true

// Function()自身作为函数，也是它自己的实例
console.log(Function instanceof Function); // true

// Function()自身作为对象，也是Object()的实例
console.log(Function instanceof Object); // true

class MyFunction extends Function {
  // ...
}

console.log(typeof new MyFunction); // 'function'
console.log(new MyFunction instanceof Function); // true
console.log(new MyFunction instanceof Object); // true
