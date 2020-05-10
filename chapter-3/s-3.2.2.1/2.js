function MyObject() {}
function MyObjectEx() {}

// 构建外部原型链
MyObjectEx.prototype = new MyObject();
MyObjectEx.prototype.constructor = MyObjectEx; // << 添加该行代码

/* CHECK AGAIN */

// 创建对象实例
obj1 = new MyObjectEx();
obj2 = new MyObjectEx();

// 正确: 子类的.constructor属性将指向创建类
console.log(MyObjectEx.prototype.constructor === MyObjectEx); // true

// 正确: 子类实例的.constructor属性被重写
console.log((new MyObjectEx).constructor === MyObjectEx); // true
