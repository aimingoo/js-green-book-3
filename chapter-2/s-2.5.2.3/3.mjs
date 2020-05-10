// 1. 导入名字空间(使用myNames.x) 
import * as myNames from "./2.mjs"; // "module-name";  

// 2. 导入名字(使用导入名x) 
import {x} from "./2.mjs"; // "module-name"; 

// 3. "名字空间+本地变量声明"(使用本地名字x2) 
var {x: x2} = myNames;  

// 测试
console.log(x, x2, myNames.x); // good good good

