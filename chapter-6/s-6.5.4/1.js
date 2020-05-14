// 检测属性描述符是否完全不可重写
var overrideDisabled = ([_, desc]) => !desc.configurable && !desc.writable;
var toDesc = key => [key, Object.getOwnPropertyDescriptor(global, key)];
var allDescriptor = Object.getOwnPropertyNames(global).map(toDesc);

// 事实上，Node.js的global只有三个成员完全不可重写
console.log(allDescriptor.filter(overrideDisabled).map(([key])=>key)); // [ 'Infinity', 'NaN', 'undefined' ]
