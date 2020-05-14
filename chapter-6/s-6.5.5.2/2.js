var obj = obj1 = {}
var obj2 = {};
switch (obj) {
  case obj = obj2: console.log('obj2'); break;
  case obj1: console.log('obj1'); break;  //<--跳转到该分支
}
// 显示true
console.log(obj === obj2);