// 示例：关于Symbol.match的特殊性
var obj = {
  source: 'abc.e',
  flags: 'i',
  [Symbol.match]: true
}

// obj被理解为正则表达式并据此创建新实例
var rx = new RegExp(obj);
console.log(rx.source, rx.test('abcde'));  // true
