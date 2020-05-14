var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require("../1.js")).not.be.throw();
    expect(output.stdout).to.be.equal("3\n");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require("../2.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "object [Number: 100]",
      "object [String: 'hello, world!']",
      "object [Boolean: true]",
      "object [Symbol: Symbol()]",
      ""]);
  });
});