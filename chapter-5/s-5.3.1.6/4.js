function foo(a=1, b, c=2, d) {
  console.log(...arguments);
  console.log(a, b, c, d);
}

// 测试如下
foo(undefined, 100, 200, 300);
