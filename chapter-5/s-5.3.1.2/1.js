var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

fs.watch = function(filename, options=defOptions, listener=defListener) {
  if (typeof options == 'function') {
    [listener, options] = [options, defOptions];
  }

  // ...
}