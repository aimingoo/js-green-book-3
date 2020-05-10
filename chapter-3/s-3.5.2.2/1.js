var obj = { data: 'oldValue' }

// 显示 'value', 'writable', 'enumerable', 'configurable'
var oldDescriptor = Object.getOwnPropertyDescriptor(obj, 'data');
console.log(Object.keys(oldDescriptor));

// 步骤一：通过一个闭包来保存旧的obj.data值
Object.defineProperty(obj, 'data', function(oldValue) {
  return {
    get: function() { return oldValue },
    configurable: false
  }
}(obj.data));

// 显示 'get', 'set', 'enumerable', 'configurable'
var newDescriptor = Object.getOwnPropertyDescriptor(obj, 'data');
console.log(Object.keys(newDescriptor));

// 步骤二：测试使用重定义的getter来取obj.data的值
//  - 显示："oldValue"
console.log(obj.data);