var x = 100;

function foo(cond) {
  console.log(x);  // undefined, 在当前函数作用域中的、未被绑定值的标识符x
  if (cond) { // 条件化声明, 在其分支中可支持var和具名函数
    var x = 1000;
  }
  else {
    function x() {}
  }
  console.log(x);
}

// 测试如下
foo(true);
foo(false);