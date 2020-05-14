// 匿名构造器递归
obj = new (function(x) {
  arguments.callee(this, x);
})