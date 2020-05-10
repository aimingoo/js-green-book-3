var obj = new Object();

// 不存在'aCustomMember', 显示false
console.log(obj.propertyIsEnumerable('aCustomMember'));

// 数组的.length属性是隐藏的
console.log([].propertyIsEnumerable('length'));
