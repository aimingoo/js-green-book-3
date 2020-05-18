var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1 - then branch', output => {
    let x = new Object, p2 = Promise.resolve(x), e = _=>eval(_);
    let f2 = ()=>console.log("Enter finally branch");

    return Promise.require('../1.js', undefined, e).then(value => {
      expect(value).to.be.equal(x);
      expect(output.stdout).to.be.equal("Enter finally branch\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1 - catch branch', output => {
    let x = new Object, p2 = Promise.reject(x), e = _=>eval(_);
    let f2 = ()=>console.log("Enter finally branch");

    return Promise.require('../1.js', undefined, e).catch(reason => {
      expect(reason).to.be.equal(x);
      expect(output.stdout).to.be.equal("Enter finally branch\n");
    });
  });
});