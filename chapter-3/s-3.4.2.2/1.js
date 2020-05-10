function MyObject() {}

MyObject.prototype.OnError = undefined;

MyObject.prototype.doAction = function(str) {
  try {
    return eval(str);
  }
  catch(e) {
    if (this.OnError) this.OnError(e);
  }
}

// 1. 创建对象
var obj = new MyObject();
// 2. 添加事件处理句柄
obj.OnError = function(e) {
  //...
}
// 3. 调用方法, 执行过程中可能触发OnError事件
obj.doAction('aObj.tag = 100');
