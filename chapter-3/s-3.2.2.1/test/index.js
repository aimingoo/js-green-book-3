var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Invalid outer prototype-chain', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\ntrue\n");
  });

  fancy.stdout().stderr().
  it('Fix outer prototype-chain', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\ntrue\n");
  });

  it('Other patten', () => {
    expect(()=>require('../3.js')).not.be.throw();
  });
});
