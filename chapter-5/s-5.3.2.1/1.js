// 示例1

// foo会成为全局上下文中的标识符（变量名）
function foo() {
  // func是在foo()函数内的一个标识符， 
  function func() {
    // func标识符也作用于该函数体的内部
  }

  // if语句内的函数声明
  if (true) {
    // 函数声明不是块级作用域的（与let/const不同），所以func2在foo()函数内可见
    function func2() {
    }
  }
  console.log(typeof foo, typeof func, typeof func2)
}

// 测试1
//  - 在foo()函数内三个标识符都是可见的
foo();

// 测试2
//  - func和func2在全局上下文中不可见
console.log(typeof foo, typeof func, typeof func2);