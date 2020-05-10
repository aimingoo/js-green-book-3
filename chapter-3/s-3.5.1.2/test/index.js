var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  it('Recheck testcase 1', ()=> {
    eval(load('../1.js'));
    // 当你试图读obj.aData属性时，就会触发异常...
    expect(()=>obj.aData).be.throw(RangeError, "stack"); // Maximum call stack size exceeded
  });
});