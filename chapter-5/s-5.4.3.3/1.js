// 1. 对象字面量中的“对象方法”
obj = {
  foo() {
  }
}

// 类声明
class MyClass {
  // 2. 类声明中的“原型方法”（包括名为constructor的构造方法）
  foo() {
  }

  // 3. 类声明中的“静态方法（类方法/类静态方法）”
  static foo() {
  }
} 

