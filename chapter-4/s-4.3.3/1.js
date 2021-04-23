var x = "outer", y = "outer";

function foo() {
  console.log([x, y]);
  if (true) {
    function x() {}
  }
  else {
    function y() {}
  }
  console.log([x, y]);
}

foo();
