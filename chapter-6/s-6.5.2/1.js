function MyObject() {
}
var obj1 = new MyObject();

MyObject.prototype.type = 'MyObject';
MyObject.prototype.value = 'test';
var obj2 = new MyObject();

MyObject.prototype = {
  constructor: MyObject,    //<--重写原型时应维护该属性
  type: 'Bird',
  fly: function() {  /* ... */ }
}
var obj3 = new MyObject();

// 显示对象的属性
console.log(obj1.type);  // undefined
console.log(obj2.type);  // 'MyObject'
console.log(obj3.type);  // 'Bird'

// 显示false
console.log(obj1 instanceof MyObject);
console.log(obj2 instanceof MyObject);
// 显示true
console.log(obj3 instanceof MyObject);

// 显示false
console.log(obj1 instanceof obj1.constructor);
// 显示true
console.log(obj1.constructor === MyObject);