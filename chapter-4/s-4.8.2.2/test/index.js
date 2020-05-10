var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    require('../dist/1.js'); // transformed by @babel/plugin-proposal-class-properties
    expect(output.stdout).to.be.equal("100\n");
  });
});