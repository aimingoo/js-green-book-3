class MyObject {
  foo() {
    console.log(super.x);
  }
}

var a = new MyObject, b = new MyObject;
a.foo(); 
b.foo();