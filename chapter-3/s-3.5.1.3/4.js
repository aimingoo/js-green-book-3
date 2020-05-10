// 字面量风格的类声明
class AClass {
  foo() {
    // 声明为AClass.prototype.foo属性（的数据描述符）
  }
  static get name() {
    // 声明为AClass.name的属性存取方法
  }
  get name() {
    // 声明为AClass.prototype.name的属性存取方法
  }
}

