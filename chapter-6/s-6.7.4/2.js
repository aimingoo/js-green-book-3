// 例如，我们把上面的func_1()改成下面这样:
function func_1() {
  console.log( arguments.callee.caller === func_2 );
}

function func_2(name) {
  func_1.apply(this, arguments);
  console.log(name);
}

// 显示传入参数未被修改, 值仍为'MyName'
func_2('MyName');