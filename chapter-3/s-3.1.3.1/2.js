// 定义原型链
function MyObject() {}
function MyObjectEx() {}
MyObjectEx.prototype = new MyObject();

// aCustomMember是原型链上的（父类的）成员
MyObject.prototype.aCustomMember = 'MyObject';

// 显示false, 因为propertyIsEnumerable()不检测继承来的成员
var obj = new MyObjectEx();
console.log(obj.propertyIsEnumerable('aCustomMember'));

// 但在列举obj时, 将包括aCustomMember
for (var propName in obj) {
  console.log(propName);
}

