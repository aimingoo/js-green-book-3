// 这是一个字面量
var x = 021;
console.log(x);  // 17

// 这是一个字符串
var x = '021'
console.log(+x); // 21

// 显示21
console.log('0022' - 1);
// 显示2.2
console.log('00.22' * 10);
// 显示22
console.log('.22' * '100.');

// 显示990000
console.log(+'9.9E5');

// 显示9.9999e+28
console.log(+'99999000000000000000000000000');
