// 列举原型对象成员并计数
var num = 0;
for (var n in Object.prototype) {
  num++;
}

// 显示计数: 0
console.log(num);
