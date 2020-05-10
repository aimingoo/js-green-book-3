var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

require = require("@std/esm")(module,{"esm":"mjs"});

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  // it.allowFail('Names in namespace - native feature only', ()=> {
  it('Names in namespace - native feature only', void function() {
    let myNames = require('../2.mjs');
    expect(Object.getOwnPropertyDescriptor(myNames, 'x'))
      .to.eql({ value: 'good', writable: true, enumerable: true, configurable: false });
  });
});