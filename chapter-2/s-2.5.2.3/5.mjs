// 导入名字空间
import * as myNames from "./2.mjs"; // "module-name"; 

// 使用本地名字
var {x: x2} = myNames;

// 测试
console.log(x2); // good
x2 = 100;
console.log(x2); // 100

// 变量xyz的初值将置为undefined
var { xyz } = myNames;
console.log(typeof xyz); // undefined
