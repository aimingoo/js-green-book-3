var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  it('Recheck testcase 1', ()=> {
    let _get_from_Input = ()=>"Number"; // test only
    let srcContext = load('../1.js');
    let obj, execContext = '(function() {\n' + srcContext + '\nreturn obj;})';
    obj = eval(execContext)();
    expect(obj).to.be.an.instanceof(Number);
  });

  it('Recheck testcase 2', ()=> {
    let obj; // catcher
    let _get_from_Input = ()=>"String"; // test only
    expect(()=>eval(load('../2.js'))).not.be.throw();
    expect(obj).to.be.an.instanceof(String);
  });
});