// 例1
class MyObject {}
console.log(typeof MyObject); // 'function'

// （续例1, 章节末）
function MyObjectEx() {}
MyObjectEx.prototype = new MyObject;
MyObjectEx.prototype.constructor = MyObjectEx;

class MyObjectEx2 extends MyObjectEx {}
var obj = new MyObjectEx2;

// 测试
console.log(obj instanceof MyObject); // true
