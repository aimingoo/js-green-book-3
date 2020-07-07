// @see case2~3 in chapter `7.3.1.4`
async function* myAsyncGenerator() {
  yield 10;
  yield 20;
}

var output = all => console.log(all);
var tor2 = myAsyncGenerator();
// @see picker2() in case3 in `7.3.1.4`
async function picker3(tor) {
  var all = [];
  for await (x of tor) all.push(x);
  return all;
}

picker3(tor2).then(output);