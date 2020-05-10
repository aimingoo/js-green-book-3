function MyDate() {}
Object.setPrototypeOf(MyDate.prototype, Date.prototype);

var d = new Date();
Object.setPrototypeOf(d, MyDate.prototype);
MyDate.call(d);

// 测试
console.log(d); // 将隐式地调用Date.prototype.toISOString()
console.log(d instanceof MyDate); // true
console.log(d.constructor === MyDate); // true

