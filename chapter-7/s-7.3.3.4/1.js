// 类声明
class ObjectEx {
  async foo() {
    return 1
  }

  static async foo() {
    return 2
  }
}

// 类实例化（创建对象）
obj = new ObjectEx;

// 对象声明
obj2 = {
  async foo() {
    return 3
  }
}

// 示例
obj.foo().then(console.log);  // 1
obj2.foo().then(console.log);  // 3
ObjectEx.foo().then(console.log); // 2