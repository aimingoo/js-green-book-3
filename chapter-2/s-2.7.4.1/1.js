let condition = false;

// 示例1: 表示标签后的复合语句
myLabel : {
  //...
}
// 示例2: 在其他语句中表示复合语句
if (condition) {   // ...
}
else {
  // ...
}

// 示例3: 复合语句中的表达式语句
console.log(eval(`{1,2,3}`)); // 3
console.log(eval(`1,2,3;`)); // 3

// 左侧是赋值模板
let {a, b} = { a: 100, b: 1000};
console.log(a, b);

// 如下对象声明
console.log(typeof {a, b}); // object

// 如下是语句
console.log(eval(`{a, b};`)); // 1000
