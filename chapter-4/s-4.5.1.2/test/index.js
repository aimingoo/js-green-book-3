var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    require('../1.js');
    expect(output.stdout).to.be.equal('undefined\n');
  });

  it('Try lexical declaration in single-statement', ()=> {
    expect(()=> {
      return Function('if (false) let x = 100;');
    }).be.throw(SyntaxError);
  });

  it('A simple case of structured exception syntax', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
    expect(()=> {
      return Function(`
        // 代码2：导致语法分析错
        try
          i += 2;       // <-- 错误1：试图替换为单行语句
        catch (e) ;     // <-- 错误2: 试图替换为空语句
      `);
    }).be.throw(SyntaxError);
  });

  it('A simple case of `switch` statement syntax', ()=> {
    expect(()=>require('../3.js')).not.be.throw();
    expect(()=> {
      return Function(`
        // 以下导致语法错误：不可以省略大括号（它是语法元素）
        switch (true) ;
      `);
    }).be.throw(SyntaxError);
  });
});