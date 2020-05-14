var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('A cases of add members into Object.prototype', output => {
    // 添加Object.prototype.x成员
    Object.prototype.x = 100;

    // 全局变量x
    console.log(x); // 100
    expect(output.stdout).to.be.equal('100\n');

    // 检查global（父类）的原型
    expect(Object.getPrototypeOf(Object.getPrototypeOf(global)) === Object.prototype).to.be.true;

    // global被“视为”从Object()构造出来的一般对象
    expect(global.constructor === Object).to.be.true;
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('200 300\n200 100\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      // PART - 1
      "SHOW :  z 300",
      "FORIN:  x 100",
      "FORIN:  y 200",
      // PART - 2
      "ARRAY:  3  elements, values:  100 200 300",
      "FOROF:  100",
      "FOROF:  200",
      "FOROF:  300",
      ""]);
  });
});