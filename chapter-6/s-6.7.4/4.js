function func_5() {
  Array.prototype.push.call(arguments.callee.caller.arguments, 100);
}

function func_6(name) {
  func_5();
  console.log(arguments.length);
}

// 显示传入的参数个数已经变成2
func_6('MyName');