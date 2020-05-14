// callback函数, 用于显示函数的信息
var showIt = f=>console.log('-> ' + f.name);

// 遍历调用栈
function enumStack(callback) {
  var f = arguments.callee;
  while (f.caller) {
    callback(f = f.caller);
  }
}

// case 2

// 当imax置值大于１时，将导致enumStack()进入死循环
var i = 0, imax = 0;

function f1() {
  f2();
}

function f2() {
  if (++i < imax) {
    f1();
  }
  enumStack(showIt);
}

// 测试如下
imax=1, f1();