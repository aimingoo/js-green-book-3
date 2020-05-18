// 得到一个promise对象
p = Promise.resolve(10);

// 用传统OOP的方式来理解Then链
p.then(function(value) {
  console.log(value * 10); // 100
});