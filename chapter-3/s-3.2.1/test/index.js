var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The `null` is a object, and can be enumerate', output => {
    require('../1.js');
    expect(output.stdout).to.be.equal("object\n0\n");
  });

  fancy.stdout().stderr().
  it('The base features of empty object', output => {
    require('../2.js');
    expect(output.stdout).to.be.equal("object\ntrue\ntrue\n");
  });
});
