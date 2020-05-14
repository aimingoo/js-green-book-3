var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some features for `this` in arrow functions', ()=> {
    // 无论是bind()方法，还是Array.prototype.forEach()中传入的this，
    // 都不能影响箭头函数的（“只使用词法上下文中的this引用”）这一特性。
    let foo = function() {
      return x => this === x; // check `x`
    }

    // send catcher as `this` in foo's lex-context
    let catcher = new Object;
    // and get arrow-function `f()`
    let f = foo.call(catcher);
    expect(f(catcher)).to.be.true; // ya!

    // (1) bind()方法
    let obj = new Object;
    let f2 = f.bind(obj); // try bind new
    expect(f2(obj)).to.be.false; // can't bind that
    expect(f2(catcher)).to.be.true; // keep `catcher`

    // (2) Array.prototype.xxx中传入的this
    // skip, using map() in the testcase
    //  -> [0].forEach(f, obj); // send obj as `thisObject`
    expect([obj, catcher].map(f, obj)).to.be.eql([
      false, // obj !== this, ignore that`thisObject`
      true   // keep `catcher`
    ]);

    // (3) compare with normal-functions
    let f3 = function(x) { return this === x };
    expect([obj, catcher].map(f3, obj)).to.be.eql([
      true, // obj === `thisObject`
      false // obj !== catcher
    ]);
  });
});