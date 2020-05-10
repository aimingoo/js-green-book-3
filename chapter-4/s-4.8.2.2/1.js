// 以下为“类字段”提案的语法
class MyClass { // 这里是MyClass_constructor的作用域
  #data = 100; // 位置1
  foo() {
    console.log(this.#data); // 位置2
  }
}

// test
(new MyClass).foo();