// 父类（super）中的属性存取器
class MyObject {
  get data() {
    return 100;
  }
  static get data() {
    return 200;
  }
}

class MyObjectEx extends MyObject {
   // 由于异步存取器方法不能直接声明，所以采用如下方式来实现 
}

// 1. 相当于声明MyObjectEx的静态方法（类方法的存取器）
var getterRef;
Object.defineProperty(MyObjectEx, 'data', getterRef = {
  async ["get"]() {
    return super.data + 1;
  }
});

// 重置super引用的对象
Object.setPrototypeOf(getterRef, Object.getPrototypeOf(MyObjectEx));

// 测试1
MyObjectEx.data.then(console.log); // 201

// 工具函数：简单包含上述技巧
Object.definePropertyEx = function(instance, name, desc) {
  return Object.defineProperty(instance, name,
    Object.setPrototypeOf(desc, Object.getPrototypeOf(instance)));
}

// （以下直接使用上述工具函数）

// 2. 相当于声明MyObjectEx的原型方法（存取器）
Object.definePropertyEx(MyObjectEx.prototype, 'data', {
  async ["get"]() {
    return super.data + 2;
  }
});

// 3. 对对象实例使用本技巧（参见前例中的obj4）
obj5 = Object.definePropertyEx(new Object, 'data', {
  async ["get"]() {
    return super.data + 3;
  }
});

// 为obj5方法中的super.data引用置值（测试用）
Object.getPrototypeOf(obj5).data = 100;

// 测试2
obj5.data.then(console.log); // 103

// 测试3
obj6 = new MyObjectEx;
obj6.data.then(console.log); // 102
