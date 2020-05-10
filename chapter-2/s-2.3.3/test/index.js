var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Check syntax for constant value assignment', () => {
    let result;
    expect(() => {
      return result = typeof Function("100=1000");
    }).be.not.throw(SyntaxError); // is ReferenceError
    expect(result).to.be.oneOf(["function", undefined]);
  });
});
