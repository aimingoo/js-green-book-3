var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

// FORCE VERSION CHECK
if (versions('node', '<10.12')) {
  describe = describe.skip;
}

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  // set timeout to 12s
  this.timeout(12000);

  it('Recheck testcase 1', ()=> {
    let x = Promise.resolve(new Object), e = _=>eval(_);
    Promise.require('../1.js', ['x', 'p1', 'p2', 'p3', 'p4'], e)
      .then(([x, ...results]) => {
        let all = new Set(results);
        expect(all.size).to.be.equal(1); // all.size === 1
        expect(...all).to.be.equal(x); // result is 'value of x' of p1~p4
      });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(() => {
      expect(output.stdout).to.be.equal("10s\ntrue\n");
    });
  });

  it('Recheck testcase 3', ()=> {
    return Promise.require('../3.js', ['p', 'x', 'x2', 'x3'])
      .then(results => new Set(results))
      .then(all => {
        expect(all.size).to.be.equal(1); // all.size === 1
        expect(...all).to.be.equal("native promise"); // the value from p
      });
  });
});
