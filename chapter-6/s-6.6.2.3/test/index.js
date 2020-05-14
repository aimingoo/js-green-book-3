var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    (0, eval)(load("../1.js")); // `f1()` in global context
    expect(f1).be.throw(SyntaxError, 'target');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    eval(load("../2.js")); // `foo()` in global context
    expect(()=>new foo).not.be.throw();
    expect(output.stdout).to.be.equal("true\n");
  });
});
