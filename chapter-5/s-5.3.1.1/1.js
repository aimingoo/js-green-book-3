var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

fs.watch = function(filename, options, listener) {
  // 检查参数顺序
  if (listener === undefined) { // 2 parameters or only one
    if (options !== undefined) { // 2 parameters
      if (typeof options === 'function') {
         [listener, options] = [options];
      }
    }
  }

  // 置默认值
  options = options || defOptions; // default options object
  listener = listener || defListenr; // default handler
  // ...
}
