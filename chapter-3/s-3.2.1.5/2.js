function MyObject() {
  this.showMe = function() {
    console.log(typeof this);
  }
  console.log('call in...');
}
MyObject.prototype = null;

// 测试
var obj = new MyObject;
obj.showMe();

// 显示true值
console.log(Object.getPrototypeOf(obj) === Object.prototype);

Object.setPrototypeOf(obj, null);

// 它仍然是对象，但没有继承来的任何属性（原型是null），也不再是Object的实例
console.log(typeof obj);  // 'object'
console.log('toString' in obj); // false
console.log(obj instanceof Object); // false
obj.showMe(); // 能访问自有的属性（以及方法）
