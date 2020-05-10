var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  it('Recheck testcase 2', ()=> {
    let srcContext = load('../2.js');
    let MyObject, execContext = srcContext + '\nreturn MyObject;'
    expect(MyObject = Function(execContext)()).to.be.a("function");

    // 这种开放也带来了对新的设计的破坏（在破坏前，两个原型链应当一致）
    expect(Object.getPrototypeOf(MyObject.prototype)).to.be.equal(Object.prototype); // 外部原型链
    expect(Object.getPrototypeOf(MyObject.prototype)).not.to.be.equal(
      Object.getPrototypeOf(MyObject).prototype); // 与类的内部原型链不一致
  });
});
