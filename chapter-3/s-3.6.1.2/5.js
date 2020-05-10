var obj = [1, 2, 3];

// 方法3：对象属性存取操作
obj[Symbol.isConcatSpreadable] = false;

// 测试：不展开元素
var arr = [0].concat(obj);
console.log(arr.length); // 2
console.log(arr[1]); // [1,2,3]

// 测试：默认情况下会展开元素
var arr = [0].concat([1,2,3]);
console.log(arr.length); // 4
console.log(arr[1]); // 1

// 测试类数组
[0].concat(new Array(400)).concat(401);
[0].concat({length:400, [Symbol.isConcatSpreadable]: true}).concat(401);

