var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    (0, eval)(load("../1.js")); // in global context
    expect(output.stdout).to.be.equal("NaN\nNaN\nglobal\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
  	expect(()=>require("../2.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "indirect call",
      "indirect call",
      "indirect call",
      "indirect call",
      ""]);
  });

  it.skip('About test.js', ()=> {
    throw "Call run.sh or using `node --use-strict test.js` to launch this case."
  });
});