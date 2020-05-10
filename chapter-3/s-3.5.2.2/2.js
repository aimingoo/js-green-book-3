// 默认性质{writable:false, enumerable:false, configurable:false}
var obj = Object.defineProperty(new Object, 'n1', {value: 100});
obj.n1 = 200;
console.log(obj.propertyIsEnumerable('n1')); // false，表明是不可列举的
console.log(obj.n1); // 100, 表明是只读的

// 重新定义obj2.n1
var obj2 = Object.create(obj);
Object.defineProperty(obj2, 'n1', {
  value:obj2.n1, writable:true, enumerable:true, configurable:true});

// 可以通过重定义属性，使该属性从“只读”变成“可读写”（以及其他性质的变化）
obj2.n1 = 'newValue';
console.log(obj2.n1);  // 'newValue'
console.log(obj2.hasOwnProperty('n1')); // true, 表明是自有的

// 尝试删除该属性
delete obj2.n1;
console.log(obj2.n1); // 100，即它在原型中的值

