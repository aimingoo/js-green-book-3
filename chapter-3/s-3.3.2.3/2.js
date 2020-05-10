class MyObject {}
MyObject.x = 100;

class MyObjectEx extends MyObject {
  static foo() {
    console.log(super.x);
  }
}

// MyObject is prototype of MyObjectEx
console.log(Object.getPrototypeOf(MyObjectEx) == MyObject); // true

// the `super` point to MyObjectEx
MyObjectEx.foo(); // 100;

