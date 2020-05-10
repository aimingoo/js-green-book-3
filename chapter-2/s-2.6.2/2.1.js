"use strict";

var obj = { x: 100 };

// 禁例2.1：当对象是不可扩展的（isExtensible为真），向不存在的属性赋值
Object.preventExtensions(obj);
obj.y = 100;
