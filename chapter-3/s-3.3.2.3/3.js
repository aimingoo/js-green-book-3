obj = {
  foo() {
    console.log(super.x);
  }
}
obj.foo(); // undefined

Object.setPrototypeOf(obj, {x: 100}); // rewrite protoype
obj.foo(); // 100

