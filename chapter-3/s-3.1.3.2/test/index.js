var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\n')
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('false\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\n')
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\ntrue\ntrue\n')
  });
});