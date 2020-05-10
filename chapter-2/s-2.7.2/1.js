// 声明函数时, 括号用作参数表。
function foo(v1, v2) { 
  //...
}

// 构造对象时，用于传入初始化参数
var myArray = new Array('abc', 1, true);

// try..catch中catch子句的语法符号
try {
  // ...
}
catch (x) {
  // ...
}

// （以下都是合法语句）
for (;;) break;
switch (0) {}
if (0); // 
with (0);
while (0);

var str1 = typeof(123);
var str2 = ('please input a string', 1000);

// 有(), 表明函数调用。
foo();
// 没有()，则该语句只是一个变量的返回。
foo;
