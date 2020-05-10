// 非派生的：在声明中未使用extends关键字
class MyObject {
  constructor() {
    console.log('->', 'MyObject');
  }
}

// 派生的：声明中使用了extends关键字，所以在构造器中必须调用super()
class MyObjectEx extends MyObject {
  constructor() {
    super();
    console.log('->', 'MyObjectEx');
  }
}

// 测试
x = new MyObjectEx;
