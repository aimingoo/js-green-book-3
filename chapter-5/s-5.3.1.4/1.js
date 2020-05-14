var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

fs.watch = function(filename, ...args) {
  return fs.watch(filename, args);
}

// （注意watch2修改了函数界面）
fs.watch2 = function(filename, [options=defOptions, ...more]) {
  // ...
  var [listener, options] = (typeof options == 'function') ? [options]
    : [more[0], options];

  // 置默认值
  options = options || defOptions; // default options object
  listener = listener || defListenr; // default handler
  // ...

  // 检查通过剩余参数args传入的参数个数
  if (more.length > 1) {
    console.log(more.length, 'rest parameters:\n', ...more);
  }
}