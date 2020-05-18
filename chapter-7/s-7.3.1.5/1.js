// sleep <n> ms, and resolve <value >
function sleep(tag, n, value) {
  console.log(tag);
  return new Promise(resolve => setTimeout(()=>resolve(value), n));
}

async function* myAsyncGenerator() {
  yield sleep("yield 1st", 10000, 'value 1 delay 10s');
  yield sleep("yield 2nd", 1000, 'value 2 now');
}

// 示例：在异步的过程中输出生成器所产生的值
var tor = myAsyncGenerator();
var output = ({value,done}) => console.log(value);

// 产生两个异步生成器对象（它们是promise对象，且有序产生）
var values = [tor.next(), tor.next()]; // yield once and wait timeout

// 输出异步生成器对象的最终就绪的值（注意等10s以观察结果）
values.forEach(p => p.then(output)); // print on Then-chain