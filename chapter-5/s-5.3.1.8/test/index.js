var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Some expressions pass values', ()=> {
    var obj = { f() { return this } };

    // ... 在这两个过程中，连续运算都会传递引用
    expect(obj.f()).to.be.equal(obj);
    expect((obj.f)()).to.be.equal(obj);
  });

  fancy.stdout().stderr().
  it('Some expressions pass values - recheck', output => {
    // 在全局this中声明一个x
    x = 100;

    // 声明一个一般对象
    var obj = { x: 200, f: function() { console.log(this.x) } }

    // 示例1
    obj.f();
    expect(output.stdout.split("\n")[0]).to.be.equal("200");

    // 示例2
    (obj.f)();
    expect(output.stdout.split("\n")[1]).to.be.equal("200");

    // 示例3
    (0, obj.f)();
    expect(output.stdout.split("\n")[2]).to.be.equal("100");

    // 这个例子同样适用于对函数“传值参数”特性的解释，例如：
    function foo(x) {
      x(); // 'x' 是传值，而不是传引用的
    }

    // 示例4
    foo(obj.f); // 100
    expect(output.stdout.split("\n")[3]).to.be.equal("100");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("200\n400\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("200\n");
  });
});
