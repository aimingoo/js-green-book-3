// 箭头函数是不能用作构造器的
var f = ()=>{};

// 代理添加了构造方法，但是不能绕过内部检测，因此实际上执行不到handle.construct
var MyObject = new Proxy(f, {
  construct: function() {
    console.log('try custom constructor...');
    return new Object;
  }
});