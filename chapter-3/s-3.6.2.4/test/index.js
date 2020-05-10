var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '3.6.2.2', ref = `../../s-${refChapter}`;

  it('Base checks for meta classes system', ()=> {
    let srcContext = load(`${ref}/1.js`);
    let Meta, execContext = srcContext + '\nreturn Meta;'

    // 元
    expect(Meta = Function(execContext)()).to.be.a("function");
    // 元类
    class MetaClass extends Meta {}
    // 元对象（类）
    class MetaObject extends new MetaClass {}

    // 类类型继承
    var MyObject = new MetaClass();
    class MyObjectEx extends MyObject {}
    expect(()=> { // OR
      class MyObjectEx extends new MetaClass() {}
    }).not.be.throw();

    // 类类型的原型总是派生自Meta
    expect(MetaClass.prototype instanceof Meta).to.be.true;

    // 类的原型不是Meta的子类实例
    expect(MetaObject.prototype instanceof Meta).to.be.false;
  });

  it('More checks...', ()=> {
    let srcContext = load(`../1.js`);
    let Meta, MetaClass, execContext = srcContext + '\nreturn [Meta, MetaClass];';

    // The base inherited chain, @see previous
    ([Meta, MetaClass] = Function(execContext)()).forEach(x => expect(x).to.be.a("function"));
    class MetaObject extends new MetaClass {}

    // MetaObject是类，但不是类类型；它是MetaClass创建出来的
    //  - 元类（类类型）是类的类
    expect(MetaClass.isClassOf(MetaObject)).to.be.true;

    //  - 类类型是Meta，类不是
    expect(Meta.isMeta(MetaClass)).to.be.true;
    expect(Meta.isMeta(MetaObject)).to.be.false;

    // - 都是原子（基于元编程系统）
    expect(Meta.isAtom(Meta)).to.be.true;
    expect(Meta.isAtom(MetaClass)).to.be.true;
    expect(Meta.isAtom(MetaObject)).to.be.true;
    expect(Meta.isAtom(MetaObject.prototype)).to.be.true;

    // 实例是原子，但不是元
    var obj = new MetaObject;
    expect(Meta.isAtom(obj)).to.be.true;
    expect(Meta.isMeta(obj)).to.be.false;

    // 对象不是类类型的实例
    expect(obj instanceof MetaObject).to.be.true;
    expect(obj instanceof MetaClass).to.be.false;

    // 类和类类型都是对象的（父/祖先）类类型
    //  - 注意静态方法是继承的
    expect(MetaObject.isClassOf(obj)).to.be.true;
    expect(MetaClass.isClassOf(obj)).to.be.true;
  });
});