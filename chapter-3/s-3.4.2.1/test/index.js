var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal(`${global}\n`);
  });

  it('Recheck testcase 2', ()=> {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    eval(load('../3.js'));
    expect(output.stdout).to.be.equal(`${String(obj)}\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();
    expect(output.stdout).to.be.equal(`${new Object}\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 5', output => {
    expect(()=>require('../5.js')).not.be.throw();
    expect(output.stdout).to.be.equal(`${new Object}\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6, phase 1', output => {
    console.log = global_console_log; // reset default console.log
    eval(load('../6.js'));
    // 严格模式下，函数没有传入this引用时，它指向undefined
    showInStrict(); // 显示undefined
    expect(output.stdout).to.be.equal('undefined\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6, phase 2', output => {
    eval(load('../6.js'));
    // 非严格模式下的函数，在没有传入this时，它指向global
    var showGlobal = obj.showThis;
    showGlobal(); // 显示global
    expect(output.stdout).to.be.equal(`${global}\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6, phase 3', output => {
    eval(load('../6.js'));
    // 虽然showMe指向showInStrict，但是由于传入了obj，所以仍然显示有效的this
    obj.showMe = showInStrict;
    obj.showMe(); // 显示obj
    expect(output.stdout).to.be.equal(`${obj}\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 6, phase 4', output => {
    eval(load('../6.js'));
    // 严格模式下的函数也可以绑定到指定的对象上
    var showMe = showInStrict.bind(new Object);
    var showNull = showInStrict.bind(null);
    showMe();  // 显示指定对象
    showNull(); // 显示null
    expect(output.stdout).to.be.equal(`${new Object}\n\n`);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 7', output => {
    expect(()=>require('../7.js')).not.be.throw();
    expect(output.stdout).to.be.equal('Outside\naObject\nOutside\nOutside\n');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 8', output => {
    expect(()=>require('../8.js')).not.be.throw();
    expect(output.stdout).to.be.equal('Outside\nOutside\n');
  });
});
