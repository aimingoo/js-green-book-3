var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Recheck testcase 1', output => {
    eval(load('../1.js'));
    console.log(...Object.keys(aObject).sort());
    expect(output.stdout).to.equal("getName getValue name value\n");
    expect(aObject).to.be.an.instanceof(MyObject);
    expect(aObject.getName()).to.be.equal(aObject.name);
    expect(aObject.getValue()).to.be.equal(aObject.value);
  });

  fancy.stdout().stderr().
  it('Recheck testcase 2', output => {
    eval(load('../2.js'));
    console.log(Object.keys(obj).length); // leak out, empty object
    expect(obj).to.be.not.an.instanceof(foo);
  });
});