// 示例：箭头函数的eval将检测其外层的函数

function foo() {
  // 箭头函数f2()的外层是foo()
  var x, f2 = ()=>eval('x = new.target');
  f2();
  console.log(x === foo); // true
}
