var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Cases of testMe()', output => {
    function* testMe() {
      var x = yield 10;
      console.log("[GET]", x);
    }

    // 取生成器对象
    let generated, tor = testMe();

    // 在yield 10处从生成器内返回
    expect(generated = tor.next()) // 1st, argument ignored
      .to.be.eql({ value: 10, done: false });

    // 传入数据，推动生成器继续执行直到退出函数
    //  - next()的参数作为testMe()中yield的结果值赋给了变量x
    expect(tor.next("sending data to 'x'...")) // 2nd
      .to.be.eql({ value: undefined, done: true });

    // [GET] sending data to 'x'...
    expect(output.stdout).to.be.match(/^\[GET\]/);
  });
});