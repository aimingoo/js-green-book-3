var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Simple examples 1', output => {
    require('../1.js');
    expect(output.stdout).to.equal('false\ntrue\ntrue\ntrue\nfalse\n');
  });

  fancy.stdout().stderr().
  it('Simple examples 2', output => {
    require('../2.js');
    expect(output.stdout).to.equal('true\ntrue\nfalse\nfalse\n');
  });
});