// 用日期字符串来创建日期对象
var x = new Date('2012/10/21'); 
console.log(x);

// 用毫秒数来创建日期对象
var x = new Date(1350748800000);
console.log(x);

// 显示NaN，表明无效的日期值
console.log(Date.parse('a'));  // NaN

// 构造一个无效日期对象（这并不会导致异常）
var obj = new Date('a'); 

// 它的日期运算也会得到NaN
console.log(obj.valueOf()); // NaN
console.log(obj.getYear()); // NaN

