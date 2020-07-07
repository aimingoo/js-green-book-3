/**
 * Main module
 * (filename: test.js)
**/
const { Worker } = require('worker_threads');
const queue = new Array;

// （函数coordination参见后文）
process.on('release', coordination);

var working = new Object;
function coordination(e) {
  var current = e && e.worker && e.worker.threadId;
  console.log(`[${current||'-'}] coordination`);

  // 1. release reader when `current` in working
  if (current) {
    if (current in working) {
      delete working[current]; // release reader
    }
    else if (Object.keys(working).length > 0) { // is reading
      throw new Error('Reading with invalid thread release: ' + current);
    }
  }

  // 2. scan queue, activate `write` when not reading
  var newer = new Array;
  while (e = queue.shift()) {
    let worker = e.worker;
    if (e.method == 'w') {
      if (Object.keys(working).length <= 0) { // not reading
        return worker.postMessage('activate'); // single write
      }
      queue.unshift(e);
      break;
    }
    newer.push(worker); // is 'r'
    working[worker.threadId] = worker;
  }

  // 3. continue `read` or timeout
  //   - maybe read more when reading
  if (Object.keys(working).length > 0) { 
    if (newer.length) { // multi read
      newer.forEach(worker => worker.postMessage('activate'));
    }
  }
  else {
    setTimeout(coordination, 1000);
  }
}

process.on('require', e => {
  console.log(`[${e.worker.threadId}] require ${e.method}`);
  queue.push(e);
});


// 使用字节长度创建buffer
var sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT*4);
for (var i = 1000; i < 1005; i++) {
  let workerData = {seq: i, sab};
  let threadModule = __filename.replace(/\.js$/, '_thread$&');
  let worker = new Worker(threadModule, {workerData});
  worker.on('message', e => process.emit(e.message, {...e, worker}));
}


// trun on coordinator
coordination();
