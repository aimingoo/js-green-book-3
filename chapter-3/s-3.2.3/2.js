// (续上例)

MyObject.prototype.aValue = 100;

// obj是MyObjectEx2()的实例，会受到其原型链的影响
console.log(obj instanceof MyObject); // true
console.log(obj.aValue); // 100

// 重置到其他对象（例如空白对象，或Object.prototype）
Object.setPrototypeOf(obj, {});
console.log(obj instanceof MyObject); // false, 重置后不再是MyObject()的实例
console.log(obj instanceof Object); // true, 仍然是Object()的实例
console.log(typeof obj); // 'object', 是对象
console.log(obj.aValue); // undefined, 不能再访问（重置前的）原型链中的属性

// 重置原型到null
Object.setPrototypeOf(obj, null);
console.log(obj instanceof Object); // false，不是Object()的实例
console.log(typeof obj); // 'object', 是对象
