// 尝试resolve自身
var dealyResolve;
p = new Promise(function(resolve, reject) {
  delayResolve = resolve;
});

// 将resolve()暂存以完成上述示例
var delayResolve2;
p2 = new Promise(function(resolve, reject) {
  delayResolve2 = resolve;
});

// 循环引用
delayResolve(p2);
delayResolve2(p); 
