"use strict";

var obj = { x: 100 };

// 禁例2.4：写只读属性（包括getter-only properties）
Object.defineProperty(obj, 'x', { writable: false});
obj.x = 200;

