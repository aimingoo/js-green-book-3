var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('A simple case for `switch` statement', output => {
  	var obj = Object(2);
    switch (obj) {
      case 2: console.log('hello');
    }
    expect(output.stdout).to.be.empty;  // no `hello`
  });
});