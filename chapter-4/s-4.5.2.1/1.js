// 构建一个特殊的变量x
var x = new Object;
x.valueOf = ()=> { throw new Error };  // 抛出一个异常作为它的值结果

// 当表达式将x作为值运算时，会抛出一个异常
console.log(x + 1);
