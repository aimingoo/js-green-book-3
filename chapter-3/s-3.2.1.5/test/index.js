var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  let load = filename => require('fs').readFileSync(require.resolve(filename)).toString();

  fancy.stdout().stderr().
  it('Using Object() when has invalid prototype of constructor', output => {
    expect(()=>require('../1.js')).not.be.throw();
    expect(output.stdout).to.be.equal("true\n");
  });

  fancy.stdout().stderr().
  it('Some features when prototype is null', output => {
    expect(()=>require('../2.js')).not.be.throw();
    expect(output.stdout).to.be.equal("call in...\nobject\ntrue\nobject\nfalse\nfalse\nobject\n");
  });

  fancy.stdout().stderr().
  it('The instanceof operator invalid when prototype is null', output => {
    eval(load('../1.js')); // load 1.js and ignore output
    expect(()=>obj instanceof MyObject).be.throw(TypeError, 'non-object prototype');
  });
});
