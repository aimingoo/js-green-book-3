"use strict";

var obj = Object.defineProperty(new Object, 'x', {value:100});

// 禁例2.3：删除某些不能删除的系统属性、标识符，或configurable性质为false的属性
delete eval; // SyntaxError

// More cases
delete undefined; // SyntaxError
obj.x = 200; // TypeError
delete obj.x; // TypeError
delete obj.y; // Nothing
