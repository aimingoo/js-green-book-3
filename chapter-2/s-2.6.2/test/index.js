var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('To assignment unknow name', output => {
    // 禁例1：向不存在的标识符赋值
    expect(()=>{
      "use strict";
      aName = 123;
    }).be.throw();
    expect(function() {
      aName = 123;
    }).not.be.throw();
    expect(aName).to.be.equal(123);
    // try better way
    require('../1.js');
    expect(output.stdout).to.be.equal('newName\n');
  });

  it('Ignore invalid operation',()=> {
    // 禁例2：运算符处理一些不可处理的操作数时，将导致“类型异常或语法错（TypeError/SyntaxError）”
    expect(()=>require('../2.1.js')).be.throw(TypeError);
    expect(()=>require('../2.2.js')).be.throw(TypeError);
    expect(()=>require('../2.3.1.js')).be.throw(TypeError);
    expect(()=>require('../2.3.2.js')).be.throw(SyntaxError);
    expect(()=>require('../2.4.js')).be.throw(TypeError);
    expect(()=>require('../2.5.js')).be.throw(TypeError);

    expect(function() {
      var obj = { x: 100 };
      // 禁例2.1：当对象是不可扩展的（isExtensible为真），向不存在的属性赋值
      Object.preventExtensions(obj);
      obj.y = 100;

      // 禁例2.2：当对象是不可删除属性的(isSealed或isFrozen为真)，尝试删除属性
      Object.seal(obj);
      delete obj.x;

      // 禁例2.3：删除某些不能删除的系统属性、标识符，或configurable性质为false的属性
      delete Function.prototype;
      delete eval;

      // 禁例2.4：写只读属性（包括getter-only properties）
      Object.defineProperty(obj, 'x', {writable: false});
      obj.x = 200;

      return obj;
    }()).to.be.eql({x: 100});

    expect(function() {
      // 禁例2.5 写常量
      const str = "a string value";
      str = 100;
    }).be.throw(TypeError);
  });

  fancy.stdout().stderr().
  it('Access callee/caller in function context', output => {
    // 禁例3：访问arguments.callee或函数的caller属性将导致“类型异常（TypeError）”
    expect(()=>require('../3.1.js')).be.throw(TypeError);

    expect(()=>require('../3.2.js')).not.be.throw();
    let output_stdout = output.stdout.split('\n');
    output_stdout[2] = output_stdout[2].split(',').sort().join(',');
    expect(output.stdout.split('\n')
        .map((x, i) => i == 2 ? x.split(',').sort().join(',') : x)
      ).eql(['true', 'true', 'configurable,enumerable,get,set', '']);

    expect(function() {
      // 禁例3：访问callee或caller
      function foo() {
        console.log(typeof arguments.callee);
        console.log(typeof arguments.callee.caller);
        console.log(typeof foo.caller);
      }
      foo();
    }).not.be.throw();
    output_stdout = output.stdout.split('\n').slice(3);
    expect(output_stdout).to.be.eql(['function', 'function', 'function', '']);
  });

  fancy.stdout().stderr().
  it('Rewrite element of arguments', output => {
    // 差异1: 对arguments[n]与形式的修改将不再相互影响
    require('../4.js');
    expect(output.stdout).to.be.equal('abc\n');

    expect(function(x) {
      arguments[0] = 100;
      return x;
    }('abc')).to.be.equal(100);
  });
});
