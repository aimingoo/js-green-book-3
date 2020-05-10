var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('Recheck testcase 1', ()=> {
    expect(()=>require('../1.js')).be.throw(TypeError, 'is not a function');
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    expect(()=>require('../2.js')).not.be.throw();

    let output_stdout = output.stdout.split('\n');
    output_stdout.pop(); // ignore newline
    expect(Date.parse(output_stdout.pop())).to.not.be.NaN;
    expect(output_stdout).to.be.eql(["HELLO", "21"]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 3', output => {
    expect(()=>require('../3.js')).not.be.throw();

    let output_stdout = output.stdout.split('\n');
    output_stdout.pop(); // ignore newline
    expect(Date.parse(output_stdout.shift())).to.not.be.NaN;
    expect(output_stdout).to.be.eql(["true", "true"]);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 4', output => {
    expect(()=>require('../4.js')).not.be.throw();

    let output_stdout = output.stdout.split('\n');
    output_stdout.pop(); // ignore newline
    expect(Date.parse(output_stdout.shift())).to.not.be.NaN;
    expect(output_stdout).to.be.eql(["true", "true"]);
  });
});