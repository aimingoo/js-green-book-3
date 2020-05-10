// 示例：代理obj对象，并尝试属性读写操作

var obj = { value: 100 };
var p = new Proxy(obj, {
  get: function(target, key) {
    console.log('access key name:', key);
    return target[key] * 2;
  }
});

// 代理机制并不改变原始对象自己的操作
console.log(obj.value); // 100

// 只能响应“在代理对象上发生的”行为，例如读属性
console.log(p.value);  // 200

// 未定义陷阱的行为会被直接投射到目标对象，例如写属性
p.value = 1;
console.log(obj.value); // 1
