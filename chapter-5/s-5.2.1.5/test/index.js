var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('A simple demo for destructuring', ()=> {
    expect(()=>{
      let { x, y } = { x: 100, y: 100 };
    }).not.be.throw();
  });

  fancy.stdout().stderr().
  it('Destructuring with pattern assignment', output => {
    // case 1
    expect(()=> {
      let { x, y: { z, n: y } } = { x: 100, y: { z: 200 } };
      console.log(x, y, z);
    }).not.be.throw();

    // result for case 1
    let expect_result = output.stdout.split("\n");

    // case 2
    expect(()=> {
      let { x, y: tmp } = { x: 100, y: { z: 200 } };
      let { z, n: y } = tmp;
      console.log(x, y, z); // 100, undefined, 200
    }).not.be.throw();

    // compare
    let new_result = output.stdout.split("\n").slice(expect_result.length-1);
    expect(new_result).to.be.eql(expect_result);
  });
});