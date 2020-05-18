// 父类（super）与子类中都将声明异步方法的属性存取器
class MyObject {}
class MyObjectEx extends MyObject {}

// （以下使用Object.definePropertyEx()来声明）

// 工具函数（参见上例）
Object.definePropertyEx = function(instance, name, desc) {
  return Object.defineProperty(instance, name,
    Object.setPrototypeOf(desc, Object.getPrototypeOf(instance)));
}

// 父类
Object.definePropertyEx(MyObject.prototype, 'data', {
  async ["get"]() {
    return 100;
  }
});

// 子类
Object.definePropertyEx(MyObjectEx.prototype, 'data', {
  async ["get"]() {
    // 或 return super.data.then(x=>x+1);
    return await super.data + 1;
  }
});

// 测试4
obj7 = new MyObjectEx;
obj7.data.then(console.log); // 101

