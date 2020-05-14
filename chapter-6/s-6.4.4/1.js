// 示例：在Map/Set中NaN是“更严格比较的”，所以多个NaN是相同的值
console.log(new Map([[NaN, 0], [NaN, 1]])); // Map { NaN => 1 }

console.log(new Set([NaN, NaN])); // Set { NaN }

// 用集（Set）对象来迭代字符串中的字符
console.log(new Set('abcadf134oaafshjafgoi')); // Set { 'a', ...

// 或用于计数
console.log(new Set('abcadf134oaafshjafgoi').size); // 14

// 集合对象（例如Set）是有迭代器接口的
var x = new Set('123456asdf');

// 将集合对象（x）作为源对象时，（如果需要，）会先在内部转换为类数组以得到数组索引
var arr = Int32Array.from(x);

// 测试结果
console.log(arr); // [ 1, ...
