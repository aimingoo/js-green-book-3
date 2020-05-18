// 得到一个promise对象
p = Promise.resolve(10);

// 将10*x理解为一个“数据就绪”的中间步骤
p.then(x=>10*x).then(console.log);