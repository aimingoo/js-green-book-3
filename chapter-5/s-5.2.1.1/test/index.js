var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Chained assignment 1', ()=> {
    let a, b, c, d; // catcher
    expect(() => {
      a = b = c = d = 100;
    }).not.be.throw();
    expect([a, b, c, d]).to.be.eql([100,100,100,100]);
  });

  it('Chained assignment 2 - other style', ()=> {
    let a, b, c, d; // catcher
    expect(() => {
      a =
      b =
      c =
      d = 100;
    }).not.be.throw();
    expect([a, b, c, d]).to.be.eql([100,100,100,100]);
  });
});