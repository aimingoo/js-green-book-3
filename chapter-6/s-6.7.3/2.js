obj = { msg: 'message: ' };
function foo(a) {
  console.log(this.msg + a);
}

// 绑定时并不触发foo()的调用，因此参数a被暂存
foo2 = foo.bind(obj, 'abc');

// 显示'message: abc'
//  - 参数值123被忽略
foo2(123);