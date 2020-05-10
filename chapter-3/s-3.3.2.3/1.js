// 父类和父类.prototype原型中的属性
class MyObject {}
MyObject.prototype.x = 100;

class MyObjectEx extends MyObject {
  foo() {
    console.log(super.x);
  }
}

obj = new MyObjectEx;

// 示例1
//  - obj.foo()通过super访问到的x值
obj.foo(); // 100
//  - obj通过原型继承访问到的x值
console.log(obj.x); // 100

// 示例2
//  - 修改对象实例的x值
obj.x = 200;
console.log(obj.x); // 200
//  - 通过super访问到的原型值是不变化的
obj.foo(); // 100

// 示例3
//   - 修改原型的值
MyObject.prototype.x = 300;
//   - 通过super访问到的值受到影响
obj.foo(); // 300
//   - 对象的自有属性（这里是覆盖了继承属性）不受影响
console.log(obj.x); // 200
