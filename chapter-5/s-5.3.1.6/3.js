// 默认参数、剩余参数或模板参数都将导致形式参数与arguments解绑
function foo(filename, ...args) {
  filename = 'new file name'; // changed
  console.log(arguments[0]); // no effect
}
foo('test.txt');