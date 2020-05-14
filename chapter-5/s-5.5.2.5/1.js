function foo(x) {
  eval('var y = 100');
  console.log(y); // 100
}

// 测试
foo();