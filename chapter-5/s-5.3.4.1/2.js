// 方法2：匿名函数
//  - 匿名函数可以用作表达式（或操作数），但不能用于声明
void function() {
  return arguments.callee();
}