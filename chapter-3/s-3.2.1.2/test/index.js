var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Simple access own property table', output => {
    require('../1.js');
    expect(output.stdout).to.be.equal("abc\nabc\n\nabc\n10\nvalue\n");
  });
});
