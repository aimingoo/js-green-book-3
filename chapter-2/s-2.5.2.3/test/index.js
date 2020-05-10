var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

require = require("@std/esm")(module,{"esm":"mjs"});

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Rererence hoisting when import module', output => {
    require('../1.mjs');
    expect(output.stdout).to.equal('hello\n');
  });

  fancy.stdout().stderr().
  it('Rererence name from namespace, three methods', output => {
    require('../3.mjs');
    expect(output.stdout).to.equal('good good good\n');
  });

  it('Imported name is constant variable', ()=> {
    expect(() => {
      require('../4.mjs');
    }).be.throw(TypeError); // Assignment to constant variable
  });

  fancy.stdout().stderr().
  it('Pick (no)existing name from namespace and rewrite', output => {
    require('../5.mjs');
    expect(output.stdout).to.equal('good\n100\nundefined\n');
  });

  it('Imported no-existing name will throw SyntaxError', ()=> {
    expect(() => {
      require('../6.mjs');
    }).be.throw(SyntaxError); // not provide an export named ...
  });
});