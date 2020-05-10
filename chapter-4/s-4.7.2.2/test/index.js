var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let srcContext = load('../1.js');
    let f, execContext = srcContext + '\nreturn f;'
    expect(f = Function(execContext)()).to.be.a("function");
    expect(f).not.be.throw();
    expect(output.stdout).to.be.equal("values of x,y: 100 1000\n")
  });
});