var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A simple case for rewrite arguments', ()=> {
    function f(x=1) {
      x += '';
    }
    expect(f).not.be.throw();
  });
});