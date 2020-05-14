function foo(x) {
  try {
    return x;
  }
  finally {
    x.push(100);
  }
}
// 显示返回数组字符串形式'1,2,3,100'
console.log(foo([1,2,3]));