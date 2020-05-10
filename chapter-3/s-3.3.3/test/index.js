var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('function\ntrue\n');
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\ntrue\n');
  });

  it('Recheck testcase 5', ()=> {
    expect(()=>require('../5.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6', output => {
    expect(()=>require('../6.js')).not.be.throw();
    expect(output.stdout).to.be
    	.equal(["-> MyObject", "-> MyObjectEx", ""].join("\n"));
  });
});