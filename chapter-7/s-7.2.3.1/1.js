// 类声明
class MyPromise extends Promise {}

// 创建对象实例
var executor = function(resolve, reject) {
  // ..
}; 
p = new MyPromise(executor);

// 示例（如下代码的执行过程分解）
//  cls = p.constructor[Symbol.species];

// 1. 查找构造器及其原型
MyPromise = p.constructor;

// 2. 查找MyPromise[Symbol.species]属性
Promise = Object.getPrototypeOf(MyPromise);
getter = Object.getOwnPropertyDescriptor(Promise, Symbol.species).get;

// 3. 调用存取器来获得MyPromise[Symbol.species]属性值
cls = getter.call(MyPromise);  // this引用是指向MyPromise的
