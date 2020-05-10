var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("1\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      String(new Date('2012/10/21')),
      String(new Date('2012/10/21')),
      String(NaN),
      String(NaN),
      String(NaN),
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
	  console.log = global_console_log; // reset default console.log
    expect(()=>require('../4.js')).not.be.throw();

    let execContext = 'return ' + output.stdout;
    expect(Function(execContext)()).to.be.eql({
      value: undefined,
      writable: false,
      enumerable: false,
      configurable: false });
  });
});