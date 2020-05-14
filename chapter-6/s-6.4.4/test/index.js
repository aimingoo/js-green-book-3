var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);
  let util = require('util');

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    console.log = global_console_log; // reset default console.log

    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      util.format(new Map([[NaN, 1]])), // source: [[NaN, 0],[NaN, 1]]
      util.format(new Set([NaN])), // source: [[NaN, NaN]]
      util.format(new Set('abcdf134oshjgi')), // source: `abcadf134oaafshjafgoi`
      "14", // orignal: 21
      util.format(Int32Array.from('123456asdf')), // string -> set -> array-liked -> Int32Array
      ""]);
  });
});
