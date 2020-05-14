var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Simple case for null/undefined', ()=> {
    var x = String();
    // 使用隐式转换来展示null和undefined的转换结果
    expect(x = '' + undefined).to.be.equal("undefined");
    expect(x = '' + null).to.be.equal("null");
  });

  it('More cases ...', ()=> {
    var value = 1234567;
    // 显示12d687
    expect(value.toString(16)).to.be.equal("12d687");
    // 显示4553207
    expect(value.toString(8)).to.be.equal("4553207");

    // 数值
    var x = 1234567;
    expect(x.toString(2)).to.be.equal("100101101011010000111");
    expect(x.toString(36)).to.be.equal("qglj");

    // 数值
    var x = 1234567;
    // 补前缀并大写输出
    expect(x.toString(16).padStart(8,'0').toUpperCase()).to.be.equal("0012D687");
  });
});