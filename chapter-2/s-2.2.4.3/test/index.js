var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Named function in `if` statement', output => {
    require('../1.js')
    expect(output.stdout).to.equal('undefined\n');
  });

  fancy.stdout().stderr().
  it('Default parameters define', output => {
    require('../2.js')
    expect(output.stdout).to.equal('abc,100\n');
  });

  fancy.stdout().stderr().
  it('Pass `undefined` to using default parameters', output => {
    require('../3.js')
    expect(output.stdout).to.equal('abc,abc\n');
  });

  fancy.stdout().stderr().
  it('Rest parameters define', output => {
    require('../4.js')
    expect(output.stdout).to.equal('c,d,e\n');
  });

  fancy.stdout().stderr().
  it('Templet in rest parameters', output => {
    require('../5.js')
    expect(output.stdout).to.equal('c\n');
  });

  fancy.stdout().stderr().
  it('Rest syntax in assignment pattern', output => {
    require('../6.js')
    expect(output.stdout).to.equal('3,4,5\n');
  });
});
