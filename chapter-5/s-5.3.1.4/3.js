var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

var defaultArgs = [defOptions, defListener];

// 语法合法的声明
fs.watch2 = function(filename, [options, ...more]=defaultArgs) {
  // ...
}
