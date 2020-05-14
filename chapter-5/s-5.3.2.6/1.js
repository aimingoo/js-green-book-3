class MyFunc {
  static foo() {
    console.log('prototype method in MyFunc');
  }
}

class MyFuncEx extends MyFunc {
  static foo() {
    console.log('own method in MyFuncEx');
  }
  callMe() {
    console.log('call me in MyFuncEx');
  }
}

// 测试
var f = MyFuncEx.bind();
MyFuncEx.foo();  // own method
f.foo(); // prototype method