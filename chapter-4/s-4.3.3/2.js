function foo() {
  // 函数声明的变量提升
  {function f1() {}}; // f1将是foo的一个顶层声明

  // 标签化的函数声明语句
  labelName: function f2() {}; // f2将是foo的一个顶层声明

  // 条件化的函数声明语句
  if (true) function f3() {}; // f3将是foo的一个顶层声明
}
