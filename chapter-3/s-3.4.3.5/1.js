let ParentClass = Object;

// 方法7：实现类似方法3的继承原型， 
function MyObject() {}

// 使用Object.setPrototypeOf()重置内部原型链
Object.setPrototypeOf(MyObject.prototype, ParentClass.prototype);

// （或，）使用Object.create()来创建原型
MyObject.prototype = Object.create(ParentClass.prototype);
