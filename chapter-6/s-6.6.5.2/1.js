// 构造循环结构
var obj = {};
obj.x = obj;

// 抛出异常
console.log(JSON.stringify(obj)); // TypeError: Converting circular ...