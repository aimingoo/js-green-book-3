// 重写toString()方法，返回仍然是一个对象
var x = new String('123');

x.toString = function() {
  return new Object;
}

// 重写valueOf()方法，也返回一个对象
x.valueOf = function() {
  return new Object;
}

// 触发异常
console.log(+x);  // TypeError: Cannot convert object to primitive value