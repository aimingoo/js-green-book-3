// 构造器声明
function MyObject() {}
function MyObjectEx() {}

// 原型链
MyObjectEx.prototype = new MyObject();

// 创建对象实例
obj1 = new MyObjectEx();
obj2 = new MyObjectEx();

// 子类的.constructor属性指向了父类
console.log(MyObjectEx.prototype.constructor === MyObject);

// 子类实例继承了错误的.constructor属性
console.log((new MyObjectEx).constructor === MyObject);