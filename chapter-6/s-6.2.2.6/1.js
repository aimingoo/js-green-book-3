// x值为100
var x = new Number(100);

// 直接使用Number.prototype.valueOf()
console.log(+x); // 100

// 重写（将使用重写后的x.valueOf）
x.valueOf = ()=>101
console.log(+x); // 101

// 声明Symbol.toPrimitive属性
x[Symbol.toPrimitive] = ()=>0
console.log(+x); // 0

// 优先使用了x[Symbol.toPrimitive]
console.log(+x); // 0

// Node.js中的console.log()将调用valueOf()
//  - 测试组件fancy替换了console.log，所以将显示0
console.log(x); // { [Number: 101] ...

// 显式调用toString()，将使用Number.prototype.toString()
console.log(x.toString()); // 100

// 使x返回字符串
x[Symbol.toPrimitive] = ()=> '012';

// “+”运算将传入number作为hint，但上述操作将导致返回值为字符串
// 而“+”运算将在后续操作中将该值转换为数值
console.log(+x); // 12

// 又例如，这里将调用x[Symbol.toPrimitive]('defult')，并返回字符串'012'
// 又由于“+”运算符在检测到任意操作数为字符串时，优先理解为字符串连接，所以结果是字符串
console.log(x + 100); // 012100