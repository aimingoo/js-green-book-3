var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some cases for boolean value', ()=> {
    var i = false;

    // 等义于0+1
    expect(++i).to.be.equal(1); // 1

    // 等义于 i += 1
    i = false // 重置
    expect(i += true).to.be.equal(1); // 1

    // 等义于0 + 1
    expect(true + false).to.be.equal(1); // 1
  });
});