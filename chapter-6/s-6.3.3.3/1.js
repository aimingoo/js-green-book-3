// 在返回中忽略某个值
function func(x, y) {
  return [1, void x+y, 0];
}

// 在解构赋值中忽略返回数组的指定成员
var [a,,c] = func();
// 显示：1 0
console.log(a, c);
