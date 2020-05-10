class MyObject {
  constructor() {
    console.log('Value x:', super.x, this.x);  // 100, 100
  }
}
Object.getPrototypeOf(MyObject.prototype).x = 100;

// 或
class MyObject2 extends Object {
  constructor() {
    super();
    console.log('Value y:', super.y, this.y);  // 2000, 2000
  }
}
Object.prototype.y = 2000;

// 测试
new MyObject;
new MyObject2;
