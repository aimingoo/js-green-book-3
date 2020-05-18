// (我们反过来置time1>time2，那么...就不会检测到p的unhandled状态了。)

// 示例2
var time1 = 2000, time2 = 1000;

// 并行地为p调用reject()并置值undefined
p = new Promise(function(resolve, reject) {
  setTimeout(reject, time1);
});

// 并行地调用p.then()
setTimeout(function() {
  p2 = p.then(x=>x);
}, time2);