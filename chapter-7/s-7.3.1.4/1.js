// 示例1

// 示例（一般的生成器函数）
function* myGenerator() {
  yield 10;
  yield 20;
}
tor = myGenerator();

// 示例（异步生成器函数）
async function* myAsyncGenerator() {
  yield 10;
  yield 20;
}
tor2 = myAsyncGenerator();

// （续上例）

// 示例（生成器函数）
console.log(tor.next().value); // first, 10

// 示例（异步生成器函数）
p = tor2.next();
p.then(result => {
  console.log(result.value);
});
