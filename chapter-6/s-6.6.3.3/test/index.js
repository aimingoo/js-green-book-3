var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Recheck testcase for test.js', output => {
    expect(()=>require("../test.js")).not.be.throw();

    let expect_result = (()=> {
      "use strict";
      try {
        undefined = void 0;
      }
      catch(e) {
        return e.message;
      }
    })();
    expect(output.stdout.split("\n")).to.be.eql([
      expect_result,
      "A function declaration: function",
      ""]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase for test2.js', output => {
  	expect(()=>require("../test2.js")).not.be.throw();
    expect(output.stdout.split("\n")).to.be.eql([
      "strict mode: NaN",
      "normal mode: 200",
      ""]);
  });
});