var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1 - `Hello world` base on OOP', output => {
    return Promise.require('../1.js').then(() => {
      expect(output.stdout).to.be.equal("Hello world!\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2 - `Hello world` use pure Promise style', output => {
    return Promise.require('../2.js').then(() => {
      expect(output.stdout).to.be.equal("Hello world!\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3 - Then-chain base on OOP', output => {
    return Promise.require('../3.js').then(() => {
      expect(output.stdout).to.be.equal("100\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4 - Then-chain of pure Promise', output => {
    return Promise.require('../4.js').then(() => {
      expect(output.stdout).to.be.equal("100\n");
    });
  });
});