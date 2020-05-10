// super()将调用到Object()
class MyObject extends Object {
  constructor() {
    super();
    console.log('the super is:', Object.getPrototypeOf(MyObject));
  }
}
x = new MyObject; // the super is: function Object ...

// 重置类继承关系
Object.setPrototypeOf(MyObject, new Function);

// test
x = new MyObject; // the super is: function anonymous...
