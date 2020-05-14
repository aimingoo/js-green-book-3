var obj = { value: 200 };
var value = 1000;
with (obj) { // <-- 对象闭包
  function foo() {  // <-- 具名函数foo()的闭包
     value *= 2; 
  }
  foo();
}

// 显示400
console.log(obj.value);
// 显示1000
console.log(value);