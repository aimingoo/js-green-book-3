"use strict";

var obj = { x: 100 };

// 禁例2.3：删除某些不能删除的系统属性、标识符，或configurable性质为false的属性
delete Function.prototype;

