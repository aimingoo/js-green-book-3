var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some features for iteration', ()=> {
    // 数组的迭代方法
    expect(Object.getOwnPropertyDescriptor(Array.prototype, Symbol.iterator)).to.be.eql({
      value: [][Symbol.iterator],
      writable: true,
      enumerable: false,
      configurable: true
    });

    // 继承自Array.prototype
    expect(typeof (new Array)[Symbol.iterator]).to.be.equal("function");

    // 从原型中取原生的迭代方法
    let f = Array.prototype[Symbol.iterator]
    // 得到迭代器
    var iter = new Array('a', 'b', 'c');
    tor = f.call(iter);
    // 第一次迭代
    expect(tor.next()).to.be.eql({
      value: 'a',
      done: false
    });

    // 第二次迭代
    expect(tor.next()).to.be.eql({ value: 'b', done: false });
    // 第三次迭代
    expect(tor.next()).to.be.eql({ value: 'c', done: false });
    // 第四次迭代
    expect(tor.next()).to.be.eql({ value: undefined, done: true });
    // 第n次迭代, 迭代结果的done为true值但不会导致异常
    expect(tor.next()).to.be.eql({ value: undefined, done: true });
  });
});