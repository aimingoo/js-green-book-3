var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Save data inside the functions', ()=> {
    let objType = "Number"; // test only
    let srcContext = load('../1.js');
    let MyFunc, execContext = srcContext + '\nreturn MyFunc;';
    expect(MyFunc = Function(execContext)()).to.be.a("function");
    
    // 得到它内部的这两个考查方法
    var [setter, getter] = MyFunc();

    // 测试1
    expect(getter()).to.be.equal(100);

    // 测试2
    setter(300);
    expect(getter()).to.be.equal(300);
  });
});