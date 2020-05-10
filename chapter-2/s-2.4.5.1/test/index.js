var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Label scope will ignore comments block', output => {
    require('../1.js');
    expect(output.stdout).to.equal('hello, is a test!\nto here.\n');
  });
});