// 各分支中使用自己的块语句
let x = 200;
switch (x) {
  case 100: {
    let y = 100;
  }
  case 200: {
    let y = x*2;
  }
}