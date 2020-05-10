var execute = require('../prepack-core/prepack.min.js').default;
var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
  	expect(()=>execute(load('../1.js'))).not.be.throw();
  	expect(output.stdout).to.be.equal("true\ntrue\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
  	expect(()=>execute(load('../2.js'))).not.be.throw();
  	expect(output.stdout).to.be.equal("100\nundefined\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
  	expect(()=>execute(load('../3.js'))).not.be.throw();
  	expect(output.stdout).to.be.equal("10\n100\n200\n200\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
  	expect(()=>execute(load('../4.js'))).not.be.throw();
  	expect(output.stdout).to.be.equal("100\n100\nouter\n");
  });
});