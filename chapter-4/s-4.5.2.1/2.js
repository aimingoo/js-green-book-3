// 构建一个特殊的变量x
var x = new Object;
x.valueOf = x.toString = ()=>'';

// 当表达式将x作为值运算时，（通常）会被忽略
console.log("Hello " + x + "world!");
