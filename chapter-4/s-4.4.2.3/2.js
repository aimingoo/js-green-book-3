// case分支中将尝试引用let y所声明的变量（并导致异常），而不是var y所声明的
var y = 100, x = 100;
switch (x) {
  case 100:
    console.log(y);  // ReferenceError: y is not defined
  case 200:
    let y = x*2;
}

