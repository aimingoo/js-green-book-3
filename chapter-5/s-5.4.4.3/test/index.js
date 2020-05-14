var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      " >> 1",
      " >> RETURN ",  // monitor that `tor`, but `tor.name` is undefined
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    // 如果将上例代码中的break改作throw语句...仍然会调用tor.return()
    expect(()=>require('../2.js')).be.throw(Error, 'error in for..of'); // a custom error
    expect(output.stdout.split("\n")).to.be.eql([
      " >> 1",
      " >> RETURN ",  // return too
      ""]);
  });
});
