// 示例：在Node.js的main.js文件中向global添加变量名

// 间接调用的eval
 (0, eval)('var x = 100');

// 该代码总是返回有效的global
global = Function('return this')();

// 测试
console.log(Object.getOwnPropertyDescriptor(global, 'x').value); // 100

