var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcases', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
    expect(()=>require('../2.js')).not.be.throw();
    expect(()=>require('../3.js')).not.be.throw();
  });
});