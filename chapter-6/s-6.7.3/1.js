obj = {};

function foo() {
  return this;
}

foo2 = foo.bind(obj);

obj2 = {};
obj2.foo2 = foo2;

// 以下均返回true
console.log(obj === foo2());
console.log(obj === global.foo2());
console.log(obj === obj2.foo2());
