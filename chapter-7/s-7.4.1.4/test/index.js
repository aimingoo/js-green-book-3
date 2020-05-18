var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, versions} = require('chapter');

// FORCE VERSION CHECK
if (versions('node', '<10.12')) {
  describe = describe.skip;
}

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('The first multithread application', output => {
    let resolved, catcher = new Promise(ok=>resolved=ok); // resolve a state
    let waitSignal = () => output.stdout.split("\n").length >= 6;
    let success = () => resolved('Ok', clearInterval(t2), clearTimeout(t1));
    let fail = () => resolved('Error', clearInterval(t2), clearTimeout(t1));
    let [t1, t2] = [setTimeout(fail, 1000), setInterval(()=>waitSignal()&&success(), 50)];

    expect(()=>require("../test.js")).not.be.throw();

    return catcher.then(signal => {
      expect(signal).to.be.equal('Ok');
      expect(output.stdout.split("\n")).to.be.include.members([
        "hello from 1000",
        "hello from 1001",
        "hello from 1002",
        "hello from 1003",
        "hello from 1004"]);
    });
  });
});