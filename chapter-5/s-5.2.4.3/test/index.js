var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Deep thinking: A expression equ. function', ()=> {
    let bTrue = true, v = 7;

    // 示例３：使用表达式的JavaScript代码
    expect(bTrue ? 3+4 : 3*4).to.be.equal(v);

    // 示例４：使用函数来削减掉一次传参数
    let f_add = (x, y) => x + y;
    let f_mul = (x, y) => x * y;
    expect((bTrue ? f_add : f_mul)(3, 4)).to.be.equal(v);

    let op = {"+": f_add, "*": f_mul};
    // 示例5
    expect((bTrue ? op["+"] : op["*"])(3, 4)).to.be.equal(v);
  });
});