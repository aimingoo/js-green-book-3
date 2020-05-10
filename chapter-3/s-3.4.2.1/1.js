var obj = {
  showThis: function() {
    console.log(this);
  }
}

// 示例1. 作为一般函数
var aFunction = obj.showThis;
aFunction();  // `this` is global
