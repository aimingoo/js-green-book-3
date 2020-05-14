// 隐式规则的简单逻辑
var typeHint, x = new String('123');
var methods = ['toString', 'valueOf'];
if (typeHint == 'number') methods = methods.reverse();

// 顺次尝试两个方法
let result;
for (let method of methods.map(key=>x[key])) {
  if (method && method.call) {
    result = method.call(x);
    if (result === null || result instanceof Object) continue;
    console.log('Ok, got value:', result);
    break;  // and return the <result>
  }
}

// 如果两个方法都返回非值（例如对象）
throw new TypeError('Cannot convert ... to primitive value');
