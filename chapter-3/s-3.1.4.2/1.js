// 示例1: 存取对象成员
var obj = new Object();
obj.value = 100;

// 示例2: 访问(全局的)对象或值
value = 1000;

with (obj) {
  value *= 2;
}

// 显示200
console.log(obj.value)
// 显示1000
console.log(value);
