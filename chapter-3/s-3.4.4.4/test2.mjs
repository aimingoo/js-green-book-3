import * as xxx from './MyObject.mjs'; // 'module-name';

console.log(Object.getOwnPropertySymbols(xxx)); // 显示 Symbol.toStringTag
console.log(Object.prototype.toString.call(xxx));  // 显示 [object Module]

