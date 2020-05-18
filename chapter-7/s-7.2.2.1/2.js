// 例2：试图由不同的Promise来创建p2
class PromiseEx extends Promise {}
var x = new Object, p = PromiseEx.resolve(x), p2 = Promise.resolve(p);

// p与p2是不同的promise instance，但resolve的值仍然是同一个
console.log(p === p2); // false
p2.then(value => console.log(value === x)); // true