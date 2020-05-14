// 声明变量会放到[[VarNames]]列表中，因此不能直接删除
var x = 100;

// 泄露的名字将导致全局创建了标识符y, 但未添加到[[VarNames]]
y = '';

// eval中声明的var变量也会放到[[VarNames]]，但它是可以删除的
eval('var z = 200');

// 检查属性描述符
let canRemoveGlobalName = n => {
  return Object.getOwnPropertyDescriptor(global, n).configurable;
};

// 测试1
console.log(canRemoveGlobalName('x')); // false
console.log(canRemoveGlobalName('y')); // true
console.log(canRemoveGlobalName('z')); // true

// 测试2
console.log(delete x); // false
console.log(delete y); // true
console.log(delete z); // true

// 测试3
console.log(x); // 100, 未删除
console.log(typeof y); // 'undefined', 删除成功
console.log(typeof z); // 'undefined', 删除成功