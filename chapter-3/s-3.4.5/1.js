function MyFunction() {
}
MyFunction.prototype = new Function();
// OR
// MyFunction.prototype = Function.prototype;
// MyFunction.prototype = Function;

// 输出true, 表明myFunc是一个函数对象
var myFunc = new MyFunction();
console.log(myFunc instanceof Function);

// 触发异常：" myFunc is not a function" 
myFunc();
