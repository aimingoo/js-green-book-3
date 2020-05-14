var obj = {
  foo: function() {},
  data: 'string',
  tag: false
}

// 在函数的属性中加入循环引用
obj.foo.x = obj;
console.log(JSON.stringify(obj));  // {"data":"string","tag":false}

// 将函数作为对象处理
var nonEmpty = x => (Object.keys(x).length > 0) && x;
function functionFilter (k, v) {
  return (typeof v == 'function') && nonEmpty(Object.assign({}, v)) || v;
}

// 默认处理：忽略函数
console.log(JSON.stringify(obj)); // {"data":"string","tag":false}

// 当对象中的函数没有自有属性时
// （可删除示例中的`obj.foo.x`）
delete obj.foo.x;
console.log(JSON.stringify(obj, functionFilter)); // {"data":"string","tag":false}

// 当对象中的函数有自有属性时，作为对象处理
// （覆盖了之前示例中的循环结构obj.foo.x）
obj.foo.x = 100;
console.log(JSON.stringify(obj, functionFilter)); // {"foo":{"x":100},"data":"string","tag":false}
