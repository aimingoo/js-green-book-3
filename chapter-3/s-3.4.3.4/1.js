// 方法5：使用Reflect.construct()，以构造器来创建基于原型继承的对象
function MyObject(x) {
  this.xxx = x*3;
  console.log('call me, and new.target is: ', new.target.name);
}
MyObject.prototype = new Object;

function targetConstructor() {
  console.log('non initialization...');
}

// 示例：一般的构造运算
var obj = new MyObject(5);
console.log(obj.xxx); // 15, new.target is MyObject()
console.log(obj.constructor.name); // 'Object'

// 示例：更细致地控制构造过程
var obj = Reflect.construct(MyObject, [100], targetConstructor);
console.log(obj.xxx); // 300, new.target is targetConstructor()
console.log(obj.constructor.name); // 'targetConstructor'
