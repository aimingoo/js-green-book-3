var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).be.throw(TypeError, 'circular');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      '{"data":"string","tag":false}',
      '{"data":"string","tag":false}',
      '{"data":"string","tag":false}',
      '{"foo":{"x":100},"data":"string","tag":false}',
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    console.log = global_console_log; // reset default console.log
    expect(()=>require('../3.js')).not.be.throw();

    let util = require('util');
    let expect_result = '{"x":{"$ref":"$"}}';
    expect(output.stdout.split("\n")).to.be.eql([
      expect_result,
      util.format(JSON.parse(expect_result)),
      "{ x: [Circular] }",
      ""]);
  });
});
