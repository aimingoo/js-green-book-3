// （示例1）

function calc_area(w, h) {
  console.log(w * h );
}

function Area() {
  this.name = 'MyObject';
}
Area.prototype.doCalc = function(v1, v2) {
  calc_area.call(this, v1, v2);
}

// 调用cacl_area()来运算面积
var area = new Area();
area.doCalc(10, 20);


// 一个相对复杂的例子是这样：
Area.prototype.doCalc = function(v1) {
  var slice = Array.prototype.slice;
  calc_area.apply(this, [v1*2].concat(slice.call(arguments, 1)));
}

// 测试(2)
area.doCalc(10, 20);

// 用剩余参数和数组展开来完成类似的操作，例如：
Area.prototype.doCalc = function(v1, ...args) {
  calc_area.apply(this, [v1*2, ...args]);
}

// 测试(3)
area.doCalc(10, 20);


// 或者使用call()方法：
Area.prototype.doCalc = function(v1, ...args) {
  calc_area.call(this, v1*2, ...args);
}

// 测试(4)
area.doCalc(10, 20);
