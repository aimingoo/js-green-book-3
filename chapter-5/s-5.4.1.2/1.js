// 示例：可以不调用super()而返回任意有效值作为子类中的this
//  - 注：这里ParentClass是任意的，因为本示例不调用super()
var ParentClass = class {};
class MyClass extends ParentClass { 
  constructor() {
    return {message: 'created by MyClass'};
  }
}

class MyClassEx extends MyClass {
  constructor() {
    super();
    console.log(this.message);
  }
}

// 在MyClassEx的构造方法中得到的this是由MyClass创建的
new MyClassEx; // created by MyClass