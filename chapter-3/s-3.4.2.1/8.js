// bind()等操作对箭头函数无意义
function foo2() {
  var func = ()=> console.log(this.name);
  func.call(new Object);
  [1].forEach(func, new Object);
}

// 测试：显示'Outside', 表明在foo2()中新创建的对象未能作为this使用
foo2.call({
  name: 'Outside'
})

