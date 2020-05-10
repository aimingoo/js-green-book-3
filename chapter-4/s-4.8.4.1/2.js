class MyClass {
  protected x = 100;
  // ...
}

class MyClassEx extends MyClass {
  foo() {
    console.log(x); // 100
  }
}

console.log((new MyClassEx).foo()); // 100