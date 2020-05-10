// 表现1：super指向原型对象
proto = { x: 100 };
obj = Object.setPrototypeOf({
  get real_x() {
    return super.x;
  }
}, proto);

// test
console.log(obj.real_x);  // 100