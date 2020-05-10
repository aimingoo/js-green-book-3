var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Who is `super`', output => {
    let srcContext = load('../1.js');
    let MyObject, execContext = srcContext + '\nreturn MyObject;'
    expect(MyObject = Function(execContext)()).to.be.a("function");

    // 输出结果将会显示MyObject的整个声明
    expect(output.stdout).to.be.equal(`我是：${String(MyObject)}\n`);

    // 方法showMe()中的代码super.toString()实际类似于...
    let sameOf = Object.toString.bind(MyObject)();
    expect(output.stdout).to.be.equal(`我是：${sameOf}\n`);
  });
});