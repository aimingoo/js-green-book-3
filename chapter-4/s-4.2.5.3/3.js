class MyClass {
  // x = new Object;
}

// 上述语法设计的实际效果1（声明语义）
MyClass.prototype.x = new Object;

// 上述语法设计的实际效果2（执行语义）
function MyClass2() {
  this.x = new Object; // 为每个实例执行一次
}

let a = new MyClass, b = new MyClass;
console.log(a.x === b.x); // true

let a2 = new MyClass2, b2 = new MyClass2;
console.log(a2.x === b2.x); // false
