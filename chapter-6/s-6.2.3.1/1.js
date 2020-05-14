// 假定我们并不关心x是何种类型的对象
var x = Object(100); // x是对象

// 试图将x强制为字符串来参与运算
console.log('a string data:', String(x));

// 或强制为数值
console.log('number calc:', 1 + Number(x));

// 或强制为布尔值
console.log('boolean value:', Boolean(x));

// 甚至根本不考虑x是不是对象类型的情况下，强制将它理解为对象
console.log('is object:', typeof Object(x));