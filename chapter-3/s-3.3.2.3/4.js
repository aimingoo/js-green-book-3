var proto = {data: 'based'};

var obj = {
  foo() {
    console.log(' => method obj.foo()');
    console.log(' => ', super.data);
  }
}

// 置x的原型
Object.setPrototypeOf(obj, proto);

// obj2没有原型，那么obj2.foo中能访问super吗？
var obj2 = Object.create(null);
obj2.foo = obj.foo;

// 测试如下
obj2.foo();
