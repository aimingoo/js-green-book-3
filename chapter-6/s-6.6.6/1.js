var i = 100;
function myFunc(ctx) {
  console.log('value is: ' + i);
  eval(ctx);
  console.log('value is: ' + i);
}

// 通过传入动态执行的脚本代码来影响上下文
myFunc('var i = 10;');