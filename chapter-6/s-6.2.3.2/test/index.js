var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "string value: 2",
      "number value: 2",
      "boolean value: true",
      ""]);
  });

  fancy.stdout().stderr().
  it('More cases ...', output => {
    // 一些常见的转换特例
    var xx = [false, new Boolean(false), new Object, 0, 1, +0, -0];

    // 转换结果（注意xx[1]的结果，是典型的“将Boolean对象作为对象”的转换，所以总是true值）
    xx.forEach(x=>console.log(x+"\t-> "+Boolean(x)));

    // 检测输出
    expect(output.stdout.split("\n")).to.be.eql([
      "false\t-> false",
      "false\t-> true",
      "[object Object]\t-> true",
      "0\t-> false",
      "1\t-> true",
      "0\t-> false",
      "0\t-> false",
      ""]);
  });
});