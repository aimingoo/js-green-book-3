function foo(x) {
  try {
    return x;
  }
  finally {
    x = x*2;
    return x;
  }
}
// 显示值100
console.log(foo(100));