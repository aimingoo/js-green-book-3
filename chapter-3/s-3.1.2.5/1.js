// 声明类的静态方法和属性
class MyObject {
  static get aName() {
    return 10;
  }

  static foo() {
     console.log(super.toString());
  }
}

class MyObjectEx extends MyObject {}

// 访问类静态成员
console.log(MyObject.aName);
// 调用类静态方法
MyObject.foo();
// 子类可以继承
MyObjectEx.foo();

