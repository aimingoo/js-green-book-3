var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var {resolved: chapter, promised} = require('chapter');

Promise.require = promised(require);

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('A standard `Hello World!` base on promise', output => {
    return Promise.require('../1.js').then(()=> {
      expect(output.stdout.split("\n")).to.be.eql([
        "Hello, World!",
        ""]);
    });
  });
});