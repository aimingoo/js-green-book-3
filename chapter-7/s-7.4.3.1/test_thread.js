/**
 * （而Worker模块也不再使用parentPort来通信）
 * test_thread.js
 */
const { threadId, workerData } = require('worker_threads');
const Locker = require('./Locker.js'); 


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
Object.defineProperty(sleep, 'tick', {
  get() { return Math.round(Math.random()*1*1000) }
});

// 在req/free中使用锁，而非向main线程发消息
const locker = new Locker(workerData.sab, 0);
var req = ()=> locker.lock();
var free = ()=> locker.unlock();

// 将sab中锁之外的其他elements作为buff
var buff = new Int32Array(workerData.sab, Int32Array.BYTES_PER_ELEMENT*1);

// 当通过req得到执行权时，操作buff
async function exec() {
  if (Math.floor(Math.random()*100)<10) // method is 'w'
    buff[0] = Math.round(Math.random()*2000*3000);
  console.log(`[${threadId}] ${workerData.seq} -> ${buff[0]}`);
}

// 直接由当前工作线程调用和处理req/free，以及在unlock时activate自身
var next = ()=> sleep(sleep.tick).then(req).then(activate);
function activate() {
  exec().finally(free).then(next).catch(console.log);
}

next();