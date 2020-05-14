// 示例1
function MyObject() {
  function foo() {
  }

  this.method = foo;
}

obj1 = new MyObject();
obj2 = new MyObject();

// 显示false, 表明产生了两个函数实例 
console.log( obj1.method === obj2.method );