// 当使用构造器语法时
function MyObject() {
  // 作为构造器，这里可以直接引用MyObject这个函数名
  console.log(typeof MyObject);
}

// 当使用类声明语法时
class MyObjectEx {
  constructor() {
    // 是声明语法而非函数，因此constructor不能视为函数名
    console.log(typeof constructor); // 显示undefined
  }
  foo() {
    // （同上）
    console.log(typeof foo); // 显示undefined
  }
}

// 测试
new MyObject;
(new MyObjectEx).foo();
