var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js').then(() => {
      expect(output.stdout.split("\n")).to.be.eql([
        ["string", "error of promise"].join(' '),
        "Done.",
        ""]);
    });
  });
});