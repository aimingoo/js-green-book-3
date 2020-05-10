// 可以被对象方法引用的外部函数
function getValue() {
  return this.value;
}

// 构造器(函数)
function MyObject() {
  this.name = 'Object1';
  this.value = 123;
  this.getName = function() {
    return this.name;
  }
  this.getValue = getValue;
}

// 使用new运算符，实现实例创建
var aObject = new MyObject();
