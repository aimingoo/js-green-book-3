var x = "outer";

function foo() {
  console.log(x); // outer
  if (true) function x() {};
  console.log(x); // outer
}

foo();
