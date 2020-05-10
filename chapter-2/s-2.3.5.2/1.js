// 展开数组[3, 2]作为参数y,z传入
var foo = (x,y,z)=>x+Math.pow(y, z)
console.log(foo(100, ...[3, 2])); // 109

// 在一个数组中展开arr
var arr = [100,200]
console.log(['a','b','c',...arr, 'd']); // [ "a", "b", "c", 100, 200, "d" ]

// 在一个对象中展开obj
var obj = {name: 'obj', value: 1}
console.log({message: 'spread', ...obj}); // { message: 'spread', name: 'obj', value: 1 }
