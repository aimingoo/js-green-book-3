var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

let hasAccessor = name => {
  return x => (Object.keys(Object.getOwnPropertyDescriptor(x, name))
    .filter(key=>key==="get" || key==="set").length) > 0;
}

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it.skip('Reduplicate property name in object literals, ES5 only', ()=> {
    // 禁例1：对象字面量的相同属性名
    expect(()=>{
      "use strict";
      var obj = {
        'name': 1,
        'name': 'aName'
      }
    }).be.throw();
    expect(function() {
      return {
        'name': 1,
        'name': 'aName'
      }
    }()).to.be.eql({name: 'aName'});
  });

  it.skip('Reduplicate property name in object literals supplements, ES5 only',()=> {
    // 禁例1：（对同一属性名）同时使用名字和存取器声明
    expect(()=>{
      "use strict";
      var obj = {
        name: 1,
        get name() {}
      }
    }).be.throw();
    expect({
      name: 1,
      get name() {}
    }).to.be.satisfy(hasAccessor('name'));
  });

  it('Reduplicated arguments in function - dynamic create ', function() {
    // 禁例2：函数参数表的相同参数名(动态创建函数处理全局非严格模式中）
    expect(()=>{
      "use strict";
      new Function('x', 'x', 'z', 'return x+z');
    }).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Reduplicated arguments in function', output => {
    // 禁例2：函数参数表的相同参数名
    expect(()=>{
      "use strict";
      return eval('function foo(x,x,z) {}');
    }).be.throw(SyntaxError);
    expect(()=>{
      // 在非严格模式中，下面的函数声明是有效的
      function foo(m,m,n,m,a,n) {
        return m+n
      }

      // 显示6，表明函数声明中有6个形式参数
      console.log(foo.length);

      // 显示10，表明m,n的取值分别为第4和第6个参数
      console.log(foo(1,2,3,4,5,6));

      // 显示NaN，因为m+n的实际运算行为是”4 + undefined”
      console.log(foo(1,2,3,4));
    }).not.be.throw();
    expect(output.stdout).to.be.equal('6\n10\nNaN\n');
  });

  it('Rewrite `eval` or `arguments`', () => {
    // 禁例3：不能声明或重写eval和arguments这两个标识符
    expect(()=>require('../3.1.js')).be.throw(SyntaxError);
    expect(()=>require('../3.2.js')).be.throw(SyntaxError);
    expect(()=>require('../3.3.js')).be.throw(SyntaxError);
    expect(()=>require('../3.4.js')).be.throw(SyntaxError);
    expect(()=>require('../3.5.js')).be.throw(SyntaxError);
    expect(()=>{
      // 禁例3.1：向eval或arguments赋值
      eval = function() { }

      // 禁例3.2：重新声明eval或arguments
      var arguments;

      // 禁例3.3：将eval或arguments用作catch子句的异常对象名
      try {
        // …
      }
      catch (eval) {
        // …
      }

      // 禁例3.4：将eval或arguments用作函数名
      function arguments() { }

      // 禁例3.5：删除arguments，或形式参数名
      function foo() {
        delete arguments;
      }
    }).not.be.throw();
  });

  it('Octal literals', ()=> {
    // 禁例4：8进制字面量
    expect(()=>{
      require('../4.js');
    }).be.throw(SyntaxError); // SyntaxError when load script block
    expect(()=>{
      eval('"use strict"; var x = 012'); // accept when parse eval block
    }).not.be.throw();

    let result;
    expect(()=>{
      var num = 012;
      return result = num;
    }).not.be.throw();
    expect(result).to.be.equal(10);
  });

  it('The `delete` operator', () => {
    // 禁例5：用delete删除显式声明的标识符、名称或具名函数
    expect(()=>require('../5.1.js')).be.throw(SyntaxError);
    expect(()=>require('../5.2.js')).be.throw(SyntaxError);
    expect(()=>require('../5.3.js')).be.throw(SyntaxError);
    expect(()=>require('../5.4.js')).be.throw(SyntaxError);
    expect(function(catcher = []) {
      // 禁例5.1：删除变量名
      var x;
      catcher.push(delete x);

      // 禁例5.2：删除具名函数
      function foo() {}
      catcher.push(delete foo);

      // 禁例5.3：删除arguments，或形式参数名
      function foo(x) {
        catcher.push(delete x);
      }
      foo();

      // 禁例5.4 删除catch子句中声明的异常对象
      try {
        throw 0;
      }
      catch(e) {
        catcher.push(delete e);
      }
      return catcher;
    }()).to.be.eql([false, false, false, false]);
  });

  it('Reserved words', () => {
    expect(()=>require('../6.js')).be.throw(SyntaxError);
    expect(()=> {
      var yield;
      function let() { }
    }).not.be.throw();
  });

  it('The `with` statement', () => {
    expect(()=>require('../7.js')).be.throw(SyntaxError);
    expect(function() {
      new function() { with (arguments) return length };
    }).not.be.throw();
  });
});
