// 禁例3：访问callee或caller
function foo() {
  "use strict";
  console.log('callee' in arguments); //显示true
  console.log('caller' in foo); // 显示true

  // 显示"get, set, enumerable, configurable"
  console.log(Object.keys(
    Object.getOwnPropertyDescriptor(arguments, 'callee')));
}
foo();

