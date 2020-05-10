var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

require = require("@std/esm")(module,{"esm":"mjs"});

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Constructor define in syntax parser phase', () => {
    expect(()=>require('../1.js')).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Method and constructor name in class define', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("function\nfunction\nundefined\n");
  });

  it('Load classes from modules', ()=> {
    expect(()=>require('../main.mjs')).not.be.throw();
  });
});
