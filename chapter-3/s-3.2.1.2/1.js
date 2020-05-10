var obj1 = new Object;
var obj2 = new Object;

// obj1与obj2都访问Object.prototype.value
Object.prototype.value = 'abc';
console.log(obj1.value);  // 'abc'
console.log(obj2.value);  // 'abc'
console.log(Object.getOwnPropertyNames(obj2)); // 空数组

// obj1的成员不变，仍然访问Object.prototype.value
// obj2的自有属性表中创建了一个名为value的项
obj2.value = '10';
console.log(obj1.value); // 'abc'
console.log(obj2.value); // 10
console.log(Object.getOwnPropertyNames(obj2)); // ['value']
