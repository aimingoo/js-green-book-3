// 尝试使用JSON.stringify()来处理函数或方法
var obj = { foo() {} }; // obj.foo()方法
var methodToString = (k, v) => {
  if (typeof v == 'function') {
    return v.toString().replace(/(function )?/, 'function ');
  }
  return v;
}

// 在这个例子中，obj.foo将被序列化成字符串
var str = JSON.stringify(obj, methodToString);

// 使用eval()将其反序列化时, 也只能得到其字符串值
var obj2 = eval('(' + str + ')');
console.log(typeof obj.foo); // 'function'
console.log(typeof obj2.foo); // 'string'