var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Some examples for typeof operator', output => {
    require('../1.js');
    expect(output.stdout).to.equal('26\nnumber\nundefined\nundefined\n');
  });

  it('The typeof is unsafe operation', ()=> {
    expect(function() {
      require('../2.js')
    }).be.throw();
  });
});