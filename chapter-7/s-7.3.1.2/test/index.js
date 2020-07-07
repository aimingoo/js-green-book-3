var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.match(/read property/);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(() => {
      expect(output.stdout.split("\n")[0])
        .to.be.match(/^TypeError: .* read property/);
    });
  });
});
