var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Simple boolean operator', output => {
    require('../1.js');
    expect(output.stdout).to.equal('Okay\nboolean false\n');
  });
});