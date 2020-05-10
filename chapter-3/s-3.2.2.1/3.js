// 构造器声明
function MyObject() {}

// 子类的一种实现模式
function MyObjectEx() {
  this.constructor = MyObjectEx;
  // ...
}

// 构建外部原型链
MyObjectEx.prototype = new MyObject();

