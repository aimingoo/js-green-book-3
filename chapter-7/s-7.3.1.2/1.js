// 这是一个语法正确的一般函数
function foo([x]) {
  console.log(x);
}

// 在调用foo()时传入无效值，创建函数的实例（而不是执行Body）时就会抛出异常
try {
  foo();
}
catch(e) {
  console.log(e.message);  // TypeError: Cannot read property ...
}
