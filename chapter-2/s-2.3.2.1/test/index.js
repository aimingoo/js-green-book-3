var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Simple examples', output => {
    require('../1.js');
    expect(output.stdout).to.equal(`false\nfalse\ntrue\ntrue
false false true true
true false false false
false false false\n`);
  });
});