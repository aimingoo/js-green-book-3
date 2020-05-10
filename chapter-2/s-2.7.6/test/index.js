var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The syntax for `[]`, all testcases recheck - 1', output => {
    expect(() => require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('object 1 undefined\nobject 2 |C,5,6,7\n');
  });

  fancy.stdout().stderr().
  it('The syntax for `[]`, all testcases recheck - 2', output => {
    expect(() => require('../2.js')).not.be.throw();
    let output_stdout = output.stdout.split('\n');
    delete output_stdout[2]; // the case-3 need recheck
    expect(output_stdout).to.be.eql(['object 1 ', 'object 1 3',, 'object 1 0','']);
  });

  fancy.stdout().stderr().
  it('The syntax for `[]`, all testcases recheck - 3', output => {
    expect(() => require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('object 2 1\nobject 1 pop\n');
  });

  fancy.stdout().stderr().
  it('The syntax for `[]`, all testcases recheck - 4', output => {
    expect(() => require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('object 2 A|C,5,6,7\n');
  });

  fancy.stdout().stderr().
  it('The syntax for `[]`, all testcases recheck - 5', output => {
    expect(() => require('../5.js')).not.be.throw();
    expect(output.stdout).to.be.equal('object 2 4|C,5,6,7\n');
  });

  it('Syntax checks', ()=> {
    expect(() => {
      // 第一个数组为空,是正常的;但第二个作为下标运算时缺少索引,故语法错
      new Function("a = [ [][] ];");
    }).be.throw(SyntaxError);
  });

  it('Direct data test', ()=> {
    expect([ [1] [1] ]).to.be.eql([undefined]);
    expect([ [][100] ]).to.be.eql([undefined]);
    expect([ [1,2,3][2] ]).to.be.eql([3]);
    expect([ []['length'] ]).to.be.eql([0]);
    expect([ ['pop'], ['push'] ['length'] ]).to.be.eql([['pop'], 1]);

    expect([
      ['A', 1, 2, 3]     // <-- 这里漏掉了一个逗号
      ['B', 3, 4, 5],
      ['C', 5, 6, 7]
    ]).to.be.eql([undefined, ['C', 5, 6, 7]]);

    expect([
      ['A', 1, 2, 3]     // <-- 这里漏掉了一个逗号
      ['B', 3, 4, 0],    // 理解为取下标0
      ['C', 5, 6, 7]
    ]).to.be.eql(['A', ['C', 5, 6, 7]]);

    expect([
      ['A', 1, 2, 3]     // <-- 这里漏掉了一个逗号
      ['B','length'],    // 理解为取属性'length'
      ['C', 5, 6, 7]
    ]).to.be.eql([4, ['C', 5, 6, 7]]);
  });


});