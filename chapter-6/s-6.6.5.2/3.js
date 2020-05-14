// pull 'cycle.js' from https://github.com/douglascrockford/JSON-js

// Node.js语法：载入cycle.js
require('./cycle.js');

// 构造循环结构
var obj = {};
obj.x = obj;

// 序列化的字符串中将用{"$ref": ...}来占位，其属性是被循环引用对象的路径
console.log(JSON.stringify(JSON.decycle(obj))); // '{"x":{"$ref":"$"}}'

// 直接反序列化：其结果是包含“指定格式的文本”的、需要进一步处理的对象
var jsonText = JSON.stringify(JSON.decycle(obj));
console.log(JSON.parse(jsonText)); // {"x":{"$ref":"$"}}

// 最终处理：使用“指定格式的文本”替换为被循环引用的成员节点
console.log(JSON.retrocycle(JSON.parse(jsonText))); // { x: [Circular] }
