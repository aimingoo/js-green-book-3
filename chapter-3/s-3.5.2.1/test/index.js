var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;


describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100\n[]\n200\nfalse\ntrue\ntrue\n')
  });
});