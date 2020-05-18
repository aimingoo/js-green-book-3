// （参见上例）

function doFulfilledAction() {
  throw new Error('rejected!');
}

function doRejected() {
  console.log('rejected!');
}

// - x.then(doFulfilledAction).catch(doRejected);

Promise.resolve()
  .then(doFulfilledAction)
  .catch(doRejected); // 'rejected!'