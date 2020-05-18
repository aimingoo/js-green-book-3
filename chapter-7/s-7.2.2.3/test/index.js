var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js')
      .catch(e => {
        expect(output.stdout).to.be.empty; // no output, and
        expect(e.message).to.be.equal("rejected!"); // exception from doFulfilledAction
      });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(()=> {
      expect(output.stdout).to.be.equal("rejected!\n"); // output from doRejected
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    return Promise.require('../3.js').then(()=> {
      expect(output.stdout).to.be.equal("rejected promise!\n"); // exception from doFulfilledAction2
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', function(output) {
    if (versions('node', '<10')) return this.skip(); // FORCE VERSION CHECK
    return Promise.require('../4.js').then(()=> {
      expect(output.stdout.split("\n")).to.be.eql([
        "undefined",
        "value saved:  true",
        ""]);
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', function(output) {
    if (versions('node', '<10')) return this.skip(); // FORCE VERSION CHECK
    return Promise.require('../5.js').then(()=> {
      expect(output.stdout.split("\n")).to.be.eql([
        "value overrided: rejected, and reason is <finally rewrite>",
        ""]);
    });
  });
});
