var obj = {};
function foo() {
  var x = 100;
  eval('let y=200; obj.x = ()=> x; obj.y = ()=> y;');
}

// 示例，外部的标识符/属性将引用到Eval环境中的数据
foo();
console.log(obj.x()); // 100
console.log(obj.y()); // 200