var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Some features for global scope', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100 200\nundefined\n200\n');
  });

  it('A standard method of get that `global`', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Some features global in Node.js, vs. current module', output => {
    expect(()=>require('../main.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "global: false",
      "exports: true",
      ""]);
  });

  fancy.stdout().stderr().
  it('Add variants in Node.js using eval()', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100\n');
  });
});