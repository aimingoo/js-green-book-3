var obj = { data: 100 }
console.log(obj.data);  // 100

// 置属性只读，赋值运算失效
Object.defineProperty(obj, 'data', {writable: false});
obj.data = 200;
console.log(obj.data); // 100, overwrite fail

// 使用重新声明，可以覆盖值
Object.defineProperty(obj, 'data', {value: 200});
console.log(obj.data); // 200, success

// 冻结
Object.freeze(obj);

// 不可重新声明（异常）
// Object.defineProperty(obj, 'data', {value: 300});

// 在子类实例中，该属性是只读的，但可以重新声明
var obj2 = Object.create(obj);
obj2.data = 300;
console.log(obj2.data); // 200, overwrite fail

// 在子实例中，可以重声明
Object.defineProperty(obj2, 'data', {value: 300});
console.log(obj2.data); // 300, success

