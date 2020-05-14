var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

fs.watch = function(filename, ...args) {
  var [options, listener] = args;
  if (typeof options == 'function') {
    [listener, options] = [args[0]];
  }

  // 置默认值
  options = options || defOptions; // default options object
  listener = listener || defListenr; // default handler
  // ...

  // 检查通过剩余参数args传入的参数个数
  if (args.length > 2) {
    console.log(args.length, 'rest parameters:\n', ...args);
  }
}