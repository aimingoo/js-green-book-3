var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Assignment pattern for assignment operators', output => {
    require('../1.js');
    expect(output.stdout).to.equal('1 2 3\n');
  });

  fancy.stdout().stderr().
  it('Assignment pattern for variants define', output => {
    require('../2.js');
    expect(output.stdout).to.equal('1 2 3\n');
  });
});