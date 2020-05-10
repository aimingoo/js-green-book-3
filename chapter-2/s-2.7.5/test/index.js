var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The `,` operator', output => {
    expect(() => require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('3\n1\n3\n3\n3\n1\nvalue: 240\nvalue: 520\n');
  });

  it('Syntax checks', ()=> {
    expect(() => {
      new Function("var a = 1, 2, 3;"); // （语法解析期出错）
    }).be.throw(SyntaxError);
  });
});