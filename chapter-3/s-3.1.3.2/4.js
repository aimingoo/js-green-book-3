// 声明构造器
function MyObject() { 
  // ...
}

// 或声明类
// class MyObject {}

// 实例创建
var obj = new MyObject();
// 显示true
console.log(obj instanceof MyObject);  // true

// 声明子类（也可以使用原型继承）
class MyObjectEx extends MyObject {}

// 实例创建
var obj2 = new MyObjectEx();

// 检测构造类, 显示true
console.log(obj2 instanceof MyObjectEx); // true

// 检测祖先类, 显示true
console.log(obj2 instanceof MyObject); // true
