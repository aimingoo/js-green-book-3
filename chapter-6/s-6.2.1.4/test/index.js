var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require("../1.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "number",
      "value:100,  type:object",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require("../2.js")).not.be.throw();
    expect(output.stdout).to.be.equal("abc\nabc\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require("../3.js")).not.be.throw();
    expect(output.stdout).to.be.equal("abcde\n");
  });
});