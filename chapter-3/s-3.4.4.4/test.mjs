/******************************
 * 示例 - test.mjs
*******************************/

import ProxyObject from './MyObjectProxy.mjs'
import MyObject from './MyObject.mjs'

var p = new ProxyObject;
console.log(p.value);

var obj = new Object;
console.log(obj.value);

