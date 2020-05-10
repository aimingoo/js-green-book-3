// 将a赋值为1，并将b赋值为2
var [a, b] = [1, 2]
console.log(a, b); // 1 2

// 将x赋值为'xx'，将y赋值为'yy'
var {x, y} = {x: 'xx', y: 'yy'}
console.log(x, y); // 'xx' 'yy'

// 将从数组成员A[0]中取一个对象，将该对象属性'x'的值赋给变量x
//  - 相当于 x = A[0].x
var obj = {x: 'xx'}, A = [obj];
var [{x}] = A
console.log(x); // 'xx'

// 成员深度遍历（运算符左右需要是模式匹配）
//	  - 本例是声明了一个新的变量X，其值是“右侧对象.p1.p2”的值，亦即是相当于X = 100
var {p1:{p2:X}} = {p1:{p2: 100}};
console.log(X); // 100

// 右侧的数值隐式转换为Number对象，解构函数用于取其toString方法到变量X
//   - 相当于X = (new Number(1)).toString
var {toString: X} = 1;
console.log(typeof X, X === Number.prototype.toString); // 'function' true
