var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    expect(()=>require("../1.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "object",
      "object",
      "object",
      "object",
      "object",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 1 - strict mode', output => {
    expect(()=>{
      "use strict"; eval(load("../1.js"));
    }).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "null",
      "undefined",
      "string",
      "number",
      "boolean",
      ""]);
  });
});