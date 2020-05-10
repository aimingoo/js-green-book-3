// 构建一个特殊的变量x
var x = new Object;
x[Symbol.iterator] = function*() { yield* [1,2,3] };

// 将x作为数组展开
console.log("values:", ...x);
