// 示例1：eval访问全局中已声明但未赋初值的变量x
function foo() {
  "use strict";
  var x = 100, obj = {eval};
  obj.eval('console.log(++x)'); // NaN
}

foo();
console.log(x);  // NaN

var x = 'global';
console.log(x);  // 'global'