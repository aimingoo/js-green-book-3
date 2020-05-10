var obj = {};
// 例1：向不存在的属性赋值
obj.n1 = 100;
// 显示 {value: 100, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj, 'n1');

// 例2：向自有的属性赋值
obj.n1 = 200;
// 显示 {value: 200, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj, 'n1');

// 例3：向只读属性赋值
obj2 = Object.create(obj, {n2: {value: 100, writable: false}});
obj2.n2 = 200;
console.log(obj2.n2); // 100, 赋值不成功
// 显示 {value: 100, writable: false, enumerable: false, configurable: false}
Object.getOwnPropertyDescriptor(obj2, 'n2');

// 重置n1的enumerable性质为false，因此在obj中是不可见的
Object.defineProperty(obj, 'n1', {enumerable: false})
console.log(Object.keys(obj)); // 显示为空数组

// n1继承自obj
console.log(obj2.n1); // 200
// 不是obj2自有的属性
console.log(obj2.hasOwnProperty('n1')); // false

// 例4：向继承来的可写属性置值
obj2.n1 = 300;

// 由于为n1赋值导致创建新的属性描述符，因此n1成为自有的属性
console.log(obj2.hasOwnProperty('n1')); // true

// 由于新的数据描述符的enumerable重置为true，因此在obj2中它是可见的
console.log(obj2.propertyIsEnumerable('n1')); // true 
