function foo() {
  with (arguments.callee) {
    // 这里既处于foo()函数的函数闭包中，又处于它作为对象时的对象闭包中
  } 
}
foo();