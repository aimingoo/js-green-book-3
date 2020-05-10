var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    eval(load('../1.js'));

    // 测试1: 让一个对象"fly"，或让一只(模仿的)鸟"fly"
    asBird(new Object).fly();

    // 测试2: Bird的实例可以"fly"
    doFly(new Bird);

    // check output
    expect(output.stdout).to.be.equal('I can fly.\nI can fly.\n');

    // 测试3: Object的实例asBird()之后虽然“看起来像Bird”，但不能"fly"
	expect(()=>doFly(asBird(new Object))).be.throw(Error, '对象不是Bird或其子类的实例.');
  });

  it('Recheck testcase 2', () => {
	// 载入case-1
    eval(load('../1.js'));
	// 上述isBird()也可以实现为如下版本
	eval(load('../2.js'));
	// 测试3（复测）
	expect(()=>doFly(asBird(new Object))).be.throw(Error, '对象不是Bird或其子类的实例.');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('false\ntrue\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal('false\ntrue\n');
  });
});