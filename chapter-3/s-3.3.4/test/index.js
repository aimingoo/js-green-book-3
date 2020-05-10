var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('Value x: 100 100\nValue y: 2000 2000\n');
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).be.throw(TypeError);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('true\ntrue\nobject\nnull\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.match(/^ERROR:/);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout).to.match(/^class method:/);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6', output => {
    expect(()=>require('../6.js')).not.be.throw();
    expect(output.stdout).to.be.equal('call instance method\ntrue\nfalse\n');
  });
});
