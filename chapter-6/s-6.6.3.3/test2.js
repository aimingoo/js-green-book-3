// test.js

var x = 100;

// 示例1
eval(`
  "use strict";
  var x = x * 2;  // undefined * 2
  console.log("strict mode:", x);
`);


// 示例2
eval(`
  var x = x * 2;  // 100 * 2
  console.log("normal mode:", x);
`);