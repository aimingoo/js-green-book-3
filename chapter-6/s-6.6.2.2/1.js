var obj = {eval, x: 100};
var x = 'global';

// 示例：增删x标识符
with (obj) {
  console.log(x); // 100, 是obj.x的值

  eval('console.log(x)'); // 100
  obj.eval('console.log(x)'); // 'global'

  eval('delete obj.x');
  console.log(x); // 'global', 标识符`x`位于全局环境中

  eval('obj.x = 200;');
  console.log(x); // 200, 再次显示obj.x的值

  let y = 'with'; // 添加标识符`y`到对象闭包
  eval("let y = 'eval'; console.log(y);"); // 'eval', 在eval中覆盖`y`
  console.log(y); // 'with', 这表明标识符`y`是动态添加到作用域的（覆盖了外层的）
}