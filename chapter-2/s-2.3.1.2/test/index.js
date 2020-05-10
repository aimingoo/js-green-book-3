var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Update single-char in string', output => {
    require('../1.js');
    expect(output.stdout).to.equal('b\nabc\n');
  });

  fancy.stdout().stderr().
  it('Spread operator apply to string', output => {
    require('../2.js');
    expect(output.stdout).to.equal('s t r i n g\n');
  });

  it('String as interator', ()=> {
  	function* foo() {
      yield* 'string';
    }
    expect(foo().next()).to.eql({ value: 's', done: false });
  });
});