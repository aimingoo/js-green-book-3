class MyClass {
  internal private x = 100;  // 前缀"internal"用于声明内部访问

  compare(b) {
    return x === b[internal.x];  // "internal.x"是私有属性名引用
  }

  static compare(a, b) {
    return a[internal.x] === b[internal.x];
  }
}

// 示例
let obj1 = new MyClass, obj2 = new MyClass;
console.log(obj1.compare(obj2)); // accept
console.log(MyClass.compare(obj1, obj2)); // accept
