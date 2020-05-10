a = (1, 2, 3)
console.log(a); // 3

a = 1, 2, 3
console.log(a); // 1

// (示例1)
// 语句的返回值是3
console.log(eval('a = (1, 2, 3)')); // 3

// a赋值为3
console.log(a); // 3

// (示例2)
// 语句的返回值是3
console.log(eval('a = 1, 2, 3')); // 3

// a赋值为1
console.log(a); // 1

// 显示最后表达式的值"value: 240"
var i = 100, print = x => console.log(x);
print( (i+=20, i*=2, 'value: '+i) ); // 240

// "," 在这里不用作函数参数表的语法分隔符
console.log( (i+=20, i*=2, 'value: '+i) ); // 520
