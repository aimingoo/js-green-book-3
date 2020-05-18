// 例1：创建p2与p相同
var x = new Object, p = Promise.resolve(x), p2 = Promise.resolve(p);

// p与p2是相同的promise instance
console.log(p === p2); // true
// resolve的值是同一个
p2.then(value => console.log(value === x)); // true