var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The `Object.prototype` is a empty object', output => {
    require('../1.js');
    expect(output.stdout).to.be.equal("0\n");
  });
});
