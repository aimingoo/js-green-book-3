var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Character escape sequences in string literals', output => {
    require('../1.js');
    expect(output.stdout).to.equal("abcdefghijklmnopqrstuvwxyz 123456789 +-*/\n");
  });

  fancy.stdout().stderr().
  it('Special character or UTF-16', output => {
    require('../2.js');
    expect(output.stdout).to.equal("5\n5\n2\n100\n");
  });
});