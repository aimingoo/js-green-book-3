class MyPromise extends Promise {}

p = Promise.resolve('native promise');
x = MyPromise.resolve(p);

x2 = new MyPromise((...args) => p.then(...args));

// OR
x3 = new MyPromise(function(resolve, reject){
  p.then(resolve, reject);
});