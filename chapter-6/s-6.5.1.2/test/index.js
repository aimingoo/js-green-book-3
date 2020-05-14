var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A syntax error for constant declaration', ()=> {
    expect(()=>eval(`
      const x;  // 如下代码... 对JavaScript来说是不合语义的
    `)).be.throw(SyntaxError, 'initializer'); // Missing initializer in const declaration ...
  });
});
