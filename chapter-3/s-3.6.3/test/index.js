var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let refChapter = '3.6.2.4', ref = `../../s-${refChapter}`;

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    // pick MetaClass() into current context only
    let srcContext = load(`${ref}/1.js`);
    let MetaClass, execContext = srcContext + '\nreturn MetaClass;';
    expect(MetaClass = Function(execContext)()).to.be.a("function");

    expect(()=>eval(load('../1.js'))).not.be.throw();
    expect(output.stdout).to.be.equal('true\ntrue\nfunction\nfunction\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2 - require("@aimingoo/metameta")', output => {
    expect(()=>require('../2.js')).be.not.throw();
    expect(output.stdout).to.be.equal('true\n\n\ntrue\n1,2,3\n');
  });
});
