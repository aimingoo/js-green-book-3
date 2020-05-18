// 例1：.then()方法中无法通过onRejected处理onFulfilled句柄中的异常
function doFulfilledAction() {
  throw new Error('rejected!');
}

function doRejected() {
  console.log('rejected!');
}

var x = Promise.resolve();
x.then(doFulfilledAction, doRejected);
