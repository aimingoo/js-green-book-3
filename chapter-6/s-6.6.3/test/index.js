var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('A case of eval environment', output => {
    // 在sourceText块中可以引用的变量x
    eval('let x = 100; console.log("value:", x);');
    expect(output.stdout).to.be.equal("value: 100\n");

    // 在执行结束后x是不存在的（确切地说，是x只存在于eval自己独立的环境中）
    expect(typeof x).to.be.equal("undefined"); // undefined
  });
});