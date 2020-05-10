var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Using `{}` to define function body', () => {
    expect(() => require('../1.js')).not.be.throw();
  });
});