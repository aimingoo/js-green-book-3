import * as myNames from "./2.mjs"; // 'module-name';  

//  { Value: 'good', Writable: true, Enumerable: true, Configurable: false } 
console.log(Object.getOwnPropertyDescriptor(myNames, 'x'));  

// 属性描述符显示它是可写的，且名字空间（作为对象）未被冻结 
console.log(Object.getOwnPropertyDescriptor(myNames, 'x').writable); // true 
console.log(Object.isFrozen(myNames)); // false

// 属性名实际上是被映射到它的内部列表
console.log(myNames.x);

// 以下操作将导致异常
try {
  delete myNames.x; // TypeError: Cannot delete property ... 
}
catch (e) {
  let firstLine = s => s.match(/^[^\n]*/)[0];
  console.log(firstLine(e.stack));
}

try {
  // TypeError: Cannot assign to read only property ...
  myNames.x = 2000;
}
catch (e) {
  let firstLine = s => s.match(/^[^\n]*/)[0];
  console.log(firstLine(e.stack));
}

// 尝试使用Object.defineProperty()来更新myNames的属性描述符
let desc = Object.getOwnPropertyDescriptor(myNames, 'x');  

// 示例：无更新，不会触发异常 
Object.defineProperty(myNames, 'x', desc);  

// 示例：更新描述符将触发异常 
desc.value = 'none';
try {
  // TypeError: Cannot assign to read only property 'x' ...
  Object.defineProperty(myNames, 'x', desc);
}
catch (e) {
  let firstLine = s => s.match(/^[^\n]*/)[0];
  console.log(firstLine(e.stack));
}

// 列举完整的名字列表
console.log(Object.keys(myNames)); // 名字空间中的全部导出名字