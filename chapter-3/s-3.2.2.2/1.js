// 原型继承：构造器声明
function MyObject() { }

// 原型继承（1）
function MyObjectEx() { }
MyObjectEx.prototype = new MyObject();
MyObjectEx.prototype.constructor = MyObjectEx;

// 原型继承（2）
function MyObjectEx2() { }
MyObjectEx2.prototype = new MyObjectEx();
MyObjectEx2.prototype.constructor = MyObjectEx2;

// 测试对象
var obj = new MyObjectEx2();

// 原型继承：遍历原型链
var proto = Object.getPrototypeOf(obj);
while (proto) {
  console.log(">> " + proto.constructor);
  proto = Object.getPrototypeOf(proto);
}
console.log(">> " + proto); 
