var x = { value: 100 };
var value = 1000;

// 显示值: 1000
with ({this: x}) {
  console.log(this.value);  // <-- 这里的this仍然指向global
}

