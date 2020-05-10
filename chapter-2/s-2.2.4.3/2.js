// 缺省参数的使用
function foo(x, y=100) {
  console.log([x, y])
}

foo('abc'); // abc,100