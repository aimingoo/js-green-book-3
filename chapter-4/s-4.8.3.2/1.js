class MyClass {
  #x = 100;

  // 公开#x的置值器
  set x(v) {
    this.#x = v;
  }

  // 其他使用#x的方法
  usingPrivateX() {
    console.log(this.#x);
  }
}

class MyClassEx extends MyClass {
  // 形式上这里是执行this.x = 200，但实际上是声明子类x以覆盖父类中的x
  x = 200;
}

let obj1 = new MyClass;
obj1.x = 200;
obj1.usingPrivateX(); // 200

let obj2 = new MyClassEx;
console.log(obj2.x);  // 200
obj2.usingPrivateX(); // 100