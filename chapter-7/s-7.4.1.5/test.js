/**
 * Main module
 * (filename: test.js)
**/
const { Worker } = require('worker_threads');
const queue = new Array;

// （函数coordination参见后文）
process.on('release', coordination);

// （该函数应放入main.js模块中）
function coordination(worker) {
  console.log(`[${worker&&worker.threadId||'-'}] coordination`);
  if (worker = queue.shift()) {
    return worker.postMessage('activate');
  }
  setTimeout(coordination, 1000);
}

process.on('require', worker => {
  console.log(`[${worker.threadId}] require`);
  queue.push(worker);
});

for (var i = 1000; i < 1005; i++) {
  let workerData = {seq: i};
  let threadModule = __filename.replace(/\.js$/, '_thread$&');
  let worker = new Worker(threadModule, {workerData});
  worker.on('message', message => process.emit(message, worker));
}

// trun on coordinator
coordination();