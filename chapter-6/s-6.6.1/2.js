// 示例1：在箭头函数中eval()对this的引用以及箭头函数的闭包的使用
var thisArg = new Object;
function foo(data) {
  var test = x => eval('console.log(this===thisArg, x)');
  test(data); // 将data作为x参数传入
}

// 绑定thisArg，并传入data 
foo.call(thisArg, 100);  // true, 100

// 示例2：对对象闭包的使用
var obj = { x: 1 };
with (obj) {
  // 对象闭包不能改变当前的this引用，所以这里的this指向global
  eval('console.log(this===global, x)');  // true, 1
}