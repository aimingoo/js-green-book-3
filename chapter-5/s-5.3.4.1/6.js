// 方法6：绑定函数中的递归调用
var obj = {};
const fact = (function(x) {
  return x && x*fact(x-1) || this.power || 1;
}).bind(obj);

obj.power = 100;
console.log(fact(9)); // 36288000
