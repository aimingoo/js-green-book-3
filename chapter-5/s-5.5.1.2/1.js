function foo() {
  return function myFunc() {
    // ...
  };
}

var f1 = foo();
var f2 = foo();

// 显示false, 表明这是两个不同的函数实例
console.log(f1 === f2);