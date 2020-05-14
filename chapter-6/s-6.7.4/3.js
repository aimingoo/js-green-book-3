function func_3() {
  arguments.callee.caller.arguments[0] = 100;
}

function func_4(name) {
  func_3();
  console.log(name, arguments[0]);
}

// 显示传入参数的值被修改为数值100
func_4('MyName');