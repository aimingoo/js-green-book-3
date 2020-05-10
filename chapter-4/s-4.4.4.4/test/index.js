var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Simple example for labeled statement', ()=> {
    expect(eval('aa: 100;')).to.be.equal(100);
  });

  fancy.stdout().stderr().
  it('More cases...', output => {
    // 标签语句能作用于循环语句
    expect(eval('aa: while (true) break aa;')).to.be.undefined;

    // break子句（以及循环语句中的continue子句）是不决定最终返回的
    expect(() => eval(`
      aa: switch (false) {
        case false:
          console.log('hi');
        break aa;
      }
    `)).not.be.throw();
    expect(output.stdout).to.be.equal('hi\n');
  });
});