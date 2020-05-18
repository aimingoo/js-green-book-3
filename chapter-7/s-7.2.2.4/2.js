// 示例2
var time1 = 1000, time2 = 5000;

// 并行地为p调用reject()并置值undefined
p = new Promise(function(resolve, reject) {
  setTimeout(reject, time1);
});

// 并行地调用p.then()
setTimeout(function() {
  p2 = p.then(x=>x);
}, time2);