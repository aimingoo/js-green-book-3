var expect = require('chai').expect;
var {resolved: chapter} = require('chapter');

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  it('Recheck testcase 1 - syntax check only', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });
});