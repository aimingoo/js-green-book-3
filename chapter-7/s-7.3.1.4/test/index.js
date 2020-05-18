var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

// FORCE VERSION CHECK
if (versions('node', '<10.12')) {
  describe = describe.skip;
}

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js').then(() => {
      expect(output.stdout.split("\n")).to.be.eql([
        "10", // tor.next().value
        "10", // tor2.next() and result from p
        ""]);
    });
  });

  // expect case 2~3
  let expect_result = [10, 20].join(",")+"\n"; // console.log(all)

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(() => {
      expect(output.stdout).to.be.equal(expect_result);
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    return Promise.require('../3.js').then(() => {
      expect(output.stdout).to.be.equal(expect_result);
    });
  });
});