var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Base features for Meta class constructor', ()=> {
    let srcContext = load('../1.js');
    let Meta, execContext = srcContext + '\nreturn Meta;'
    var atom, isAtom = x => (typeof x === "object") && !(x instanceof Object);

    // 元
    expect(Meta = Function(execContext)()).to.be.a("function");

    // 原子类（从“元”得到原子类）
    var Atom = new Meta;

    // 方法4（参见上一小节）
    expect(atom = new Atom).to.be.satisfy(isAtom);

    // 将Meta作为...原子类型，...它的原型也应当是atom
    Object.setPrototypeOf(Meta, null);

    expect(()=>{
      // 元类
      //  - 仅用于建立一层抽象语义
      class MetaClass extends Meta {}
      // 元对象（类）
      //  - 隐含地声明了MetaObject扩展自Atom类
      class MetaObject extends new MetaClass {}
    }).not.be.throw();
  });
});