var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Some cases for direct overwirte', ()=> {
    // 重写undefined并不会导致异常
    expect(()=>undefined = 'abc').not.be.throw;

    // 但是重写操作无效
    expect(undefined).not.be.equal('abc');

    // 多数框架，或惯例中会用类似如下代码来声明undefined标识符
    var undefined = void 0;

    // 具体来说，undefined是global的一个属性
    expect('undefined' in global).to.be.true;

    // 而null/true/false等不是
    expect('null' in global).to.be.false;

    // undefined其实是global的一个只读属性
    expect(Object.getOwnPropertyDescriptor(global, 'undefined')).to.include({
      value: undefined,
      writable: false,
      enumerable: false,
      configurable: false
    });

    // 在严格模式下写该属性仍然会导致异常
    expect(Function('"use strict"; undefined = "abc";'))
    	.be.throw(TypeError, 'assign');

    // 考查Object()构造器“作为全局对象的属性”是可写的
    expect(Object.getOwnPropertyDescriptor(global, 'Object')).to.include({
      value: Object,
      writable: true,
      enumerable: false,
      configurable: true
    });

    // （以Node.js为例，）可重写的全局标识符
    expect(Object.getOwnPropertyNames(global).filter(key=>Object
      .getOwnPropertyDescriptor(global, key).writable)).to.be.include.members([
        'Object', 'Function', 'Array', 'Number', 'parseFloat' //, more...
      ]);
  });

  fancy.stdout().stderr().
  it('Load no-syntax script and check more...', output => {
  	// PART - 1
  	eval(load('../1.js'));  // load `f()` to current context

  	// 标识符重复声明的检测也是出现在执行期的
  	expect(f).be.throw(SyntaxError, "'x'");

  	// 控制台没有输出"enter f()"
  	expect(output.stdout).to.be.empty;

  	// PART - 2
  	eval(load('../2.js'));  // load `f2()` to current context

  	// 常量不可重写，这一行为的检测也是在执行期进行的
  	expect(f2).be.throw(TypeError); // Assignment to constant variable

  	// 控制台输出"enter f2()"
  	expect(output.stdout.split("\n")[0]).to.be.equal("enter f2()");
  });
});