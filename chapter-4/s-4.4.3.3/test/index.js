var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some statements in block', ()=> {
    expect(()=> {
      return Function(`
        var test = function() { };
        100
        yest();`);
    }).not.be.throw();
  });
});