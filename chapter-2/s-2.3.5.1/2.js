function foo() {
  console.log(typeof x); // ReferenceError: x is not defined
  let x = 100;
}
foo();

