// 与上例等效的声明
class MyObject { }
MyObject.aName = 10;
MyObject.foo = function() {
  console.log(Object.toString.call(MyObject));
}

// 访问类静态成员
console.log(MyObject.aName);
// 调用类静态方法
MyObject.foo();

