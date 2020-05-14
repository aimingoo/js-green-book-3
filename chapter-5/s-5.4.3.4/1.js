var propObj, obj = new Object;
var propSuper = {
  foo() { console.log('Here') }
};

Object.defineProperty(obj, 'prop', propObj = {
  ["set"]() {
      super.foo(); // 'Here'
      console.log("这是一个特殊的setter，它是一个'真的'setter方法");
  }
});

Object.setPrototypeOf(propObj, propSuper);

// 测试prop的setter“方法”
//  - 在存取器方法中可以调用到propSuper.foo()方法
obj.prop = 100; 