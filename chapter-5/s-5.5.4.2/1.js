function myFunc() {
   function foo() {
     //...
   }
   return foo;
}

// 如果我们这样来使用...那么函数foo()在返回后立即被执行
myFunc()();

// 相反，如果我们像这样使用...那么将产生引用
func = myFunc();     // <-- 在这里产生一个引用
func();