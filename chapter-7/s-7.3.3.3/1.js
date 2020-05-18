AsyncFuncton = (async x=>x).constructor;

foo = new AsyncFuncton('x,y,p', 'return x + y + await p');

// 调用该异步函数
foo(1, 2, Promise.resolve(3))
  .then(console.log);  // 6
