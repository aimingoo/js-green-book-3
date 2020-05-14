var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Base features for callee and caller', ()=> {
    expect(function myFunc() {
      // 下列等式成立
      return [
        arguments.callee === myFunc.arguments.callee,
        arguments.callee === myFunc
      ];
    }()).to.be.eql([true, true]);
  });

  it('Recheck testcase 1',  ()=> {
    expect(()=>require('../1.js')).be.throw(RangeError, 'stack');
  });

  it('Features: the `callee` in strict/normal mode', ()=> {
    let getDesc = 'return Object.getOwnPropertyDescriptor(arguments, "callee")';

    // 非严格模式
    let f = new Function(getDesc);
    expect(f()).to.be.eql({
      value: f,
      writable: true,
      enumerable: false,
      configurable: true
    });
    expect(f().value === f).to.be.true;

    // 严格模式
    f = new Function('"use strict";' + getDesc);
    expect(Object.entries(f())).to.be.deep.include.members([
      ["enumerable", false],
      ["configurable", false]
    ]);
    expect(()=>f().get()).be.throw(TypeError, "not be accessed");
  });
});
