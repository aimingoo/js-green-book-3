// 声明变量str、num，以及x、y
var str = 'test';
var x, y, num = 3 + 2 - 5;

// 声明变量n
for (var n in Object) {
  // ...
}

// 声明变量i,j,k
for (let i,j,k=0; k<100; k++) {
  // ...
}


// 声明函数foo
function foo() {
  str = 'test';
}

//声明异常对象e
try {
  // ...
}
catch (e) {
  // ...
}

// 当aVar未被声明时, 以下语句将隐式地声明它
aVar = 100;

