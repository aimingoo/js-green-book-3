var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
  	(0, eval)(load("../1.js")); // in global context
    expect(output.stdout.split("\n")).to.be.eql([
      "100",
      "100",
      "global",
      "global",
      "200",
      "eval",
      "with",
      ""]);
  });
});