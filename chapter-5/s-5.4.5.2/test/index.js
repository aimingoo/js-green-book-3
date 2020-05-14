var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Base case for generator - 1', ()=> {
    // 从生成器函数中取生成器对象（并作为迭代器使用）
    let f = function*(){}
    let tor = f()

    // 有return()的迭代器
    expect('return' in tor).to.be.true;

    // f.prototype是迭代器的原型
    expect(f.prototype.isPrototypeOf(tor)).to.be.true;

    // return()继承自f.prototype的原型
    expect(Object.getPrototypeOf(f.prototype).hasOwnProperty("return")).to.be.true;
  });

  it('Base case for generator - 2', ()=> {
    function *myGenerator() {
      yield 1;
      yield 2;
      yield 3;
      return "Okay";
    }

    // 测试如下
    var tor = myGenerator();

    // 1st
    expect(tor.next()).to.be.eql({ value: 1, done: false });

    // 强制中止并返回指定的值（作为结束状态中的value）
    expect(tor.return('Abort')).to.be.eql({ value: 'Abort', done: true });
  });

  it('Recheck testcase 1 - check syntax only', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });
});