function foo(x) {
  "use strict";

  eval(`
    var y = 100; 
    console.log(y);  // 100
  `);

  // NOTE: 变量"y"位于eval语句自己的作用域中
  console.log(typeof y); // undefined
}

// 测试
foo();