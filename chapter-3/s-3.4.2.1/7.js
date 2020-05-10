function foo() {
  // 1. 箭头函数
  var showInArrow = ()=> {
    console.log(this.name);
  }
  showInArrow(); // 测试项1

  var obj = {
    showInArrow,
    name: 'aObject',
    showThis: function() {
      console.log(this.name);
    }
  }

  // with语句中的方法调用
  with (obj) {
    var showThis2 = ()=> console.log(this.name);
    showThis(); // 测试项2
    showThis2(); // 测试项3
    showInArrow(); // 测试项4
  }
}

// 测试
foo.call({name: 'Outside'});
