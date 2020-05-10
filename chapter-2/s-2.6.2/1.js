"use strict";

// 正确的方法：用var声明
var aName = 123;
function foo() {
  // 在foo函数的执行环境中存在标识符aName 
  aName = "newName";
}

foo();
console.log(aName); // newName
