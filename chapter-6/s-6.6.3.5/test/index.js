var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("100\n200\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "in eval(): Okay",
      "in foo(): 100",
      ""]);
  });

  fancy.stdout().stderr().
  it('A legacy case - extensional', output => {
    function foo() {
      (0, eval)(`
        x = function() {
          console.log(typeof foo);
        }
      `);
    }
    expect(foo).not.be.throw();
    expect(typeof x).to.be.equal('function');
    expect(x).not.be.throw();
    expect(output.stdout).to.be.equal("undefined\n");
  });
});
