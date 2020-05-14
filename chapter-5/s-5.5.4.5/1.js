var value = 'this is global.';

function myFunc() {
  var value = 'this is local.';
  var foo = new Function('\
    console.log(value);\
  ');

  foo();
}

// 显示'this is global.', 表明foo访问到全局闭包中的value变量
myFunc();