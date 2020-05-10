// 方法3，声明为类静态成员
class MyObject {
  // 声明静态成员，重写了Function.prototype继承来的同名属性
  static [Symbol.hasInstance](obj) {
    return super[Symbol.hasInstance](obj) ||  // 调用原方法
       (obj && obj.className == 'MyObject'); // 或检查className
  }
}

// 测试1
var obj = { className: 'MyObject' };
var obj1 = new MyObject;
console.log(obj instanceof MyObject); // true
console.log(obj1 instanceof MyObject); // true

// 测试2：“对象构建自对象”
//  - 注意，fakedBase是一般对象
var fakedBase = new Object;
fakedBase[Symbol.hasInstance] = (obj)=> 'className' in obj;
console.log(obj instanceof fakedBase); // true

// 测试3：在Object()之外构建一个对象系统
var atom = Object.create(null); 
console.log(atom instanceof Object); // false, 不是Object()的实例
atom.className = '[META]'; // anything
console.log(new Object instanceof fakedBase); // false, 排除一般对象
console.log(atom instanceof fakedBase); // true, 是fakedBase的实例
console.log({className: ''} instanceof fakedBase); // true, 支持字面量
