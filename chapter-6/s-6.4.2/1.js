// 测试数组
var arr = [1,2,'345',,12];

// 在赋值模板（或展开）中作为数组使用
var [x, y] = arr;
console.log(x, y); // 1 2
console.log(['elements', ...arr]); // [ 'elements', 1, ...

// 在赋值模板（或展开）中作为对象使用
var { 0: x, 1: y, length } = arr;
console.log(x, y, length); // 1 2 5
var x = { length: 100, ...arr };
console.log(x.length + ' => ' + Object.keys(x)); // 100 => 0,1,2,4,length