var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    console.log = global_console_log; // reset default console.log
    let Object = global.Object;  // To protecte `Object()` in global context
    eval(load('../1.js'));
    expect(output.stdout).to.be.equal('true\nfalse\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    console.log = global_console_log; // reset default console.log
    class String extends global.String {} // To protecte `String()` in global context
    eval(load('../2.js'));
    expect(output.stdout).to.be.equal('undefined\nundefined\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('undefined\nmystring\nmystring\n');
  });
});