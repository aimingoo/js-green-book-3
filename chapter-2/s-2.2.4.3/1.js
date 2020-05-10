// 在if语句的条件表达式中使用具名函数foo
//   - 在早期的JScript中，会显示有效的类型名'function'
if (function foo(){});

console.log(typeof foo); // undefined