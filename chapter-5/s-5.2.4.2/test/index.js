var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Expression evaluation vs. function call', ()=> {
    let [v1, v2, v3, v4] = [13, 15, 2, 200]; // any values
    // 表达式一
    let a = v1 + v2 * v3 - v4;

    // 示例１：表达式一等效于如下带匿名函数的表达式
    expect(v1 + (function() {
      return v2 * v3 - v4;
    })()).to.be.equal(a);

    // 示例２：等效于如下表达式
    expect(v1 + (
      v2 * v3 - v4
    )).to.be.equal(a);

    // 示例3：使用具名函数的例子
    function calc() {
      return v2 * v3 - v4;
    }
    expect(v1 + calc()).to.be.equal(a);
  });
});
