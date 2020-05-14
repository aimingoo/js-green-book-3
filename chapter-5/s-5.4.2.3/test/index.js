var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    require('../1.js');
    expect(output.stdout.split("\n")).to.be.eql([
      "-> level_n",
      "-> level_2",
      "-> test",
      "-> ",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2 - set imax to 1', output => {
    require('../2.js');
    expect(output.stdout.split("\n")).to.be.eql([
      "-> f2",
      "-> f1",
      "-> ",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3 - set imax to 10', output => {
    expect(() => require('../3.js')).be.throw(Error, 'Force break');
  });
});