// （示例6）
var x = 2, y = 3;

// 一般函数
var calc_area = function(){
  console.log(this.x * this.y);
}

// 没有传入有效的this
calc_area.call(); // 6

// （或）直接将calc_area作为函数使用，因此没有this传入
calc_area(); // 6