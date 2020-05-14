// OR, x = Object(false);
var x = new Boolean(false);

// x的值是false
console.log(x.valueOf()); // false

// x在布尔运算中被视为true
console.log(!!x); // false

// 作为字符串显示（将调用toString）
console.log('value is:', x); // value is: false

// 作为数值运算（将调用valueOf）
console.log(+x); // 0