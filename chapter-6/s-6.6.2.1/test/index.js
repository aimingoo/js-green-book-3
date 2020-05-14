var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "1000", // 测试1
      "b", "1000", // 测试2
      "false", "1000", // 测试3
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1 - global', output => {
  	(0, eval)(load("../1.js")); // in global context
    expect(output.stdout.split("\n")).to.be.eql([
      "1000", // 测试1
      "b", "1000", // 测试2
      "false", "1000", // 测试3
      ""]);
  });
});