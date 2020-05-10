"use strict"; // 全局的严格模式

(0, eval)('var a = 1000');

function f2() {
  "use strict"; // 函数的严格模式
  (0, eval)('var b = 2000');
}

// 测试3，返回结果：1000 2000
f2();
console.log(a, b);  

// 测试4，返回结果：true true undefined
console.log('a' in global, delete global.a, typeof a); 
console.log('b' in global, delete global.b, typeof b);

