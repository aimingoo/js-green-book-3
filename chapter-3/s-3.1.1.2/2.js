// 示例1: 嵌套的对象字面量声明
obj = {
  'obj2': {
    name: 'MyObject2',
    value: 1234
  }
};

// 示例2: 使用函数(表达式)的返回值
function getValue() {
  return 100; 
}

obj = {
  name: 'MyObject3',
  value: getValue()
}