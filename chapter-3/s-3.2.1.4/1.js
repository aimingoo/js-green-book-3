var empty = {};

var proto = Object.getPrototypeOf(empty);
var props = Object.getOwnPropertyNames(empty);

// 显示true, 原型指向Object.prototype
console.log(proto === Object.prototype);

// 显示0, 属性表为空
console.log(props.length);

// 显示非零值, 表明原型链上Object.prototype的属性表不是空的
var propsInChain = Object.getOwnPropertyDescriptors(Object.prototype);
console.log(Object.keys(propsInChain).length);

// 显示0, 表明没有显式成员
var enumerabledMembers = Object.values(propsInChain)
.filter(descriptor => descriptor.enumerable);
console.log(enumerabledMembers.length);
