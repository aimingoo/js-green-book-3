var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js').then(()=> {
      expect(output.stdout.split("\n")).to.be.eql([
        "false", // direct output first
        "in thenable object..",
        ""]);
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(()=> {
      expect(output.stdout).to.be.equal("100\n");
    });
  });
});