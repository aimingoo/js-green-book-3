function func_7() {
  Array.prototype.sort.call(arguments.callee.caller.arguments);
}

function func_8(v1, v2, v3) {
  func_7();
  console.log([v1, v2, v3], arguments);
}

// 显示结果为1,3,5, 参数顺序发生了变化
func_8(1, 5, 3);