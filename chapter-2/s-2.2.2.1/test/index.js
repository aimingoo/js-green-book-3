var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Check `var` variant in global names', output => {
    // reset global console.log
    console.log = global_console_log;
    // indirect call in global
    (0, eval)(require('fs').readFileSync(require.resolve('../test1.js')).toString());
    // check
    expect(output.stdout).to.equal("100\nundefined\n");
  });
});