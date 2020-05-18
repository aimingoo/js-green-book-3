// （以下来自于示例1）
// 示例（异步生成器函数）
async function* myAsyncGenerator() {
  yield 10;
  yield 20;
}

// （续上例）
var all = [];
var output = ()=>console.log(all);
var tor2 = myAsyncGenerator();
function picker(result) {
  if (result.done) return output(); // completed
  all.push(result.value);
  return tor2.next().then(picker);  // again
}

// 由于异步过程中不能确知'complete'的时间，所以output是在picker中回调触发的
tor2.next().then(picker); // first
