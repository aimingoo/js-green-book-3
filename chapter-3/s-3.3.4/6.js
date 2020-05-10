class MyObject extends null {
  constructor() {
    return Object.create(new.target.prototype);
  }

  // 对象方法
  foo() {
    console.log('call instance method');
  }
}

// 创建实例
var obj = new MyObject();

// 调用实例方法
obj.foo();

// 是MyObject()的实例
console.log(obj instanceof MyObject); // true

// 不是Object()的实例
console.log(obj instanceof Object); // false
