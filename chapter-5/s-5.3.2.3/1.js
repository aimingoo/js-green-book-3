// 示例7

class MyClass {
  constructor() {
    console.log(new.target === MyClass); // true
  }
}

// 测试1
x = new MyClass;

// 测试2：类不能执行函数调用
try {
  MyClass();
}
catch(e) { // FIX: ==> catch(e) {
  console.log(e.message); // TypeError: ...cannot be invoked without 'new'
}