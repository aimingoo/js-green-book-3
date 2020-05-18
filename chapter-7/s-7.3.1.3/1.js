// await处理rejected promise的方式
var x = Promise.reject('error of promise');
async function foo() {
  try {
    var v = await x;
  }
  catch(e) {
     console.log(typeof e, e);  // "string", "error of promise"
  }
  return 'Done.'
}

// 由于try...catch捕获并处理了异常，因此这里将得到resolved promise
foo().then(console.log);