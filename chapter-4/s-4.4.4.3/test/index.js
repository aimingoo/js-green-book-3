var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some statements has undefined value by default', ()=> {
    // 试问如下语句的可能值
    expect(eval('if (false); else;')).to.be.undefined; // and
    expect(eval('5;if (false); else;')).to.be.undefined; // undefined by default

    // vs.
    expect(eval('function f() {}')).to.be.undefined;  // but
    expect(eval('5;function f() {}')).to.be.equal(5); // is `empty` and ignore
  });

  it('More cases...', ()=> {
    // 空的case的结果无值，但整个switch返回undefined
    expect(eval('1; switch (true) { case false: }')).to.be.undefined;

    // break子句（以及循环语句中的continue子句）是不决定最终返回的
    expect(eval('1; switch (true) { case true: 2; break; }')).to.be.equal(2);
  });
});