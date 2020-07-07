/**
 * （由于main模块不再需要参与协调，因此只需要创建worker线程即可）
 * Main module
**/
const { Worker } = require('worker_threads');

// 4 elements SAB with a lock 
var sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT*4);

// launch threads
for (var i = 1000; i < 1005; i++) {
  let workerData = {seq: i, sab};
  new Worker(__filename.replace(/\.js$/, '_thread$&'), {workerData});
}
