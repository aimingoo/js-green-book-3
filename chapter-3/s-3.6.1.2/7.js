// 目标对象
var separator = { };

// 设置一个分隔方法
separator[Symbol.split] = function(str, limit) {
  return str.split(' ', limit)
}

// 测试
var str = 'hello world';
console.log(str.split(separator));

