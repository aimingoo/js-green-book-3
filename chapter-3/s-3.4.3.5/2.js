// 方法8：通过原型操作重构类继承关系
class MyObject extends Object {}

// 相当于重置extends
Object.setPrototypeOf(MyObject, Function); 

// ...
