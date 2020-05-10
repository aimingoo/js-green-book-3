// 置构造器的prototype属性为无效值：null，或任何非对象值
function MyObject() {}
MyObject.prototype = null;

// 原型prototype是无效值的情况下，实例是通过new Object()来创建的
var obj = new MyObject;
console.log(Object.getPrototypeOf(obj).constructor === Object);
