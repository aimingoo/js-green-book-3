var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      // PART - 1
      "MyObject",
      "MyObject",
      "Bird",
      // PART - 2
      "false",
      "false",
      "true",
      // PART - 3
      "false",
      "true",
      ""]);
  });
});