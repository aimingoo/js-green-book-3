var x = {};
x.toString = ()=> new Object; // 使toString()无效
x.valueOf = ()=> 2; // 返回一个有效的值数据

console.log('string value:', String(x));  // 2
console.log('number value:', Number(x));  // 2
console.log('boolean value:', Boolean(x)); // true