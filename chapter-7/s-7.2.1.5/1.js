p = new Promise(function executor(resolve, reject) {
  try {
    // ..
    resolve(x);
  }
  catch(e) {
    reject(e)
  }
});
