obj = {
  get foo() {
    return ()=>{
       console.log(this.name);
    }
  },

  get foo2() {
    return ()=>{
       // 如上例，当前上下文中的this将指向<obj>本身
       super.showMe(); // 这里隐式地传入了this
    }
  }
}

// 测试标记的名字
obj.name = "The <obj>.";

// 向“主对象（HomeObject）的原型”添加方法，即foo2()中的super.showMe()
Object.getPrototypeOf(obj).showMe = function() {
  console.log(this.name);
}

// 箭头函数使用当前上下文中的this，即"obj"
obj.foo();

// “super引用”将在调用super.xxx()时隐式地传递上述的this引用
obj.foo2();
