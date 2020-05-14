var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require("../1.js")).not.be.throw();
    expect(output.stdout).to.be.equal('0\nnull\nfalse\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require("../2.js")).be.throw(TypeError, 'primitive');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require("../3.js")).be.throw(TypeError, 'primitive');
  });

  fancy.stdout().stderr().
  it('More cases...', output => {
    // 返回null值，但并不被视为对象
    var x = new Object;
    x.valueOf = x.toString = ()=> null;
    // 被转换为0
    console.log(+x);

    expect(output.stdout).to.be.equal('0\n');
  });
});