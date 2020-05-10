// 添加分支或使用break子句都将导致下面的“精心排布”失效
var x = 100;
switch (x) {
  case 100:
    let y = 100;  // 这是一个在switch语句自有的块中共享的变量声明
    // ...
  default:
    console.log(y);
}

