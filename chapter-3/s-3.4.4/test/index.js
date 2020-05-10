var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  it('To access global.Object', ()=> {
    var global = (new Function('return this'))();
    // 下面两行代码在语义和执行效果上是一致的
    expect(new Object()).to.be.eql(new global.Object());
  });
});