var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Single-statement context with lexical declaration', ()=> {
    expect(()=> {
      return Function('while (false) let i = 0;')
    }).be.throw(SyntaxError);
    expect(()=> {
      return Function('for (let x;;) let i = 0;')
    }).be.throw(SyntaxError);
  });

  it('Single-statement context with variant declaration', ()=> {
    expect(()=> {
      return Function('while (false) var i = 0;')
    }).not.be.throw();
  });
});