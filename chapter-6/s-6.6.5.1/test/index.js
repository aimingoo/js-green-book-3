var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let normalObject = '[object Object]';
  let rxNormalFunction = /^function /;
  let rxNativeFunction = /^function .*[native code]/;

  it('Some cases for object/functions', ()=> {
    let obj = {x: 100};
    expect(obj.toString()).to.be.equal(normalObject); // ECMAScript spec. based

    var func = new Function('console.log("Hello, World!")')
    expect(JSON.stringify(func)).to.be.undefined;
    expect(func.toString()).to.be.match(rxNormalFunction); // Spec. based maybe

    var func = new Function('console.log("Hello, World!")');

    // 错误的方法：直接eval会将序列化的代码文本处理成“声明语句”
    var f = eval(func.toString());

    // 方法1：使用Function
    var f1 = new Function('return ' + func.toString())();

    // 方法2：使用eval
    var f2 = eval('(' + func.toString() + ')');

    // “错误的方法”获得的f变量是未定义的
    expect([typeof f, typeof f1, typeof f2])
      .to.be.eql([ 'undefined', 'function', 'function' ]);

    // 即使是toString()也是无法显示JavaScript内部函数的代码文本的
    expect(Function.toString()).to.be.match(rxNativeFunction); // Spec. based maybe

    // foo()声明为一个对象方法
    var func = {foo() {return 100}}.foo;

    // toString()不能作为有效的函数声明语句
    expect(func.toString()).not.be.match(rxNormalFunction); // a method define
  });
});