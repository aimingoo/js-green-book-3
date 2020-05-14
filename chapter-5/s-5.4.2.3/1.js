// callback函数, 用于显示函数的信息
var showIt = f=>console.log('-> ' + f.name);

// 遍历调用栈
function enumStack(callback) {
  var f = arguments.callee;
  while (f.caller) {
    callback(f = f.caller);
  }
}

// case 1

function level_n() {
  enumStack(showIt);
}

function level_2() {
  // ...
  level_n();
}

function test() {
  level_2();
}

test();