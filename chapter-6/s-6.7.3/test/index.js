var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    (0, eval)(load("../1.js")); // in global
    expect(output.stdout).to.be.equal("true\ntrue\ntrue\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("message: abc\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal("false\nabc\ntrue\ntrue\nfalse\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      [5, 1, 2, 3, 'a', 'b'].join(' '),
      [3, 1, 2, 3].join(' '),
      [7, 1, 2, 3, 'a', 'b', 'x', 'y'].join(' '),
      ""]);
  });
});