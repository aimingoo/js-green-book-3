// 示例: 一些已声明过的变量或标识符
function getValue() {
  // ...
}
// 对象字面量声明
var aObject = {
  name: 'Object Literal',
  value: 123,
  getName: function() {
    return this.name; 
  },
  getValue, // 使用“变量名/值”作为属性名、值
  get name2() { // 使用存取器的属性
     return 'name: ' + this.name;
  }
}

obj = {
  'abc.def': 123
};
