var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    return Promise.require('../1.js').then(()=> {
      expect(output.stdout).to.be.equal("true\ntrue\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    return Promise.require('../2.js').then(()=> {
      expect(output.stdout).to.be.equal("false\ntrue\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    return Promise.require('../3.js').then(()=> {
      expect(output.stdout).to.be.equal("REJECTED reason x:  true\n");
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    return Promise.require('../4.js').then(()=> {
      expect(output.stdout.split("\n")).to.be.eql([
        "[REASON] is object",
        "[REASON] is a promise: true",
        ""]);
    });
  });

  fancy.stdout().stderr().
  it('A simple path to think about Promise.all ...', output => {
    // 示例：本例中“方式1”与“方式2”是等义的
    var elements = [0, 1, 2, 3, p];

    // 方式1
    //  - Promise.all(elements);
    return Promise.all(elements).then(results => {
      // 方式2
      var elements2 = elements.map(x=>Promise.resolve(x));
      // - Promise.all(elements2);
      return Promise.all(elements2).then(mapedResults => {
        expect(mapedResults).to.be.eql(results);
      });
    });
  });
});