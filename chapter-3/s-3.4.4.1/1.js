// 得到Arguments构造器的标准方法（在NodeJS中，它等同于Object）
var Arguments = (new Function('return arguments.constructor'))();

console.log(Object === Arguments);