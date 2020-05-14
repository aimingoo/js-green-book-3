// （示例7）
var id = "global";

var obj = {id: "MyObj"};

// 参考“示例5”，箭头函数总是使用当前上下文中的this
Object.defineProperty(obj, "foo", {
  get() {
    return ()=> { // 这里的上下文中的this是读obj.foo时传入的对象
       console.log(this.id);
    }
  }
})

// f()将是一个引用了“obj.foo上下文中的this”的箭头函数
var f = obj.foo;
f(); // MyObj