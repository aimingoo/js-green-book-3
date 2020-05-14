var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).be.throw(SyntaxError);
  });

  it('Recheck testcase 3', ()=> {
    expect(()=>require('../3.js')).not.be.throw();
  });

  it('Check aFunction.length property', ()=> {
    expect((function(a, [b, c]) {}).length).to.be.equal(2);
  });
});