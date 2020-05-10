var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A case for `with` statement', ()=> {
    // ...任何可以使用单个语句的位置都可以使用这两个语句而不会带来意外
    expect(()=> {
      // 在if的分支中直接使用with语句
      var obj = null;
      if (obj) with (obj) console.log(obj.toString());
    }).not.be.throw();
  });
});