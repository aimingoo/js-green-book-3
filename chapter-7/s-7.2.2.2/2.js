// (参见示例1.js)
x = new Object;

// 例如（在用户代码中类似如下声明）
x.then = function(resolve, reject) {
  resolve(100);
}

// 那么，在下面的示例代码中

// 使用正确声明的thenable objects。如下等效于：
//  - Promise.resolve(x).then(console.log);
p = Promise.resolve(x);
p.then(console.log);  // 100