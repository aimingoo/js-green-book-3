var y = 100;

// 将一个对象字面量打开用作对象闭包，并在它的作用域中执行代码
// （在对象闭包中，valueOf()方法“通常”返回对象自身）
with ({x: 200}) {
  valueOf().y = 300;
  console.log(x, y); // 200, 300
  delete y; // 删除动态添加的y
  console.log(x, y); // 200, 100
}