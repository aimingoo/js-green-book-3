// 伪代码（1）。对于示例代码：
//   promise2 = p.then(resolved, rejected);
// 来说，对象promise2将发生如下的置值逻辑：
try {
  // the <result> proxy by <p>
  if (isRejected(p)) {
    x2 = rejected(result); // call onRejected, <result> as reason
  }
  else {
    x2 = resolved(result); // call onFulfilled, <result> as value
  }
  resolve(x2); // for promise2
}
catch(e2) {
  reject(e2);  // for promise2
}