var x = 100;
switch (true) {
  case true:
    console.log(x); // ReferenceError: x is not defined!
  case false:
     let x = 200;
}