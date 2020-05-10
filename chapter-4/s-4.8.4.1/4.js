class MyClass {
  protected x = 100;
  // ...
}

class MyClassEx2 extends MyClass {
  private as x; // 将x的可见性覆盖为"私有"
  foo() {
    console.log(x); // protected-x
  }
}

// 示例：访问覆盖后的私有属性（未覆盖值）
(new MyClassEx2).foo(); // 100

// 示例：在子类中，未覆盖的foo()方法仍然可以在"父类的"私有域中访问
let a = new (class extends MyClassEx2 {});
a.foo(); // 100

// 示例：在子类中覆盖foo()方法
let x = "outer";
let MyClassEx3 = class extends MyClassEx2 {
  foo() {
    console.log(x); // 当前类中不存在私有域中的x
  }
};
(new MyClassEx3).foo(); // "outer"