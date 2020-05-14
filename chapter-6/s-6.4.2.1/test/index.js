var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    // 仅有上面的4个元素参与运算...不同的引擎可能显示会有所不同
    //  - 所以这里只取输出信息的长度作简单测试
    expect(output.stdout.split("\n").length<100).to.be.true;
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2 - using proxy to watch property access', output => {
    console.log = global_console_log; // reset default console.log

    eval(load('../2.js')); // load `proxy` to current context

    // 避免数组太长
    arr.length = 30;

    // 排序
    let lines = output.stdout.split("\n").length;
    proxy.sort();
    lines = output.stdout.split("\n").length - lines;
    expect(lines > 30 && lines<100).to.be.true;

    // for...of迭代
    lines = output.stdout.split("\n").length;
    for (let x of proxy);
    lines = output.stdout.split("\n").length - lines;
    expect(lines).to.be.equal(30*2 + 1 + 1);

    // for...in迭代
    lines = output.stdout.split("\n").length;
    for (let x in proxy);
    lines = output.stdout.split("\n").length - lines;
    expect(lines).to.be.equal(1);
  });
});