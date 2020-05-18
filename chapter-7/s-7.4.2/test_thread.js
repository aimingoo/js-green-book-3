/**
 * test_thread.js
 */
const { threadId, parentPort, workerData } = require('worker_threads');

// 等待以及产生随机的等待时间
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
Object.defineProperty(sleep, 'tick', {
  get() { return Math.round(Math.random()*3*1000) }
});

// 该传入的共享存储sab可作为有4个元素的Int32Array使用，下标0..3可访问
var method, buff = new Int32Array(workerData.sab), port = parentPort;
var read = ()=> port.postMessage({message: 'require', method: method='r'});
var write = ()=> port.postMessage({message: 'require', method: method='w'});
var req = ()=> {
  return Math.floor(Math.random()*100)>=10 ? read() : write();
}
var free = ()=> parentPort.postMessage({message: 'release'});

// the execute action is r/w
async function exec() {
  if (method=='w') buff[0] = Math.round(Math.random()*2000*3000);
  console.log(`[${threadId}] ${workerData.seq} -> ${method} ${buff[0]}`);
}

// 响应从main线程发出的'activate'消息
var next = ()=> sleep(sleep.tick).then(req);
parentPort.on('message', message => {
  if (message === 'activate') {
    exec().finally(free).then(next).catch(console.log);
  }
});

// OR
// - setTimeout(req, 0)
next();