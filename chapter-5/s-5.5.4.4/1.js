// 示例1：几种主要的标识符名字冲突
function foo(foo) {
  var foo = foo + 1;
  console.log(foo);
}

// 显示值：101
foo(100);