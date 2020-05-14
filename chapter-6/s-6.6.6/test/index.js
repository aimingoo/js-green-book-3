var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "value is: 100",
      "value is: 10",
      ""]);
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
  });
});