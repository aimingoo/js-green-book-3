var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Base features for atom objects', ()=> {
    // 原子对象
    var atom = Object.create(null);

    // 是对象
    expect(typeof atom).to.be.equal("object");

    // 不是Object()的实例
    expect(atom instanceof Object).to.be.false;
  });

  it('Base features for Atom constructor, and create methods', ()=> {
    // 原子构造器（亦称为原子函数、原子类）
    var Atom = new Function;
    Object.setPrototypeOf(Atom.prototype, null);

    // isAtom, @see `Base features for atom objects` item
    var atom, isAtom = x => (typeof x === "object") && !(x instanceof Object);

    // 方法1，以null作为原型创建对象
    expect(atom = Object.create(null)).to.be.satisfy(isAtom);

    // 方法2，将任意对象的原型置为null
    expect(atom = Object.setPrototypeOf(new Object, null)).to.be.satisfy(isAtom);

    // 方法3（与方法1和方法2略有区别：实例的原型不是null，而是另一个atom）
    expect(atom = new Atom).to.be.satisfy(isAtom);
  });
});