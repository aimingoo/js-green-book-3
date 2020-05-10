"use strict";

// 差异1：对arguments[n]与形式的修改将不再相互影响
//  - 在严格模式中返回传入的x值'abc'
//  - 在非严格模式中返回100
function f(x) { arguments[0] = 100; return x; }
console.log(f('abc'));
