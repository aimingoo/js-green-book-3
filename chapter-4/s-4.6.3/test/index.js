var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('undefined\nundefined\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1 - extensional', output => {
    Object.prototype.x = 100;  // set super.x
    // !!! dont require again, because module load once only
    // expect(()=>require('../1.js')).not.be.throw();
    expect(()=>eval(load('../1.js'))).not.be.throw();
    expect(output.stdout).to.be.equal('100\n100\n');
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout).to.be.equal('100\n');
  });

  it('Recheck testcase 4 - a syntax concept-model only', ()=> {
    expect(()=>require('../4.js')).be.throw(SyntaxError);
  });
});