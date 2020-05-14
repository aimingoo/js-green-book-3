var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\n8\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "this is <obj>: true",
      "this is <obj>: false",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    console.log = global_console_log; // reset default console.log
    let srcContext = load('../3.js');
    let tor, execContext = srcContext + '\nreturn tor;'
    expect(tor = Function(execContext)()).to.be.instanceof(Object);

    // 测试如下

    // 1st call, yield value and pause
    expect(tor.next('1st ignored').value).to.be.equal(20);

    // resume yield, and send data
    //  - yield nothing
    let send_data = "data...";
    tor.next(send_data);
    expect(output.stdout.split("\n")[0]).to.be.equal(`in generator: ${send_data}`);

    // again
    //  - push four parameters, but pick one only
    tor.next(1,2,3,4);
    expect(output.stdout.split("\n")[1]).to.be.equal('again: [ 1 ]');
  });
});