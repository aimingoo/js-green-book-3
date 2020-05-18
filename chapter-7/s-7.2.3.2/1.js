// 示例数据
x = new Object; // anything
x.then = new Function; // thenabled

// 示例（设x是Thenable对象）
p = Promise.resolve(x);

// 则上例将等义于如下代码
p = new Promise((...args) => x.then(...args));

// 示例（设x是Thenable对象）
p.then(() => x);

// 则上例将等义于如下代码
p.then(() => {
  var MyPromiseClass = p.constructor[Symbol.species];
  return new MyPromiseClass((...args) => x.then(...args));
})

// 示例（设f是onFulfilled句柄的响应函数）
p.then = function(f) {
  var MyPromiseClass = this.constructor[Symbol.species];
  var thenableObj = f();
  return new MyPromiseClass(resolve => resolve(thenableObj));
}

// 则上例的.then()方法可以处理如下响应函数f返回的Thenable对象x
p.then(function f() {
  return x;
});

// 如果MyPromiseClass是Promise的子类
p.then = function(f) {
  return MyPromiseClass.resolve().then(f);
}

// （或，）如果不确定MyPromiseClass继承了.resolve()方法
p.then = function(f) {
  return (new MyPromiseClass(resolve => resolve()).then(f));
}
