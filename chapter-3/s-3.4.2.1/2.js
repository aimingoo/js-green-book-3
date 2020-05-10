var obj = {
  showThis: function() {
    console.log(this);
  }
};

// 示例2. 使用当前上下文中的this
()=>this;  // 箭头函数
class MyClass {
  foo() {
  	super.xxx(); // 使用super.xxx()或super()调用
  }
}