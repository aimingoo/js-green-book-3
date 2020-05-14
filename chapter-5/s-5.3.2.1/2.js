// 示例2

// 使用具名函数作为赋值表达式的右操作数
var f = function func2() {
  console.log(typeof func2);
}

// 测试1
//  - func2在函数内是有效的
f();

// 测试2
//  - 在赋值表达式之外的上下文中是无效的
console.log(typeof func2);