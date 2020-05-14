var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('About conversion expectations', ()=> {
    // 直接置一个该对象的两个方法（或重置Object.prototype原型上的方法）
    let x = {toString:()=>'10', valueOf: ()=>-1}

    expect(parseInt(x)).to.be.equal(10);

    expect(Math.abs(x)).to.be.equal(1);

    expect(1 + x).to.be.equal(0);

    expect("1" + x).to.be.equal('1-1');

    expect(delete x.valueOf).to.be.true;

    expect(1 + x).to.be.equal('110');
  });
});