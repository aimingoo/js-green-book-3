var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  it('Some features for Object.prototype', ()=> {
    // 原型(Object.prototype)是null
    expect(Object.getPrototypeOf(Object.prototype)).to.be.null;

    // 且(原型Object.prototype)不能重置
    expect(()=>Object.setPrototypeOf(Object.prototype, new Object)).be.throw(TypeError); // Immutable prototype

    // JavaScript将Object.prototype属性的性质置为不可写和不可重置的
    expect(Object.getOwnPropertyDescriptor(Object, 'prototype')).to.be.eql({
      value: new Object,
      writable: false,
      enumerable: false,
      configurable: false
    });

    // String.prototype的原型其实就是前面讨论的Object.prototype
    expect(Object.getPrototypeOf(String.prototype) === Object.prototype).to.be.true;
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1 - inject Object.prototype', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\n100\n100\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\n100\n100\nundefined\nundefined\nundefined\n');
  });
});