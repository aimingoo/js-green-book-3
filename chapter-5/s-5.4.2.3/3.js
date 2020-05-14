// callback函数, 用于显示函数的信息
var forceBreak = 100, showIt = f=> {
  console.log('-> ' + f.name);
  if (!(forceBreak--)) {
   throw new Error("Force break!")
  }
};

// 遍历调用栈
function enumStack(callback) {
  var f = arguments.callee;
  while (f.caller) {
    callback(f = f.caller);
  }
}

// case 3

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

// 测试
imax=10, f1();