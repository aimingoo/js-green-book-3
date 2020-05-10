var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let catcher;
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect((catcher=output.stdout).split('\n')).to.be.eql([
      'isExtensible,true,isSealed,false,isFrozen,false',
      'isExtensible,false,isSealed,true,isFrozen,true',
      '']);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2 - check replaced methods', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal(catcher);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100\n100\n200\n200\n200\n300\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100\n100\n200\n200\n300\n');
  });
});