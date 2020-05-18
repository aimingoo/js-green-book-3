p = new Promise(function(resolve, reject) {
  if (!ok) throw new Error(); // 创建异常并抛出，相当于reject(new Error)
  resolve(x);
});
