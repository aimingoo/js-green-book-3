var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    eval(load('../1.js'));
    expect(output.stdout.split('\n').map(x=>x.split(',').sort())).to.deep.have.members([
      "n1,n2".split(','),
      "n2".split(','),
      "n1,n2".split(','),
      "n2".split(','),
      "n2,n3".split(','),
      [""]]);
  });
});