var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A simple case', ()=> {
    expect(+[]).to.be.equal(0);
  });
});