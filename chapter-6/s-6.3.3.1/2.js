// 模拟一个与Object(1e-10)结果类似的对象
var x = new Object;
x.toString = ()=> '1e-10';
x.valueOf = ()=> 1e10; // 注意与上面字符串值不同（测试用）

// 调用了toString()来得到字符串，但parseInt()不处理指数/浮点数格式的字符串
console.log(parseInt(x)); // 1

// 调用了toString()来得到字符串
console.log(parseFloat(x)); // 1e-10

// 调用了x.valueOf()来隐式转换为值（JavaScript会尽量存储为整数）
console.log(Number(x)); // 10000000000