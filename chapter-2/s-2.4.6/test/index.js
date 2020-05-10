var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Throw a value', output => {
    try {
      throw(100);
    }
    catch(e) { 
      console.log(e); // 100
    }
    expect(output.stdout).to.equal('100\n');
  });
});