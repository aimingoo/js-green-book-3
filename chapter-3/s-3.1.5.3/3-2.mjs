// 示例 - 模块B
import {obj} from './3-1.mjs'; // 'module_a';

var s = Symbol.for('symbolPropName');
console.log(obj[s]);  // <- 显示值：100
console.log(Symbol.keyFor(s)); // <- 显示符号s注册的名字是：'symbolPropName'

