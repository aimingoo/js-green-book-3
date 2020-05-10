// mock test data
let promise1 = Promise.resolve(); // undefined
let f1 = new Function;
let f2 = new Function;

// 示例
promise1         // promise1
  .then(f1)      // promise2
  .catch(f2);    // promise3

// 这个语法（如上例）被实际实现时，JavaScript将会按如下的方式处理
promise2 = promise1.then(f1);
promise3 = promise2.catch(f2);
