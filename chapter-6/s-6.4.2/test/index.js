var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Base cases for array', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "1 2",
      [ 'elements', 1, 2, '345', undefined, 12 ].join(),
      "1 2 5",
      "100 => 0,1,2,4,length",
      ""]);
  });
});