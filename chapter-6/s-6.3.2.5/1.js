// 任何值都可以作为符号的描述
var  x = Symbol(true), y = Symbol(true), z = Symbol(new Object);

// 任何符号都是唯一的（“相同的描述”并不决定它们是相同的符号）
console.log(x === y); // false

// 符号可以作为true值
console.log(Boolean(Symbol())); // true

// (又例)
console.log(!Symbol()); // false

// (又例)
var x = Symbol(), obj = Object(x);

// 它们是相等的（因为obj.valueOf() === x）
console.log(obj == x); // true

// 但不全等（因为obj是对象类型）
console.log(obj === x); // false