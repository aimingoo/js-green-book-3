var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("19\n19\n19\n13\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "1",
      "1e-10",
      "10000000000",
      ""]);
  });

  it('Some cases for parseInt/parseFloat', ()=> {
    // 但有些时候...遇到麻烦, 结果值输出4
    expect(parseInt('4F')).to.be.equal(4);

    // 因为1e35值过大，转换为字符串后仍然是'1e35'，而parseInt()并不转换浮点数
    expect(parseInt(1e35)).to.be.equal(1);

    // 当该数值较小时，结果又可能是正确的（因为1e10转换为字符串'10000000000'）
    expect(parseInt(1e10)).to.be.equal(10000000000);

    // 使用parseFloat()可以正确转换
    expect(parseFloat(1e35)).to.be.equal(1e+35);
  });
});