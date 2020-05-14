// （示例5）
var x = 2, y = 3;

// 箭头函数使用当前词法上下文（这里的global）中的this
var calc_area = () => console.log(this.x * this.y);

// 传入对象a，但calc_area()并不使用它
var a = {x: 100, y: 200};
calc_area.call(a); // 6