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

// 向main申请和释放执行权
var req = ()=> parentPort.postMessage('require');
var free = ()=> parentPort.postMessage('release');

// 当得到执行权时，当前线程的任务是执行action1~2
var exec = () => {
  let ms = sleep.tick;
  let action1 = ()=>sleep(ms); // 执行动作`sleep`
  let action2 = ()=>{ // 执行动作`log`
    console.log(`[${threadId}] ${workerData.seq} -> exec ${ms}ms`);
  };
	return action1().then(action2);
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