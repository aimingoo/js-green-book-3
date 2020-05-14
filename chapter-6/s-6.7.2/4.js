// （示例8）
class MyObj {
  constructor(id) {
     this.id = id;
  }

  get foo() {
    return ()=> { // 这里的“上下文中的this”是读foo属性时传入的对象
       console.log(this.id);
    }
  }
}

// 示例：每个MyObj实例都可以有自己的foo方法并已经绑定了this
f = (new MyObj('o1')).foo;
f(); // 'o1'

f = (new MyObj('o2')).foo;
f(); // 'o2'


// 示例：箭头函数会忽略其他方法的this绑定（类似示例5）
// 尝试将它赋给对象方法，或者使用apply/call
obj = { id: "obj", foo: f };
obj.foo(); // 'o2'
obj.foo.call(obj); // 'o2'
obj.foo.apply(obj); // 'o2'
