// 在case分支中不能多次使用let/const来声明相同的名字
switch (x) {
  case 100:
    let y = x;
  case 200:
    let y = x*2; // SyntaxError: Identifier 'y' has already been declared
}
