var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("1 0\n");
  });

  it('Base cases for undefined', ()=> {
    // 显式地得到一个undefined值
    expect(void 0).to.be.undefined;
    // （或）
    expect(void(0)).to.be.undefined;
  });
});