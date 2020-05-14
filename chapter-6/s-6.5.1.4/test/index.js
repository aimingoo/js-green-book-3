var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    console.log = global_console_log; // reset default console.log

    expect(()=>require('../1.js')).not.be.throw();

    let util = require('util');
    let expect_descriptor = {
      value: 2000,
      writable: false,
      enumerable: false,
      configurable: true
    };
    expect(output.stdout.split("\n")).to.be.eql([
      "false",
      "100",
      "2000",
      ...util.format(expect_descriptor).split("\n"),
      ""]);
  });
});