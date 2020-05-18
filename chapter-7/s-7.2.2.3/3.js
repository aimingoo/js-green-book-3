// 例2：在onFulfilled中reject的promise
// （与处理直接throw的异常是类似的）
function doFulfilledAction2() {
  return Promise.reject('rejected promise!');
}

Promise.resolve()
  .then(doFulfilledAction2)
  .catch(console.log); // 'rejected promise!'