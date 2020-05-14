var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some cases for `undefined`', ()=> {
    // 转换为数字值
    expect(+undefined).to.be.NaN; // NaN

    // 与数字值的运算
    expect(10 + undefined).to.be.NaN; // NaN

    // 转换为字符串
    expect(undefined + "").to.be.equal('undefined'); // 'undefined'

    // 转换为布尔值
    expect(!!undefined).to.be.false; // false
  });
});