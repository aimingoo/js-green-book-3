// 方法1，直接字面量（也可以使用读写器方法）
var obj = { 
  [Symbol.toStringTag]: 'YourObjectClassname'
};

// 测试
console.log(obj.toString());  // '[object YourObjectClassname]'
