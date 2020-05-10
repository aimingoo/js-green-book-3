var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The `{}` as statement tokens', output => {
    expect(() => require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal('3\n3\n100 1000\nobject\n1000\n');
  });
});