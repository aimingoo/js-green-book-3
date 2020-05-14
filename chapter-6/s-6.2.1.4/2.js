// 声明值类型数据, 并修改它的成员
var str = 'abc';
str.toString = function() {  // <-- 这里重写toString()是无意义的
  return '';
}

// 显示'abc', 表明对str包装后对象的修改, 不会传递到原变量
console.log(str);
console.log(str.toString());