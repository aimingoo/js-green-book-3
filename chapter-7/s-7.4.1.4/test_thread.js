/**
 * Thread module
 * (filename: test_thread.js)
**/
const { parentPort, workerData } = require('worker_threads');

// hello
parentPort.postMessage('hello from ' + workerData.seq);
