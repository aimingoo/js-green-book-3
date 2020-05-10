// 引用foo 
TMyClass = Class(TObject, foo);

// foo声明于全局变量作用域
function foo() {
  // ...
  this.Class = TMyClass;
}