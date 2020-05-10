// 示例：将foo()视为普通函数
function foo() {
  var data = this;  // <<- 这里暂存了this，当然也可以不暂存它
  return {};
}
obj = new foo();

