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
    return Promise.require('../1.js', ['foo','foo2'])
      .then(([foo, foo2]) => foo().then(foo2)) // call async functions in then-chain
      .then(()=> {
        expect(output.stdout.split("\n")).to.be.eql([
          "100", // p.then
          "100", // foo()
          (new Object).toString(), // resolvedObj in foo2()
          ""]);
      });
  });
});