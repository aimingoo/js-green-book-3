// file: main.js

// 兼容浏览器环境
var global = global || Function('return this')();
var module = module || {};
// test
console.log("global:", this === global); // true
console.log("exports:", this === module.exports); // false

