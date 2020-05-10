var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();

    let output_stdout = output.stdout.split("\n");
    output_stdout.pop(); // pop empty line
    output_stdout.map(x=>x.split(',')).forEach(x=>x.forEach(x2 => {
      expect(x2).to.not.be.equal('outer');
    }));
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    // 注：该例在NodeJS中的执行效果会不同
    expect(output.stdout.split("\n")).to.be.eql([
      [undefined, "outer"].join(), // "outer", "outer"
      "function",
      ""])
  });
});