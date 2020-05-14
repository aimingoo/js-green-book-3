var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcase 1~2', ()=> {
    expect(()=>require('../1.js')).be.throw(ReferenceError);
    expect(()=>require('../2.js')).not.be.throw();
  });

  it('The class identifier already been declared', ()=> {
    expect(()=>require('../3.js')).be.throw(SyntaxError, 'declared');
  });
});
