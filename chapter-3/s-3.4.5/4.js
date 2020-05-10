function MyDate(...args) {
  let Base = Object.getPrototypeOf(MyDate.prototype).constructor;
  self = Object.setPrototypeOf(new Base(...args), MyDate.prototype);
  // ...

  return self;
}
Object.setPrototypeOf(MyDate.prototype, Date.prototype);

// 测试
var d = new MyDate;
console.log(d); // 将隐式地调用Date.prototype.toISOString()
console.log(d instanceof MyDate); // true
console.log(d.constructor === MyDate); // true

