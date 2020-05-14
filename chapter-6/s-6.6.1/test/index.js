var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).be.throw(SyntaxError, 'eval');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true 100\nfalse 1\n');
  });

  it('More checks', ()=> {
    // 使obj.eval指向原生的eval()函数
    obj = { eval };

    // sourceText执行中的this指向global
    expect(obj.eval("this") === Function("return this")()).to.be.true; // true

    // eval作为方法执行时，this总是指向global（而无论obj是否是global）
    expect(obj.eval("this") === global.eval("this")).to.be.true; // true

    // （如接下来所讲的，）当它作为一般函数调用时，this指向当前上下文中的this
    expect(global.eval("this") === eval("this")).to.be.false; // false
  });
});