var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.empty;

    // 补充测试
    expect(()=> {
      var obj = { name: 'myName', value: 0 }
      for (var i in obj) {
        obj = {}; // 重写对象：该重写不会影响到for语句对obj的引用
        console.log(i, typeof obj[i]); // 这里的obj引用了被重写的对象，所以obj[i]总是undefined
      }
    }).not.be.throw();
    expect(output.stdout.split("\n")).to.be.include.members([
      "name undefined",
      "value undefined",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal('obj1\ntrue\n');
  });
});