var f = new Function;
var constructor = null;  // 在with语句之外的标识符

// 会访问f.prototype.constructor
with (f.prototype) console.log(f === constructor); // true

// 排除
f.prototype[Symbol.unscopables] = { constructor: true };

// 会访问到with语句之外的标识符
with (f.prototype) console.log(f === constructor); // false
