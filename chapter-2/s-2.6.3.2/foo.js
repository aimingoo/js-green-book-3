// file: foo.js
function foo() {
  // fail
  try {
    x = 1234;
  }
  catch(e) {
    console.log(e.message);  // "x is not defined"
  }
  console.log(typeof x); // "undefined"

  // success
  (0, eval)('x = 1234');
  console.log(typeof x); // "number"
}

foo();
console.log(x); // 1234;