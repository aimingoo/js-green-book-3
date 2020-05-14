// 示例：箭头函数的eval将检测其外层的函数

// 箭头函数f1()的外层是全局
var f1 = ()=>eval('let x = new.target');