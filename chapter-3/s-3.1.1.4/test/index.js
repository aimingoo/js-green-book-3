var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Check RegExp features', ()=> {
    let s1 = 'abcd1234cdef.............1234........1234....';
    let s2 = 'abcd182349cdef.............182349........182349....';

    // 这样就可以匹配上面列举的两个字符串
    let rx = /\D+(\d+)\D+\1\D+\1\D+/
    expect(rx.test(s1) && rx.test(s2)).to.be.true;
    // 而不匹配下面这种
    let s3 = 'abcd1234cdef.............1111........11111111....';
    expect(rx.test(s3)).to.be.false;

    // 这两个正则表达式...与开发人员的预期不一致
    rx = /abcd\n\r/gi;
    expect(new RegExp('abcd\n\r', 'gi')).not.have.property('source', rx.source);
    // 解决该问题的方法是为字符串中的'\'增加转义
    expect(new RegExp('abcd\\n\\r', 'gi')).have.property('source', rx.source);
  });
});