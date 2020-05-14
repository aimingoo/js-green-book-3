var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

// （参见"5.3.1.1 可变参数"节中的示例）
fs.watch = function() {
  var [filename, options, listener] = arguments; // 参见上述示例中的函数界面
  if (listener === undefined) { // 2 parameters or only one
    // ...
  }
}

fs.watch = function(filename) {
  var [filename2, ...args] = arguments; // 参见上述示例中的函数界面
  // ...
}