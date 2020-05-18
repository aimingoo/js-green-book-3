// 暂存resolve, 以尝试将promise自身作为被代理数据
var dealyResolve;
p = new Promise(function(resolve, reject) {
  delayResolve = resolve;
});
delayResolve(p);  // TypeError: Chaining cycle detected for promise ... 

