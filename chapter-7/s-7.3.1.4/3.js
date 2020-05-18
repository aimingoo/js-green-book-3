// （以下来自于示例1）
// 示例（异步生成器函数）
async function* myAsyncGenerator() {
  yield 10;
  yield 20;
}

// （续上例）
var output = all => console.log(all);
var tor2 = myAsyncGenerator();
async function picker2(tor) {
  var all = [], extract = ({value, done}) => !done && all.push(value);
  while (extract(await tor.next()));
  return all;
}

// picker2是异步的，并通过await来等待了全部数据，因此output可在Then链中调用
picker2(tor2).then(output);