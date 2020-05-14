function foo() {
  var x = 100;
  eval('let x = "Okay"; console.log("in eval():", x);');
  console.log("in foo():", x);
}

foo();