var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('Write constant in normal mode', output => {
    expect(()=> {
      const i = 100;
      i = 300;
      console.log(i);
    }).be.throw(TypeError);
  });

  it('Write constant in strict mode, will trow a exception', ()=> {
    expect(function() {
      "use strict";
      const i = 100;
      i = 300;
    }).be.throw(TypeError);
  });
});
