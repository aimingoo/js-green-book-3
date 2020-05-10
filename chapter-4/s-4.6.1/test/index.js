var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let obj; // catcher
    expect(()=>eval(load('../1.js'))).not.be.throw();

    // 无法直接列出符号名的属性
    expect(Object.keys(obj)).to.be.eql([]);

    // 通过符号列出（或使用Object.getOwnPropertyDescriptors）
    expect(Object.getOwnPropertySymbols(obj)).to.have.lengthOf(1);

    // 调用上述方法
    let f = obj[Object.getOwnPropertySymbols(obj)[0]];
    expect(()=>f.call(obj)).not.be.throw();
    expect(output.stdout).to.be.equal('unnamed symbol method\n');
  });
});
