// 声明let y必须被“执行到”，才能初始绑定y的值，而不仅是在形式上更靠前。
var x = 200;
switch (x) {
  case 100:
    let y = 100;
  case 200:
    y = x*2; // ReferenceError: y is not defined
}

