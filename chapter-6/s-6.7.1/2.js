// （引用自`示例1`）
function calc_area(w, h) {
  console.log(w * h );
}

// （示例2）

var Area = {
  doCalc() { // <-- 注意这里没有声明形式参数
    arguments[0] *= 2;
    calc_area.apply(this, arguments);
  }
}

Area.doCalc(10, 20);

// （示例3，续上例）

var Area = {
  doCalc(x) {
    x *= 2;
    calc_area.apply(this, arguments);
  }
}

Area.doCalc(10, 100);  // 10*2*100 = 2000

// （示例4，续上例）

// 非简单参数中形式参数（例如x）并不绑定到arguments
var Area = {
  doCalc(x = 5) {
    x *= 2;
    calc_area.apply(this, arguments);
  }
}
Area.doCalc(10, 100);  // 10*100 = 1000