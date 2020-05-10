var obj = {
  showThis: function() {
    console.log(this);
  }
}

// 示例4. 绑定对象
var showMe = obj.showThis.bind(new Object);
showMe(); // 传入被绑定的对象