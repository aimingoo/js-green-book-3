var defOptions = { /*...*/ };
var defListener/* = ...*/;
var fs = require('fs');

var defaultArgs = [defOptions, defListenr];

// "=defaultArgs"会导致语法错
fs.watch = function(filename, ...[options, ...more]=defaultArgs) {
  // ...
}