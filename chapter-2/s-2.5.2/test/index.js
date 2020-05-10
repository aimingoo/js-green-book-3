var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

require = require("@std/esm")(module,{"esm":"mjs"});

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Base features for namespace', output => {
    console.log = global_console_log;
	require('../1.mjs');
    expect(output.stdout).to.equal('good\ntrue\nfalse\nnull\n');
  });
});