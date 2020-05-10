// 声明类类型
class MetaClassEx extends MetaClass {
  static foo() {
    // 静态方法成了类类型的成员
    console.log('static method in ClassType types.');
  }
  bar() {
    // 非静态方法或属性不能由后代类/类类型继承
  }
}

// 声明类
class ObjectEx extends new MetaClassEx {
  static foo() {
    // 可以继承来自类类型（MetaClassEx）的类方法，所以可以调用super()
    super.foo();
    console.log('static method in Class types.');
  }
  bar() {
     // 可以由对象实例继承
    console.log('call by instance.');
  }
}

var obj = new ObjectEx;
obj.bar();
ObjectEx.foo();
