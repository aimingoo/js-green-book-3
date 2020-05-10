var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  fancy.stdout().stderr().
  it('The `global` work on normal mode always', output => {
    expect(() => {
      "use strict"; // current context into strict mode
      eval(require('fs').readFileSync(require.resolve('../foo.js')).toString());
    }).not.be.throw();
    expect(output.stdout).to.be.equal('x is not defined\nundefined\nnumber\n1234\n');
  });

  fancy.stdout().stderr().
  it('When current context work on normal mode', output => {
    expect(() => require('../foo.js')).not.be.throw();
    expect(output.stdout).to.be.equal('number\nnumber\n1234\n');
  });
});
