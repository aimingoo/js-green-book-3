"use strict";

var obj = { x: 100 };

// 禁例2.2：当对象是不可删除属性的(isSealed或isFrozen为真)，尝试删除属性
Object.seal(obj);
delete obj.x;

