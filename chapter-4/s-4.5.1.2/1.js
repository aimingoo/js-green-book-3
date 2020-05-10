// ES6之后的实现：使用let/const声明，以支持“语句级别的”块级词法作用域
for (let i=0; i<10; i++) {
  // ...
}

// i将是未定义的
console.log(typeof i);

