var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    let faked_tor = (function*(){})();
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      // === PART 2 ===
      "function",
      "true",
      "true",
      "true",
      [ 'constructor', 'next', 'return', 'throw' ].join(),

      // === PART 2 ===
      " ->  1 2 3",
      " <-  8 , done: false",
      " <-  -5 , done: false",
      " <-  Ok , done: true",

      // === PART 3 ===
      "true",
      " ->  1 2 3",       // called by `new Set(...)`
      String(new Set),    // "Set { 8, -5 }",
      String(faked_tor),  // "Object [Generator] {}",
      " ->  1 2 3",       // called by `[...tor]`
      [ 8, -5 ].join(),   // the `arr`
      "",                 // nothing
      "8 -5",
      "8 -5",
      String(new Set),    // "Set { 8, -5 }",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "0 1 2 3 4 5 6 7 8 9",
      "0 1 2 3 4 5 6 7 8 9",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "3 4 5 6 7 8 9",
      "3 4 5",
      "5 6 7 8 9",
      ""]);
  });
});