var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let global_console_log = console.log.bind(console);

  it('Recheck testcase 1 - error of write `this`', ()=> {
    expect(()=>require('../1.js')).be.throw(ReferenceError);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    (0, eval)(load('../2.js')); // in global context
    expect(output.stdout).to.be.equal('true\nhello\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    (0, eval)(load('../3.js')); // in global context
    expect(output.stdout).to.be.equal('1000\n');
  });

  fancy.stdout().stderr().
  it('More checks ...', output => {
    console.log = global_console_log; // reset default console.log

    // undefined ... 可以被重写，并且...也是可以删除的。例如：

    // 可以作为一般属性操作
    expect(eval(`
      with ({undefined}) delete undefined;
    `)).to.be.true;

    // 不可以在对象闭包中将"null"作为一个名字操作
    with ({null: 1}) console.log(delete null, null, valueOf().null);
    expect(output.stdout).to.be.equal('true null 1\n');
  });
});