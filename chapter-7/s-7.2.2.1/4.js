// 得到一个resolved promise
p = Promise.resolve('Ok');

// 尝试reject它，并catch其结果（也可以是在一个Then链的末端来catch）
Promise.reject(p).catch(x => {
  console.log('[REASON] is', typeof x);
  console.log('[REASON] is a promise:', x instanceof Promise);
});