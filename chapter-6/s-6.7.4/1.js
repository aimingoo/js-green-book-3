function func_1(v1) {
  v1 = 100;
}

function func_2(name) {
  func_1.apply(this, arguments);
  console.log(name);
}

// 显示传入参数未被修改, 值仍为'MyName'
func_2('MyName');