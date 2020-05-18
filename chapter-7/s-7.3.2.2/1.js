let x = Promise.resolve(new Object);

// 用户代码实质上是在...向promise对象的内部槽中填写值x
p1 = new Promise(function(resolve, reject) {
  resolve(x);
});

// 当x是promise对象时，语义如下代码所示
//  - p = Promise.resolve(x);
p2 = new Promise(function(resolve, reject) {
  x.then(resolve, reject);
})

// 换而言之，它也就等义于:
p3 = (async function() {
  return await x;
})();

// OR
let resolved = async x => await x;
p4 = resolved(x);
