var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

// FORCE VERSION CHECK
if (versions('node', '<10.12')) {
  describe = describe.skip;
}

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  // set timeout to 12s for mochi
  this.timeout(12000);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js', 'values')
      .then(values=>Promise.all(values)) // a promise array will required
      .then(() => {
        expect(output.stdout.split("\n")).to.be.eql([
        "yield 1st",
        "yield 2nd",
        "value 1 delay 10s",
        "value 2 now",
        ""]);
    });
  });
});