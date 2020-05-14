var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let global_console_log = console.log.bind(console);

  fancy.stdout().stderr().
  it('Recheck testcase 1~6', output => {
    console.log = global_console_log; // reset default console.log

    expect(()=>require('../1.js')).not.be.throw();
    expect(()=>require('../2.js')).not.be.throw();
    expect(()=>require('../3.js')).not.be.throw();
    expect(()=>require('../4.js')).be.throw(SyntaxError, 'token');
    expect(()=>require('../5.js')).not.be.throw();
    expect(()=>require('../6.js')).not.be.throw();

    let value = 1, util = require("util")
    expect(output.stdout.split("\n")).to.be.eql([
      "undefined", // 1.js
      "6", "6", // 2.js
      "true", "this is a string.", "3", // 3.js
      "1", // 5.js
      util.format({value}), // 6.js
      ""]);
  });
});