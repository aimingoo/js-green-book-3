var obj1 = { n1: 100 };
var obj2 = Object.create(obj1, {n2: {value: 200, enumerable: true}});

// 显示 'n1', 'n2'
//   - 其中n1继承自obj1
var keys = [];
for (let key in obj2) keys.push(key);
console.log(keys);

// 显示 'n2'
console.log(Object.keys(obj2));

// 定义属性名n3，其enumerable性质默认为false
Object.defineProperty(obj2, 'n3', {value: 300})

// 仍然显示 'n1', 'n2'
//  - 新定义的n3不可见
var keys = [];
for (let key in obj2) keys.push(key);
console.log(keys);

// 显示 'n2'
console.log(Object.keys(obj2));

// 显示 'n2', 'n3'
console.log(Object.getOwnPropertyNames(obj2));
