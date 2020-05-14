var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).not.be.throw();
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).be.throw(SyntaxError);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal("test.txt\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "undefined 100 200 300",
      "1 100 200 300",
      ""]);
  });
});