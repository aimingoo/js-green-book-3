var x = function() {}
var y = function foo() {}

// 测试1
console.log(x.name, y.name);  // "x", "foo"

// 测试2
delete x.name;
Object.defineProperty(y, 'name', {value: 'y'});
console.log(x.name); // ""
console.log(y.name); // "y"

