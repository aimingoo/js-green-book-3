var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("false\n"); // 显示false, 表明产生了两个函数实例
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("false\n"); // 显示false, 表明产生了多个函数实例
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "false",    // 显示false, 表明是不同的函数实例
      "changed", "changed",  // 方法m1()与m2()输出相同的值
      ""]);
  });

  // 下面将输出不同的值(case4~7)
  let expect_result = ["clicked", "changed", ""];

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql(expect_result);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "false", // 显示false, 表明是不同的函数实例
      ...expect_result]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6', output => {
    expect(()=>require('../6.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql(expect_result);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 7', output => {
    expect(()=>require('../7.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql(expect_result);
  });
});