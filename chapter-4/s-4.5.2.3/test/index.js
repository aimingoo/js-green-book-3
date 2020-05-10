var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require('../1.js')).be.throw(SyntaxError, "Undefined label");
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).be.throw(SyntaxError, "Undefined label");
  });
});