function foo(message) {
  let x = 100;
  let t = `${message}: ${x}`; // <- 模板执行发生在这里，变量x已传入
  return t;
}

// 全局环境的x不会影响到上述模板
var x = 200;
console.log(foo("Hi")); // Hi, 100