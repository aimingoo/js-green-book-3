// 测试1：eval工作在全局环境
var x = 100;
eval('x = 1000'); // rewrite 'x'
console.log(x); // 1000

// 测试2：eval工作在if语句的块级作用域
if (true) {  // a new block scope
  let x = 'a';
  eval('x = "b"');
  console.log(x); // "b"
}
console.log(x); // 1000 

// 测试3：eval工作在with打开的对象闭包中（注意没有用大括号创建一个新的块）
var obj = {eval, x: true};
with (obj) eval('x=false');
console.log(obj.x); //false
console.log(x); // 1000