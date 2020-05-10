// 类继承
class MyObject {}
class MyObjectEx extends MyObject {}

// 检测不到类之间的继承关系
console.log(MyObjectEx instanceof MyObject);  // false

// 使用isPrototypeOf检测
console.log(MyObject.isPrototypeOf(MyObjectEx)); // true

