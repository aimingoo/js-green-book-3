var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    // for case-1 only
    (0, eval)(`var value = 'this is global.';`);
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("this is global.\n");
  });

  // 缺省显示格式, String(aFunc), etc.
  let expect_result_1 = [
    "function aFunc() {",
    "  //...",
    "  //...",
    "  //...",
    "}"];

  // String(aFunc)的定制显示格式, `aFunc.toString()` rewrited.
  let expect_result_2 = [
    "function aFunc()",
    "{",
    "  [custom function]",
    "}"];

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n").slice(0, 5))
      .to.be.eql(expect_result_1);
    expect(output.stdout.split("\n").slice(5, 9))
      .to.be.eql(expect_result_2);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n"))
      .to.be.eql([...expect_result_2, ""]);
  });
});