var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '3.6.2.2', ref = `../../s-${refChapter}`;

  it('Expect fail, MetaObject not be instanceof MetaClass', ()=> {
    let srcContext = load(`${ref}/1.js`);
    let Meta, execContext = srcContext + '\nreturn Meta;'

    // 元
    expect(Meta = Function(execContext)()).to.be.a("function");
    // 元类
    class MetaClass extends Meta {}
    // 元对象（类）
    class MetaObject extends new MetaClass {}

    // ...，然而下面的结果会与我们的这一预期相反
    expect(MetaObject instanceof MetaClass).to.be.false; // 检查继承关系
  });

  it('Recheck, MetaObject be instanceof MetaClass', ()=> {
    let srcContext = load(`../1.js`);
    let Meta, execContext = srcContext + '\nreturn Meta;'

    // The base inherited chain, @see previous
    expect(Meta = Function(execContext)()).to.be.a("function");
    class MetaClass extends Meta {}
    class MetaObject extends new MetaClass {}

    // 我们得到了一个对JavaScript元编程的全新扩展，即所谓的类类型系统，主要用于定义类以及操作类的类型信息
    expect(MetaObject instanceof MetaClass).to.be.true;
  });

  it('More checks...', ()=> {
    let srcContext = load(`../1.js`);
    let Meta, execContext = srcContext + '\nreturn Meta;'
    var isAtom = x => (typeof x === "object") && !(x instanceof Object);

    // The base inherited chain, @see previous
    expect(Meta = Function(execContext)()).to.be.a("function");
    class MetaClass extends Meta {}
    class MetaObject extends new MetaClass {}

    // 检查继承关系
    expect(MetaClass instanceof Meta).to.be.true;

    // 对象
    var obj = new MetaObject();
    expect(obj instanceof MetaObject).to.be.true;

    // obj不是Object()或其子类的实例
    expect(obj instanceof Object).to.be.false;

    // obj是对象
    expect(obj).to.be.a("object");

    // obj是“原子(atom)”
    expect(obj).to.be.satisfy(isAtom);
  });
});