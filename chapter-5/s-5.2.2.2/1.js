/**
 * 示例1: 通过函数递归来模拟循环语句
 */
var loop = 100;
var i = loop;

do {
  // do something...
  i--;
}
while (i > 0);

// 用函数递归模拟上述循环语句
function foo(i) {
  // do something...
  if (--i > 0) foo(i);
}
foo(loop);

// 用函数递归模拟上述循环语句(更多的表达式运算)
void function(i) {
  // do something...
  (--i > 0) && arguments.callee(i);
}(loop);