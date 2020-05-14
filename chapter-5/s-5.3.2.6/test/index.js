var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "own method in MyFuncEx",
      "prototype method in MyFunc",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1 - extensional', output => {
    let srcContext = load('../1.js');
    let execContext = srcContext + '\nreturn [MyFunc, MyFuncEx];'
    let [MyFunc, MyFuncEx] = Function(execContext)();

    // MyFunc的原型没有prototype属性
    expect('prototype' in Object.getPrototypeOf(MyFunc)).to.be.false;

    // 因此以下代码导致异常（执行期异常）
    expect(()=> {
      class MyFuncEx2 extends MyFunc.bind() {}
    }).be.throw(TypeError);

    // MyFuncEx类的原型是有prototype的（亦即是MyFunc.prototype），所以以下能正常声明
  class MyFuncEx3 extends MyFuncEx.bind() {}

    // 但是绑定函数继承了MyFuncEx原型的prototype属性，所以MyFuncEx3与MyFuncEx4不同
  class MyFuncEx4 extends MyFuncEx {}

  // MyFuncEx4是MyFuncEx的子类，它的实例可以使用方法callMe()
  (new MyFuncEx4).callMe();
  // ignore line 0~1
    expect(output.stdout.split("\n")[2]).to.be.equal("call me in MyFuncEx");

    // callMe()继承自父类原型
    expect('callMe' in Object.getPrototypeOf(MyFuncEx4.prototype)).to.be.true;


    // 而MyFuncEx的绑定函数不能用来替代MyFuncEx作为父类（例如MyFuncEx3的父类）
    expect('callMe' in Object.getPrototypeOf(MyFuncEx3.prototype)).to.be.false;

    // 实例也没有继承来的'callMe'属性
    expect('callMe' in new MyFuncEx3).to.be.false;
  });

  fancy.stdout().stderr().
  it('Own `prototype` property for bound functions', output => {
    let MyFunc = new Function;
    let x = new MyFunc;
    let f = MyFunc.bind();

    // 原型检查（1）
    expect(x instanceof f).to.be.true;
    expect(x instanceof MyFunc).to.be.true;

    // 伪造的原型属性
    f.prototype = new Object;

    // 原型检查（2）
    expect(x instanceof f).to.be.true;
    expect(x instanceof MyFunc).to.be.true;

    // 原型检查（3）
    expect(MyFunc.prototype.isPrototypeOf(new MyFunc)).to.be.true;
    expect(f.prototype.isPrototypeOf(new f)).to.be.false;
    expect((new f) instanceof f).to.be.true;
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
  	console.log = global_console_log; // reset default console.log

    let srcContext = load('../2.js');
    let foo, execContext = srcContext + '\nreturn foo;'
    expect(foo = Function(execContext)()).to.be.a("function");

    // f()是绑定函数，并且预绑定了参数1,2,3
    let f = foo.bind(null, 1, 2, 3)

    // 调用时追加了4,5,6
    f(4,5,6);
    expect(output.stdout.split("\n")).to.be.eql([
      "this:  null",
      "args:  1 2 3 4 5 6",
      ""]);

    // 绑定函数会忽略用apply/call传入的thisArg
    f.call(new Object, 'a', 'b', 'c');
    expect(output.stdout.split("\n").slice(2)).to.be.eql([
      "this:  null",
      "args:  1 2 3 a b c",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    console.log = global_console_log; // reset default console.log

    let srcContext = load('../3.js');
    let MyObject, execContext = srcContext + '\nreturn MyObject;'
    expect(MyObject = Function(execContext)()).to.be.a("function");

    // 创建实例
    new MyObject('MyObject');
    expect(output.stdout.split("\n")).to.be.eql([
      "Construct by MyObject",
      "true",
      "true",
      ""]);

    // 绑定函数
    let X = MyObject.bind(null, 'bound MyObject');
    // 使用绑定函数创建实例（在MyObject中的this和new.target不受影响）
    new X;
    expect(output.stdout.split("\n").slice(3)).to.be.eql([
      "Construct by bound MyObject",
      "true",
      "true",
      ""]);
  });
});
