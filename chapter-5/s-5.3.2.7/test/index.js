var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Some features for proxy functions', output => {
    // 声明类
    class MyClass { };

    // 类禁止作为函数调用
    expect(MyClass).be.throw(TypeError);

    // 创建它的代理
    let p = new Proxy(MyClass, { apply() { console.log("Hi, apply!") } });

    // 代理函数是可调用的
    expect(p).not.be.throw();
    expect(output.stdout).to.be.equal("Hi, apply!\n");
  });
});