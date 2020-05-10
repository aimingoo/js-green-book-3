var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Using `{}` in template literals', output => {
    expect(() => require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('undefined\n[object Object]\n');
  });
});