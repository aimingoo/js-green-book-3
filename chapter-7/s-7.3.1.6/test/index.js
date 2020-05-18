var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

// FORCE VERSION CHECK
if (versions('node', '<10.12')) {
  describe = describe.skip;
}

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let AsyncFunction = (async x=>x).constructor;

  fancy.stdout().stderr().
  it('Simple example for for-await', output => {
    // （续"7.3.1.4 异步生成器函数"节中的示例1）

    // 示例（一般的生成器函数）
    function* myGenerator() {
      yield 10;
      yield 20;
    }

    // 示例（异步生成器函数, myAsyncGenerator）
    // （这里没有直接写代码，而是动态加载是为了在低版本的nodejs中运行mocha出现语法错）
    eval(load('../a_async_func.js'));

    //（由“一般的生成器函数”所返回的）生成器对象
    tor = myGenerator();
    expect(Symbol.iterator in tor).to.be.true;

    // 使用for...of语句
    for (const x of tor) console.log(x);
    expect(output.stdout.split("\n")).to.be.eql([
      "10",
      "20",
      ""]);

    // 异步生成器对象不是迭代器
    tor2 = myAsyncGenerator()
    expect(Symbol.iterator in tor2).to.be.false;

    // 使用for await...of语句（只能使用在异步函数中）
    // （这里没有直接写代码，而是动态加载是为了在低版本的nodejs中运行mocha出现语法错）
    eval(load('../for_await_stat.js'));
    return (for_await_stat()).then(()=>{
      expect(output.stdout.split("\n").slice(2)).to.be.eql([
        "10",
        "20",
        ""]);
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let f = new AsyncFunction(load('../1.js'));
    return f().then(()=> {
      expect(output.stdout.split("\n")).to.be.eql([
        "10", "20",  // for promises
        "10", "20",  // for values
        ""]);
    })
  });
});