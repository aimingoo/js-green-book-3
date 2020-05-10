var str = 'hello';
var obj = {};
x = str || obj;
y = str && obj;

// 用于语句
if (str || obj) {
  console.log('Okay');
}

// 用于复杂的布尔表达式
z = !str && !(str || obj);
console.log(typeof z, z); // boolean false
