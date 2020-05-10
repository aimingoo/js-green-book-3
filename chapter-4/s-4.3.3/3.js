var x = "outer", y = "outer";

function foo() {
  console.log([x, y]); // 由于这里没有顶层变量，因此x,y都是outer
  if (true) {
    console.log(typeof x); // 这里有一个由函数声明产生的、块级别的变量名
    function x() {}
  }
}

foo();
