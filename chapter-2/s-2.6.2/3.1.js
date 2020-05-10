"use strict";

// 禁例3：访问callee或caller
function foo() {
  console.log(typeof arguments.callee);
  console.log(typeof arguments.callee.caller);
  console.log(typeof foo.caller);
}
foo();
