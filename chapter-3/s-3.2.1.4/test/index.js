var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The internal properties and methods', output => {
    expect(()=>require('../1.js')).not.be.throw();

    let output_stdout = output.stdout.split('\n');
    expect(parseInt(output_stdout[2])).to.be.satisfy(x=>x>0);

    output_stdout.splice(2,1); // delete one element
    expect(output_stdout.join("\n")).to.be.equal("true\n0\n0\n");
  });
});
