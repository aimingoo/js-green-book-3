// 一个构造器（ES5之前的类）
function MyObject() {
  // ...
}

// 原型继承关系（语句执行是有顺序关系的）
MyObject.prototype = new Object();
MyObjectEx.prototype = new MyObject();

// 构造器函数（请注意“声明”之间通常是没有顺序关系的）
function MyObjectEx() {
  // ...
}
