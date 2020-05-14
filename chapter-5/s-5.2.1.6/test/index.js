var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Recheck testcase 1', ()=> {
    let objType = "Number"; // test only
    let srcContext = load('../1.js');
    let obj, execContext = '(function() {\n' + srcContext + '\nreturn obj;})';
    obj = eval(execContext)();
    expect(obj).to.be.an.instanceof(Number);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    let objType = "String"; // test only
    expect(()=>eval(load('../2.js'))).not.be.throw();
    expect(output.stdout).to.be.equal(`${new String}\n`);
  });
});