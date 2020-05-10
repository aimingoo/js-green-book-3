var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Object evaluation as value', output => {
    expect(()=>{
      // 尝试进行数值运算
      console.log(new Object * 1);
    }).not.be.throw(); // No error
    expect(output.stdout).to.be.equal("NaN\n"); // print NaN
    expect(new Object * 1).to.be.NaN; // result is NaN
  });
});