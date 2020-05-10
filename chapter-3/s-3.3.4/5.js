// 显式将MyObject声明为纯静态类
class MyObject extends null {
  // 对象方法（无意义，可以声明，但不能访问和使用）
  foo() {
    console.log('instance method: ', this.toString())
  }

  // 静态类方法
  static bar() {
    console.log('class method: ', this.toString())
  }
}

// 不能作为一般函数调用，也不能创建实例
// MyObject();
// new MyObject;

// 可以作为静态类，访问静态方法
MyObject.bar();
