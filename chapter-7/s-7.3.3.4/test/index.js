var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised, versions} = require('chapter');

Promise.require = promised(require);

// FORCE VERSION CHECK
if (versions('node', '<10.12')) {
  describe = describe.skip;
}

describe(`[${chapter.toUpperCase()}] Check points`, function() {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let resolved,
      catcher = new Promise(ok=>resolved=ok), // resolve a state
      required = Promise.require('../1.js'); // load testcase
    setTimeout(resolved, 1000);

    // require return last promise only, so we need try waiting others maybe
    return Promise.all([required, catcher]).then(() => {
      expect(output.stdout.split("\n")).to.be.include.members([
        "1",
        "3",
        "2",
        ""]);
    });
  });

  it('Recheck testcase 2 - check syntax', ()=> {
    expect(()=>require("../2.js")).be.throw(SyntaxError)
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    return Promise.require('../3.js').then(()=> {
      expect(output.stdout).to.be.equal("100\n")
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    let resolved,
      catcher = new Promise(ok=>resolved=ok), // resolve a state
      required = Promise.require('../4.js'); // load testcase
    setTimeout(resolved, 1000); // @see testcase 1
    return Promise.all([required, catcher]).then(() => {
      expect(output.stdout.split("\n")).to.be.include.members([
        "201",
        "103",
        "102",
        ""]);
    });
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    return Promise.require('../5.js').then(()=> {
      expect(output.stdout).to.be.equal("101\n")
    });
  });
});