var expect = require('chai').expect;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it("A data property description of key 'name'", ()=> {
    let obj = {
      name: 'value'
    };
    expect(Object.getOwnPropertyDescriptor(obj, 'name')).to.be.eql({
      value: 'value',
      writable: true,
      enumerable: true,
      configurable: true
    })
  });
});