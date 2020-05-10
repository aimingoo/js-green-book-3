var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  it('Function as constructor', () => {
    eval(load('../1.js'));
    expect(new aClass).to.be.instanceof(aClass);
  });

  fancy.stdout().stderr().
  it('Simple access own property table', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\ntrue\n");
  });
});
