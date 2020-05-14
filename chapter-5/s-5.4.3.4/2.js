class MyClass {
  get x() { return 100 }
}

class MyClassEx extends MyClass {
  get x() { return 200 }

  // native `foo()`
  foo() {
    console.log(super.x, this.x);
  }
}

// 1. 动态地为 MyClassEx添加一个方法
var propObj;
Object.defineProperty(MyClassEx.prototype, 'foo2', propObj = {
  value() {  // value of `foo2`
    console.log(super.x, this.x);
  }
});

// 2. 为foo2()方法维护一个有效的super
Object.setPrototypeOf(propObj, MyClass.prototype);

// 测试
var obj = new MyClassEx;
obj.foo(); // 100, 200
obj.foo2(); // 100, 200