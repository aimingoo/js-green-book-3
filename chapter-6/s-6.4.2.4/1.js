// 将数组转换为类数组对象（不使用迭代器）
var arr2 = Object.setPrototypeOf([], null);

// OR, 使用迭代器
var withIterator = Function('return arguments')();
var arr2 = Object.setPrototypeOf(['A', 'B'], withIterator);
console.log(...arr2); // A B