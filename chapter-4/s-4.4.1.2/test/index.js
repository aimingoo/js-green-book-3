var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Function declare in expressions', ()=> {
    // 函数“单值”存在自己的分块，并不影响其所在的表达式语句
    expect(()=> {
      return 1 + (function x() {
        // ...
      }) + x
    }).be.throw(ReferenceError, 'x is not defined');
  });
});