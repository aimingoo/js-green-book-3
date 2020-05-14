obj = {};
function foo(a) {
  //显示false
  // - 按照new运算的规则，这时的this将不再指向obj，而是指向新构建的对象
  console.log(this === obj);

  // 显示 'abc'
  // - 使用bind时传入的参数，在new()运算中传入的参数被忽略
  console.log(a);
}

Foo = foo.bind(obj, 'abc');

// 尝试使用绑定后的函数作为构造器
//  - 参数值123被忽略
newInstance = new Foo('123');

// 两项检测都将显示true
//  - newInstance是foo()的实例，也是Foo()的实例
console.log(newInstance instanceof foo);
console.log(newInstance instanceof Foo);

// 显示false
//  - Foo()函数没有prototype属性
console.log('prototype' in Foo);