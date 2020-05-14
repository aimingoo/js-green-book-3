// 示例3

// 使用变量声明（匿名函数作为赋值表达式的右操作数）
var func2 = function() {
  console.log(typeof func2);
}

// 测试1
//  - 在函数内能访问到func2这个变量名（但不是函数名，因为该函数是匿名的）
func2();

// 测试2
//  - 重写变量会影响上述函数内访问func2这个标识符
x = func2; // 建立引用
func2 = 'a string';
x(); // 显示'string'，而不是'function'

