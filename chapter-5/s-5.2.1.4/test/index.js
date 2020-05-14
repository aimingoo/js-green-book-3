var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A base example for comma operator', ()=> {
    // The template literal include expression only
    expect(`${1,2,3}`).to.be.equal('3');
  });

  it('Testcase for tryIt()', ()=> {
    // 例：使用','运算符
    function tryIt() {
      return Object.setPrototypeOf(this.prototype, null), this;
    }
    // test
    let x = new Function; // catcher, x must be 'function'.
    expect(tryIt.call(x)).to.be.equal(x);
    expect(Object.getPrototypeOf(x.prototype)).to.be.null;
  });
});