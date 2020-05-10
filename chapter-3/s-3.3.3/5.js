// （用于模拟类的构造器声明）
function MyObject() {}
function MyObjectEx() {}

// （本例是如下代码的模拟效果）
//  new MyObjectEx()

// 模拟类继承中this对象的创建和使用
var thisObj = new Object;
MyObject.call(thisObj)
MyObjectEx.call(thisObj);

