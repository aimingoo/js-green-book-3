/**
 * Main module
 * (filename: test.js)
**/
const { Worker } = require('worker_threads');

for (var i = 1000; i < 1005; i++) {
  let workerData = {seq: i};
  let threadModule = __filename.replace(/\.js$/, '_thread$&');
  let worker = new Worker(threadModule, {workerData});
  worker.on('message', message => console.log(message));
}