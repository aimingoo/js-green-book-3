// 变量提升：在var关键字之前可以使用
console.log('hoisting x:', x);  // hoisting x: undefined
var x = 100;
console.log('value x:', x); // value x: 100

// 变量动态声明：eval()中使用var声明的变量位于当前函数/全局的变量作用域中
eval('var y = 100');
console.log('dynamic define y:', y); // dynamic define y: 100

// 变量隐式声明：向“未声明的变量赋值”的效果类似声明了一个全局变量
z = 100;
console.log('global z:', z); // global z: 100