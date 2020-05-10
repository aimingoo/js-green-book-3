class MyFunction extends Function {}
class MyArray extends Array {}
class MyDate extends Date {}
var func = new MyFunction('console.log("HELLO")');
var arr = new MyArray(10);
var d = new MyDate();

// 可调用
func(); // "HELLO"
// 有自动维护的length属性
arr[20] = 0;
console.log(arr.length); // 21
// 能调用相关方法
console.log(d); // 将隐式地调用Date.prototype.toISOString()

