var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "nothing", // using fancy's console.log, but will be 0 when reset to default
      "0",
      ""]);
  });

  it('More cases ...', ()=> {
    // 使toString()或valueOf()方法失效

    // 重写为函数（推荐，返回对象）
    var Invalid = ()=> Object;
    Number.prototype.toString = Invalid;
    // （测试）
    var five = new Number(5); // 5
    five.valueOf = Invalid; // invalid both valueOf and toString
    expect(()=>`${five}`).be.throw(TypeError, 'convert'); // invalid
    expect((()=>`${new Number(5)}`)()).to.be.equal("5"); // now toString invalid, but valueOf not

    // 或重写为null
    var x = new Object;
    x.toString = null;
    // （测试）
    expect(()=>`${x}`).be.throw(TypeError, 'convert'); // invalid
    expect((()=>`${new Object}`)()).to.be.a("string"); // vs. native toString
  });
});