class MyClass {
  protected x = 100;
  // ...
}

class MyClassEx2 extends MyClass {
  private x as x2;
  foo(x) {
    console.log(x); // arguments-x
    console.log(x2); // protected-x
  }
  
  internal protected x3 = 200;
  static print(obj) {
    console.log(obj[internal.x3]);
  }
}

// 示例：别名访问
(new MyClassEx2).foo(10); // 10, 100

// 示例：内部访问
MyClassEx2.print(new MyClassEx2); // 200

// 示例：继承的内部访问
MyClassEx2.print(new (class extends MyClassEx2 {})); // 200