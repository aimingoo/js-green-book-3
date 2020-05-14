function* myGenerator(x=0,y=0,z=0) {
  console.log(" -> ", ...arguments);
  x = x * 2 + y * z;
  yield x;    // <- yield 1st

  // ...
  yield z - x; // <- yield 2nd

  // ...
  return "Ok";
}

// a generator object
var tor = myGenerator(1,2,3);

// === PART 1 ===

// 生成器函数是函数
console.log(typeof myGenerator); // 'function'

// 调用结果是返回一个生成器对象（但并不是使用new运算构造的）
console.log(tor instanceof myGenerator); // true

// 使用myGenerator.prototype作为原型
console.log(Object.getPrototypeOf(tor) === myGenerator.prototype); // true

// 生成器对象拥有迭代器界面
console.log('next' in tor); // true

// 列举生成对象的属性/方法
//	- [ 'constructor', 'next', 'return', 'throw' ]
console.log(Object.getOwnPropertyNames(tor.constructor.prototype));

// === PART 2 ===

// 开始执行生成器函数（myGenerator）内的代码
var generated = tor.next(); // -> 1 2 3

// <- 8, done: false
console.log(" <- ", generated.value, ", done:", generated.done);

// <- -5, done: false
generated = tor.next(); // 2nd
console.log(" <- ", generated.value, ", done:", generated.done);

// <- 'Ok', done: true
generated = tor.next(); // will exit myGenerator()
console.log(" <- ", generated.value, ", done:", generated.done);

// === PART 3 ===

// 生成器对象实现了可迭代界面
console.log(Symbol.iterator in tor); // true

console.log(new Set(myGenerator(1,2,3)));  // Set { 8, -5 }

// tor实现了可迭代界面，因此也是可迭代对象
console.log(tor = myGenerator(1,2,3)); // Object [Generator] {}

// tor完成了一次迭代（用于展开成数组元素）
console.log(arr = [...tor]); // [ 8, -5 ]

// tor已经迭代结束了，不能再次展开
console.log(...tor);  // nothing

// arr可以展开
console.log(...arr); // 8 -5

// 多次展开
console.log(...arr); // 8 -5

// 或其他使用迭代的行为
console.log(new Set(arr)); // Set { 8, -5 }