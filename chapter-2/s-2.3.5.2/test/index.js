var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Spread array in arguments', ()=> {
    let foo = (x,y,z)=>x+Math.pow(y, z);
    expect(foo(100, ...[3, 2])).to.equal(109);
  });

  it('Spread array in array', ()=> {
    let arr = [100,200];
    expect(['a','b','c',...arr, 'd']).to.be
      .eql([ "a", "b", "c", 100, 200, "d" ]);
  });

  it('Spread object in object', ()=> {
    let obj = {name: 'obj', value: 1};
    expect({message: 'spread', ...obj}).to.be
      .eql({ message: 'spread', name: 'obj', value: 1 });
  });
});