var obj = {
  showThis: function() {
    console.log(this);
  }
}

// 示例5. 使用call/apply时传入指定对象
obj.showThis.call(new Object);
