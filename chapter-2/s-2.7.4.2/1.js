// 示例4: 声明对象字面量
var obj = {
  x: 1,
  y: 2,
  z: 3
}

// 使用分号的表示法(FAIL)
// {x: 1, y: 2, z: 3};

// 使用复合语句的表示法(FAIL)
// {{x: 1, y: 2, z: 3}}

// 先强制作为连续运算（语句），然后将对象字面量理解为单值表达式
console.log(typeof eval(`0,{x: 1, y: 2, z: 3};`)); // object

// 示例大括号的语法歧义
if (true) {
  entry: 1
}

// 显示上面的示例语句的值
var code = 'if (true) { entry: 1 }';
var value = eval(code);
console.log( value ); // 显示值1

// 强制表达式运算的方式来得到对象字面量
if (true) ({
  entry: 1
});


// 使用括号“( )”强制表达式运算的结果
var code = 'if (true) ({ entry: 1 })';
var value = eval(code);
console.log(typeof value); // object