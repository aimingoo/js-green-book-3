// 导入名字空间 
import * as myNames from "./2.mjs"; // "module-name";  

console.log(myNames.x); // 'good' 
console.log('x' in myNames); // true 
console.log('toString' in myNames); // false 
console.log(Object.getPrototypeOf(myNames)); // null

